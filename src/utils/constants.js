const DIFFICULTY_ORDER = ['easy', 'medium', 'hard'];
const QUESTION_TYPES = ['mcq', 'step', 'error_detection', 'fill_blank'];
const MASTERY_UNLOCK_THRESHOLD = 0.7;

const CONCEPT_GRAPH = [
  {
    id: 'expressions_foundation',
    label: 'Expressions',
    prerequisites: [],
    subtopic: 'algebraic_expressions',
    skills: ['identify_like_terms', 'combine_coefficients'],
  },
  {
    id: 'simplification_arena',
    label: 'Simplification',
    prerequisites: ['expressions_foundation'],
    subtopic: 'algebraic_expressions',
    skills: ['distributive_property', 'remove_brackets', 'collect_like_terms'],
  },
  {
    id: 'equation_dojo',
    label: 'Equations',
    prerequisites: ['simplification_arena'],
    subtopic: 'linear_equations',
    skills: ['inverse_operation', 'balance_method', 'two_step_solving'],
  },
  {
    id: 'word_problem_lab',
    label: 'Word Problems',
    prerequisites: ['equation_dojo'],
    subtopic: 'linear_equations',
    skills: ['equation_translation', 'multi_step_reasoning'],
  },
];

const CONCEPT_TO_SUBTOPIC = Object.fromEntries(
  CONCEPT_GRAPH.map((c) => [c.id, c.subtopic])
);

const MISCONCEPTION_GRAPH = {
  sign_error: 'integer_sign_understanding',
  concept_error: 'structure_and_balance_concept',
  careless_error: 'attention_and_verification_habit',
  equation_error: 'balance_concept',
};

module.exports = {
  DIFFICULTY_ORDER,
  QUESTION_TYPES,
  MASTERY_UNLOCK_THRESHOLD,
  CONCEPT_GRAPH,
  CONCEPT_TO_SUBTOPIC,
  MISCONCEPTION_GRAPH,
};
