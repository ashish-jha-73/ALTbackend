const { updateConceptMastery } = require('./masteryService');
const { inferConfidence } = require('./scoringService');
const { MASTERY_UNLOCK_THRESHOLD } = require('../utils/constants');

function clamp01(value) {
  return Math.max(0, Math.min(1, value));
}

function computeCognitiveLoad({ attempts, usedHints, timeTaken, expectedTime }) {
  const safeExpected = expectedTime > 0 ? expectedTime : 60;
  return attempts + usedHints + timeTaken / safeExpected;
}

function updateRunningAverage(previousAvg, count, latest) {
  if (count <= 0) return latest;
  return (previousAvg * (count - 1) + latest) / count;
}

function updateSkillMastery(user, skills, finalCorrect) {
  let totalGain = 0;
  skills.forEach((skill) => {
    const prev = user.learner_model.skill_mastery.get(skill) || 0.2;
    const delta = finalCorrect ? 0.08 : -0.04;
    const next = clamp01(prev + delta);
    user.learner_model.skill_mastery.set(skill, next);
    totalGain += Math.max(0, next - prev);
  });
  return skills.length ? totalGain / skills.length : 0;
}

function updateErrorDistribution(errorDistribution, errorType) {
  if (!errorType || errorType === 'none') return;
  if (errorType in errorDistribution) errorDistribution[errorType] += 1;
}

function detectGuessing({ attempts, timeTaken, expectedTime, finalCorrect }) {
  return !finalCorrect && attempts <= 1 && timeTaken < expectedTime * 0.45;
}

function updateUnlocks(user, conceptGraph) {
  const unlocked = new Set(user.progress.unlocked_concepts || []);
  const completed = new Set(user.progress.completed_concepts || []);
  const knowledge = Object.fromEntries(user.learner_model.knowledge || []);

  conceptGraph.forEach((node) => {
    const mastery = knowledge[node.id] || 0;
    if (mastery >= MASTERY_UNLOCK_THRESHOLD) {
      completed.add(node.id);
    }
  });

  conceptGraph.forEach((node) => {
    const ready = node.prerequisites.every((pid) => completed.has(pid));
    if (ready) unlocked.add(node.id);
  });

  user.progress.completed_concepts = [...completed];
  user.progress.unlocked_concepts = [...unlocked];
}

function updatePerformanceTrend(user, reward) {
  user.learner_model.performance_trend.push(Number(reward.toFixed(3)));
  if (user.learner_model.performance_trend.length > 30) {
    user.learner_model.performance_trend = user.learner_model.performance_trend.slice(-30);
  }
}

function updateFatigueState(user, load) {
  const prevLoad = user.learner_model.cognitive_state.load_score || 0;
  const fatigue = user.learner_model.cognitive_state.fatigue_level || 0;
  const trendUp = load > prevLoad ? 0.06 : -0.03;

  user.learner_model.cognitive_state.load_score = load;
  user.learner_model.cognitive_state.fatigue_level = clamp01(fatigue + trendUp);
}

function updateConfidenceCalibration(user, selfReported, inferredLabel, finalCorrect) {
  user.learner_model.confidence_model.self_reported = selfReported;
  user.learner_model.confidence_model.inferred = inferredLabel;

  if ((selfReported === 'high' && !finalCorrect) || inferredLabel === 'overconfident') {
    user.learner_model.confidence_model.overconfidence_count += 1;
    return 'overconfidence';
  }

  if (selfReported === 'low' && finalCorrect && (inferredLabel === 'high' || inferredLabel === 'medium')) {
    user.learner_model.confidence_model.underconfidence_count += 1;
    return 'underconfidence';
  }

  return 'calibrated';
}

function updateEvaluationMatrix(user, { attempts, skipped, finalCorrect }) {
  const matrix = user.learner_model.evaluation_matrix;
  const totalRetriesForItem = Math.max(0, attempts - 1);

  matrix.total_answered += 1;
  matrix.total_retries += totalRetriesForItem;

  if (skipped) {
    matrix.total_skips += 1;
    if (totalRetriesForItem > 0) {
      matrix.skip_after_retry += 1;
    }
  } else if (totalRetriesForItem > 0 && finalCorrect) {
    matrix.solved_after_retry += 1;
  } else if (totalRetriesForItem > 0 && !finalCorrect) {
    matrix.wrong_after_retry += 1;
  }

  const attemptsWithRetry =
    matrix.solved_after_retry + matrix.wrong_after_retry + matrix.skip_after_retry;
  matrix.retry_success_rate =
    attemptsWithRetry > 0 ? matrix.solved_after_retry / attemptsWithRetry : 0;
  matrix.skip_rate = matrix.total_answered > 0 ? matrix.total_skips / matrix.total_answered : 0;
}

function updateBehaviorProfile(user, { guessing, attempts, usedHints, skipped }) {
  const total = Math.max(1, user.learner_model.total_attempts);
  const prevGuess = user.learner_model.behavioral_profile.guessing_tendency || 0;
  user.learner_model.behavioral_profile.guessing_tendency =
    (prevGuess * (total - 1) + (guessing ? 1 : 0)) / total;

  const persistenceRaw = 1 - Math.abs(2 - attempts) * 0.25;
  user.learner_model.behavioral_profile.persistence = clamp01(
    (user.learner_model.behavioral_profile.persistence * (total - 1) + persistenceRaw) / total
  );

  const hintDependency = (user.learner_model.hint_usage || 0) / total;
  user.learner_model.behavioral_profile.hint_dependency = clamp01(hintDependency / 3);

  const prevSkip = user.learner_model.behavioral_profile.skip_tendency || 0;
  user.learner_model.behavioral_profile.skip_tendency =
    (prevSkip * (total - 1) + (skipped ? 1 : 0)) / total;
}

function updateLearnerState({
  user,
  question,
  finalCorrect,
  attempts,
  timeTaken,
  usedHints,
  selfReportedConfidence,
  detectedErrorType,
  conceptGraph,
  skipped,
}) {
  const expectedTime = question.time_expected || 60;
  const load = computeCognitiveLoad({ attempts, usedHints, timeTaken, expectedTime });
  const concept = question.concept;
  const previousMastery = user.learner_model.knowledge.get(concept) || 0.2;
  const updatedMastery = updateConceptMastery(previousMastery, {
    finalCorrect,
    attempts,
    usedHints,
  });
  user.learner_model.knowledge.set(concept, updatedMastery);

  const skillGain = updateSkillMastery(user, question.skills || [], finalCorrect);

  user.learner_model.total_attempts += 1;
  user.learner_model.hint_usage += usedHints;
  user.learner_model.avg_time = updateRunningAverage(
    user.learner_model.avg_time,
    user.learner_model.total_attempts,
    timeTaken
  );

  if (finalCorrect) {
    user.learner_model.streaks.correct_streak += 1;
    user.learner_model.streaks.wrong_streak = 0;
  } else {
    user.learner_model.streaks.wrong_streak += 1;
    user.learner_model.streaks.correct_streak = 0;
  }

  updateErrorDistribution(user.learner_model.error_distribution, detectedErrorType);

  if (!finalCorrect && detectedErrorType !== 'none') {
    user.learner_model.recent_errors.push(detectedErrorType);
    if (user.learner_model.recent_errors.length > 12) {
      user.learner_model.recent_errors = user.learner_model.recent_errors.slice(-12);
    }
  }

  const inferredConfidence = inferConfidence({
    finalCorrect,
    timeTaken,
    attempts,
    usedHints,
    expectedTime,
  });

  const confidenceState = updateConfidenceCalibration(
    user,
    selfReportedConfidence,
    inferredConfidence.label,
    finalCorrect
  );

  const guessing = detectGuessing({ attempts, timeTaken, expectedTime, finalCorrect });
  updateBehaviorProfile(user, { guessing, attempts, usedHints, skipped });
  updateEvaluationMatrix(user, { attempts, skipped, finalCorrect });
  updateFatigueState(user, load);

  user.progress.current_concept = concept;
  user.progress.last_load = load;

  const questionId = question._id;
  const history = user.progress.question_history || [];
  if (!history.some((id) => String(id) === String(questionId))) {
    history.push(questionId);
    user.progress.question_history = history.slice(-200);
  }

  const currentLevel = user.progress.concept_levels.get(concept) || 1;
  if (finalCorrect && currentLevel < 3) {
    user.progress.concept_levels.set(concept, currentLevel + 1);
  }

  updateUnlocks(user, conceptGraph);

  return {
    load,
    guessing,
    inferredConfidence,
    confidenceState,
    previousMastery,
    updatedMastery,
    skillGain,
  };
}

module.exports = {
  computeCognitiveLoad,
  updateLearnerState,
  updatePerformanceTrend,
};
