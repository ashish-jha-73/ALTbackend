const Attempt = require('../models/Attempt');
const Question = require('../models/Question');
const { CONCEPT_GRAPH, MASTERY_UNLOCK_THRESHOLD } = require('../utils/constants');

function getWeakestUnlockedConcept(user) {
  const knowledge = Object.fromEntries(user.learner_model.knowledge || []);
  const unlocked = new Set(user.progress.unlocked_concepts || []);

  let weakest = null;
  CONCEPT_GRAPH.forEach((node) => {
    if (!unlocked.has(node.id)) return;
    const mastery = knowledge[node.id] || 0;
    if (!weakest || mastery < weakest.mastery) {
      weakest = { id: node.id, mastery, node };
    }
  });

  return weakest || { id: 'expressions_foundation', mastery: 0.2, node: CONCEPT_GRAPH[0] };
}

function getWeakestSkill(user, conceptNode) {
  const skillMap = Object.fromEntries(user.learner_model.skill_mastery || []);
  let weakestSkill = conceptNode.skills[0];
  let weakestValue = skillMap[weakestSkill] || 0.2;

  conceptNode.skills.forEach((skill) => {
    const val = skillMap[skill] || 0.2;
    if (val < weakestValue) {
      weakestValue = val;
      weakestSkill = skill;
    }
  });

  return { skill: weakestSkill, mastery: weakestValue };
}

async function getAttemptsByQuestion(userId) {
  const rows = await Attempt.aggregate([
    { $match: { user_id: userId } },
    { $group: { _id: '$question_id', count: { $sum: 1 } } },
  ]);

  const map = new Map();
  rows.forEach((row) => map.set(String(row._id), row.count));
  return map;
}

function recentErrorType(user) {
  const recent = user.learner_model.recent_errors || [];
  if (recent.length < 2) return null;
  const tail = recent.slice(-2);
  return tail[0] === tail[1] ? tail[1] : null;
}

function buildQuestionQuery({ user, conceptId, weakestSkill, action, allowedTypes }) {
  const query = {
    concept: conceptId,
    difficulty: action.difficulty,
    _id: { $nin: user.progress.question_history || [] },
    skills: weakestSkill,
  };

  // Prefer allowed types. If action specifies a questionType and it's allowed, use it; otherwise allow any of the allowedTypes
    const allowed =
      allowedTypes || [
        'mcq',
        'fill_blank',
        'fill_in_the_blank',
        'drag_sort',
        'drag_and_drop',
      ];
  if (action.questionType && allowed.includes(action.questionType)) {
    query.question_type = action.questionType;
  } else {
    query.question_type = { $in: allowed };
  }

  const repeatedError = recentErrorType(user);
  if (repeatedError) {
    query.misconception_target = repeatedError;
  }

  const level = user.progress.concept_levels.get(conceptId) || 1;
  query.level = level;

  return query;
}

function sortCandidates(candidates, attemptsMap) {
  return [...candidates].sort((a, b) => {
    const aCount = attemptsMap.get(String(a._id)) || 0;
    const bCount = attemptsMap.get(String(b._id)) || 0;
    if (aCount !== bCount) return aCount - bCount;
    return a.createdAt.getTime() - b.createdAt.getTime();
  });
}

async function selectQuestionForAction(user, action) {
  const weakestConcept = getWeakestUnlockedConcept(user);
  const weakestSkill = getWeakestSkill(user, weakestConcept.node);

  const query = buildQuestionQuery({
    user,
    conceptId: weakestConcept.id,
    weakestSkill: weakestSkill.skill,
    action,
      allowedTypes: ['mcq', 'fill_blank', 'fill_in_the_blank', 'drag_sort', 'drag_and_drop'],
  });

  let candidates = await Question.find(query).limit(80);

  if (!candidates.length) {
    candidates = await Question.find({
      concept: weakestConcept.id,
      difficulty: action.difficulty,
      _id: { $nin: user.progress.question_history || [] },
    }).limit(80);
  }

  if (!candidates.length) {
    candidates = await Question.find({
      concept: weakestConcept.id,
      _id: { $nin: user.progress.question_history || [] },
    }).limit(80);
  }

  if (!candidates.length) {
    candidates = await Question.find({ concept: weakestConcept.id }).limit(80);
  }

  if (!candidates.length) return null;


  const attemptsMap = await getAttemptsByQuestion(user._id);

  const history = user.progress.question_history || [];
  const lastQuestionId = history.length ? history[history.length - 1] : null;
  let lastQuestionType = null;
  if (lastQuestionId) {
    try {
      const lastQ = await Question.findById(lastQuestionId).select('question_type');
      if (lastQ) lastQuestionType = lastQ.question_type;
    } catch (e) {
    }
  }

  const topPool = sortCandidates(candidates, attemptsMap).slice(0, 30);

  const weights = topPool.map((q) => {
    const attempts = attemptsMap.get(String(q._id)) || 0;
    let w = 1 / (1 + attempts);
    if (lastQuestionType && q.question_type === lastQuestionType) w *= 0.6; 
    w += Math.random() * 0.08;
    return w;
  });

  const totalW = weights.reduce((s, x) => s + x, 0);
  let r = Math.random() * totalW;
  let chosen = topPool[0];
  for (let i = 0; i < topPool.length; i++) {
    r -= weights[i];
    if (r <= 0) {
      chosen = topPool[i];
      break;
    }
  }

  const conceptMastery = (Object.fromEntries(user.learner_model.knowledge || []))[weakestConcept.id] || 0;
  const conceptStatus = conceptMastery >= MASTERY_UNLOCK_THRESHOLD ? 'completed' : 'in_progress';

  return {
    question: chosen,
    target: {
      concept: weakestConcept.id,
      concept_label: weakestConcept.node.label,
      weakest_skill: weakestSkill.skill,
      weakest_skill_mastery: weakestSkill.mastery,
      concept_status: conceptStatus,
    },
  };
}

async function selectQuestionForConcept(user, action, conceptId) {
  // Find the concept node in graph
  const conceptNode = CONCEPT_GRAPH.find((n) => n.id === conceptId) || CONCEPT_GRAPH[0];
  const weakestSkill = getWeakestSkill(user, conceptNode);

  const query = buildQuestionQuery({
    user,
    conceptId,
    weakestSkill: weakestSkill.skill,
    action,
      allowedTypes: ['mcq', 'fill_blank', 'fill_in_the_blank', 'drag_sort', 'drag_and_drop'],
  });

  let candidates = await Question.find(query).limit(80);

  if (!candidates.length) {
    candidates = await Question.find({
      concept: conceptId,
      difficulty: action.difficulty,
      _id: { $nin: user.progress.question_history || [] },
    }).limit(80);
  }

  if (!candidates.length) {
    candidates = await Question.find({
      concept: conceptId,
      _id: { $nin: user.progress.question_history || [] },
    }).limit(80);
  }

  if (!candidates.length) {
    candidates = await Question.find({ concept: conceptId }).limit(80);
  }

  if (!candidates.length) return null;

  const attemptsMap = await getAttemptsByQuestion(user._id);

  const history = user.progress.question_history || [];
  const lastQuestionId = history.length ? history[history.length - 1] : null;
  let lastQuestionType = null;
  if (lastQuestionId) {
    try {
      const lastQ = await Question.findById(lastQuestionId).select('question_type');
      if (lastQ) lastQuestionType = lastQ.question_type;
    } catch (e) {
    }
  }

  const topPool = sortCandidates(candidates, attemptsMap).slice(0, 30);

  const weights = topPool.map((q) => {
    const attempts = attemptsMap.get(String(q._id)) || 0;
    let w = 1 / (1 + attempts);
    if (lastQuestionType && q.question_type === lastQuestionType) w *= 0.6;
    w += Math.random() * 0.08;
    return w;
  });

  const totalW = weights.reduce((s, x) => s + x, 0);
  let r = Math.random() * totalW;
  let chosen = topPool[0];
  for (let i = 0; i < topPool.length; i++) {
    r -= weights[i];
    if (r <= 0) {
      chosen = topPool[i];
      break;
    }
  }

  const conceptMastery = (Object.fromEntries(user.learner_model.knowledge || []))[conceptId] || 0;
  const conceptStatus = conceptMastery >= MASTERY_UNLOCK_THRESHOLD ? 'completed' : 'in_progress';

  return {
    question: chosen,
    target: {
      concept: conceptId,
      concept_label: conceptNode.label,
      weakest_skill: weakestSkill.skill,
      weakest_skill_mastery: weakestSkill.mastery,
      concept_status: conceptStatus,
    },
  };
}

module.exports = {
  selectQuestionForAction,
  selectQuestionForConcept,
};
