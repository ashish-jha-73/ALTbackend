const DIFFICULTY_ORDER = ['easy', 'medium', 'hard'];
const QUESTION_TYPES = ['mcq', 'step', 'error_detection', 'fill_blank', 'match', 'drag_sort'];
const MASTERY_UNLOCK_THRESHOLD = 0.7;

const CONCEPT_GRAPH = [
  {
    id: 'expressions_foundation',
    label: 'Expressions',
    prerequisites: [],
    subtopic: 'algebraic_expressions',
    skills: ['identify_like_terms', 'combine_coefficients', 'identify_variables', 'add_expressions', 'subtract_expressions'],
  },
  {
    id: 'multiplication_expressions',
    label: 'Multiplication & Identities',
    prerequisites: ['expressions_foundation'],
    subtopic: 'algebraic_expressions',
    skills: ['multiply_monomials', 'distributive_property', 'foil_method', 'algebraic_identities'],
  },
  {
    id: 'equation_basics',
    label: 'Equation Basics',
    prerequisites: ['expressions_foundation'],
    subtopic: 'linear_equations',
    skills: ['identify_equation', 'lhs_rhs', 'balance_method', 'check_solution'],
  },
  {
    id: 'equation_solving',
    label: 'Solving Equations',
    prerequisites: ['equation_basics'],
    subtopic: 'linear_equations',
    skills: ['transposition', 'solve_brackets', 'cross_multiplication', 'clear_fractions'],
  },
  {
    id: 'advanced_equations',
    label: 'Advanced Equations',
    prerequisites: ['equation_solving'],
    subtopic: 'linear_equations',
    skills: ['collect_variables', 'variables_both_sides', 'special_cases'],
  },
  {
    id: 'word_problems_basic',
    label: 'Word Problems',
    prerequisites: ['equation_solving'],
    subtopic: 'word_problems',
    skills: ['equation_translation', 'age_problems', 'perimeter_problems', 'speed_problems', 'money_problems'],
  },
  {
    id: 'word_problems_advanced',
    label: 'Advanced Word Problems',
    prerequisites: ['word_problems_basic', 'advanced_equations'],
    subtopic: 'word_problems',
    skills: ['digit_problems', 'ratio_problems', 'mixture_problems'],
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
