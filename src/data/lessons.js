const lessons = {
  expressions_foundation: {
    1: {
      title: 'Expressions Basics',
      objective: 'Understand variable terms and like terms.',
      steps: [
        'A term can be a number, variable, or product like 3x.',
        'Like terms have the same variable part (x with x, y with y).',
        'Only coefficients are combined for like terms.',
      ],
      worked_example: '2x + 5x = 7x',
      checkpoint: 'Can you identify which terms are like terms?',
    },
    2: {
      title: 'Practice Combining Terms',
      objective: 'Combine positive and negative coefficients correctly.',
      steps: [
        'Rewrite subtraction as adding a negative number.',
        'Add integer coefficients carefully.',
        'Keep the variable unchanged.',
      ],
      worked_example: '7y - 10y = 7y + (-10y) = -3y',
      checkpoint: 'Track signs before adding coefficients.',
    },
    3: {
      title: 'Challenge: Multi-Term Simplification',
      objective: 'Group variable terms and constants in one expression.',
      steps: [
        'Collect variable terms together.',
        'Collect constants together.',
        'Simplify each group and combine.',
      ],
      worked_example: '4m + 7 - 2m + 3 = (4m-2m) + (7+3) = 2m + 10',
      checkpoint: 'Can you simplify without mixing variable and constant terms?',
    },
  },
  simplification_arena: {
    1: {
      title: 'Distributive Property',
      objective: 'Expand brackets correctly.',
      steps: [
        'Multiply outside factor with each term inside bracket.',
        'Preserve sign of each product.',
        'Then combine like terms.',
      ],
      worked_example: '2(3x + 4) = 6x + 8',
      checkpoint: 'Did you multiply every bracket term?',
    },
    2: {
      title: 'Bracket and Sign Mastery',
      objective: 'Handle minus before brackets.',
      steps: [
        'A minus before bracket flips all inner signs.',
        'Expand first, then simplify.',
        'Verify sign changes once before final answer.',
      ],
      worked_example: '9p - (3p + 2) = 9p - 3p - 2 = 6p - 2',
      checkpoint: 'Can you explain why +2 becomes -2?',
    },
    3: {
      title: 'Challenge Simplification Strategy',
      objective: 'Simplify two expanded parts accurately.',
      steps: [
        'Expand both bracketed expressions.',
        'Mark terms from second expression if subtracted.',
        'Combine carefully in one pass.',
      ],
      worked_example: '3(2x-5)-2(x+1)=6x-15-2x-2=4x-17',
      checkpoint: 'Do you keep structure while expanding both parts?',
    },
  },
  equation_dojo: {
    1: {
      title: 'Equation Balance Idea',
      objective: 'Use inverse operations while keeping both sides balanced.',
      steps: [
        'Do the same operation on both sides.',
        'Undo addition/subtraction first.',
        'Undo multiplication/division next.',
      ],
      worked_example: 'x + 7 = 12 -> x = 5',
      checkpoint: 'What operation will isolate x?',
    },
    2: {
      title: 'Two-Step Equation Routine',
      objective: 'Solve two-step equations systematically.',
      steps: [
        'First remove constant term from variable side.',
        'Then divide by coefficient.',
        'Substitute to verify.',
      ],
      worked_example: '2x + 5 = 17 -> 2x = 12 -> x = 6',
      checkpoint: 'Can you name the two inverse steps used?',
    },
    3: {
      title: 'Equation Challenge with Fractions',
      objective: 'Handle fractional variable terms confidently.',
      steps: [
        'Isolate fraction term first.',
        'Multiply both sides by denominator.',
        'Check by substitution.',
      ],
      worked_example: '(x/3) + 2 = 6 -> x/3 = 4 -> x = 12',
      checkpoint: 'Why do we multiply by 3 at the end?',
    },
  },
  word_problem_lab: {
    1: {
      title: 'Translate Story to Equation',
      objective: 'Convert verbal statements into algebra equations.',
      steps: [
        'Identify unknown quantity and assign variable.',
        'Translate each phrase into mathematical form.',
        'Build and solve equation.',
      ],
      worked_example: '3 notebooks + 12 = 72 -> 3x + 12 = 72',
      checkpoint: 'Can you map each sentence part to a symbol?',
    },
    2: {
      title: 'Detect Story-Solution Errors',
      objective: 'Spot common algebra mistakes in word-problem solutions.',
      steps: [
        'Check equation formation first.',
        'Check each inverse operation.',
        'Check arithmetic in final step.',
      ],
      worked_example: '4x + 6 = 30 -> 4x = 24 -> x = 6',
      checkpoint: 'Where do students usually make the wrong move?',
    },
    3: {
      title: 'Challenge Story Reasoning',
      objective: 'Solve multi-step story equations accurately.',
      steps: [
        'Translate carefully.',
        'Solve using balance method.',
        'Validate result against story context.',
      ],
      worked_example: '2x + 9 = 33 -> x = 12',
      checkpoint: 'Does the final value satisfy the original story?',
    },
  },
};

module.exports = lessons;
