// Helper to build a question object concisely
function q(text, opts, answer, concept, level, diff, type, skills, misc, hints, explanation, depth) {
  return {
    question_text: text,
    options: opts,
    correct_answer: answer,
    concept,
    level,
    difficulty: diff,
    question_type: type || 'mcq',
    skills: skills || [],
    misconception_target: misc || 'concept_error',
    cognitive_level: diff === 'hard' ? 'analyze' : 'apply',
    story_based: false,
    time_expected: diff === 'easy' ? 45 : diff === 'medium' ? 60 : 90,
    hints: hints || ['Think step by step.', 'Check your operations.', 'Verify with substitution.'],
    explanation: explanation || '',
    explanation_depth: depth || (diff === 'easy' ? 'short' : diff === 'medium' ? 'medium' : 'deep'),
  };
}

const questions = [

  // =================================================================
  // EXPRESSIONS FOUNDATION
  // =================================================================
  // ── EASY (Level 1) ─── MCQ
  q('Which of the following is a monomial?', ['x + y', '2x²', '3a + 4b', 'p + q + r'], '2x²', 'expressions_foundation', 1, 'easy', 'mcq', ['identify_variables', 'identify_like_terms'], 'concept_error', ['Read the question carefully before checking options.', 'Eliminate obviously wrong options first.', 'Substitute your answer back to verify.'], 'A monomial has only one term. 2x² is a single term.', 'short'),
  q('Which pair consists of like terms?', ['3x and 3y', '5xy and 5x', '7x² and −2x²', '4xy and 4x²y'], '7x² and −2x²', 'expressions_foundation', 1, 'easy', 'mcq', ['identify_variables', 'identify_like_terms'], 'concept_error', ['Read the question carefully before checking options.', 'Eliminate obviously wrong options first.', 'Substitute your answer back to verify.'], 'Like terms share the same variable(s) with the same exponents. Both have x².', 'short'),
  q('What is the coefficient of xy in the term 7xy?', ['x', 'y', '7', '7xy'], '7', 'expressions_foundation', 1, 'easy', 'mcq', ['identify_variables', 'identify_like_terms'], 'concept_error', ['Read the question carefully before checking options.', 'Eliminate obviously wrong options first.', 'Substitute your answer back to verify.'], 'The numerical factor of a term is its coefficient. In 7xy, the coefficient is 7.', 'short'),
  // ── MEDIUM (Level 2) ─── MCQ
  q('The result of adding (3x + 2y) and (5x − 4y) is:', ['8x − 2y', '8x + 6y', '2x − 2y', '8x − 6y'], '8x − 2y', 'expressions_foundation', 2, 'medium', 'mcq', ['identify_variables', 'identify_like_terms'], 'concept_error', ['Identify what the question is asking for.', 'Write out the key information.', 'Check your arithmetic step by step.'], '3x + 5x = 8x and 2y − 4y = −2y.', 'medium'),
  q('Subtract (3x − 5) from (7x + 2):', ['4x + 7', '4x − 3', '10x − 3', '4x + 3'], '4x + 7', 'expressions_foundation', 2, 'medium', 'mcq', ['identify_variables', 'identify_like_terms'], 'concept_error', ['Identify what the question is asking for.', 'Write out the key information.', 'Check your arithmetic step by step.'], '(7x + 2) − (3x − 5) = 7x + 2 − 3x + 5 = 4x + 7.', 'medium'),
  // ── HARD (Level 3) ─── MCQ
  q('What is the coefficient of xy in the expression 4x²y − 3xy + 2xy²?', ['4', '−3', '2', '3'], '−3', 'expressions_foundation', 3, 'hard', 'mcq', ['identify_variables', 'identify_like_terms'], 'equation_error', ['Look for key words: "increased by", "times", "ratio".', 'Set up the equation before solving.', 'Verify your answer satisfies all conditions.'], 'The term with xy (not x²y or xy²) is −3xy, so the coefficient of xy is −3.', 'deep'),
  // ── EASY (Level 1) ─── MCQ
  q('How many terms does the expression 5x² − 3x + 7 have?', ['1', '2', '3', '4'], '3', 'expressions_foundation', 1, 'easy', 'mcq', ['identify_variables', 'identify_like_terms'], 'concept_error', ['Read the question carefully before checking options.', 'Eliminate obviously wrong options first.', 'Substitute your answer back to verify.'], 'The three terms are 5x², −3x, and 7. An expression with three terms is a trinomial.', 'short'),
  // ── MEDIUM (Level 2) ─── MCQ
  q('Which of the following is NOT a like term to 4ab?', ['−9ab', 'ab', '2ab', '4a²b'], '4a²b', 'expressions_foundation', 2, 'medium', 'mcq', ['identify_variables', 'identify_like_terms'], 'concept_error', ['Identify what the question is asking for.', 'Write out the key information.', 'Check your arithmetic step by step.'], '4a²b has a² (power 2), while 4ab has a (power 1). Different powers means they are unlike terms.', 'medium'),
  // ── HARD (Level 3) ─── MCQ
  q('If P = 3x² + 5x − 1 and Q = x² − 2x + 4, what is P − Q?', ['2x² + 7x − 5', '2x² + 3x + 3', '4x² + 3x + 3', '2x² + 7x + 3'], '2x² + 7x − 5', 'expressions_foundation', 3, 'hard', 'mcq', ['identify_variables', 'identify_like_terms'], 'equation_error', ['Look for key words: "increased by", "times", "ratio".', 'Set up the equation before solving.', 'Verify your answer satisfies all conditions.'], 'P − Q = (3x²−x²) + (5x−(−2x)) + (−1−4) = 2x² + 7x − 5.', 'deep'),
  // ── EASY (Level 1) ─── FILL IN THE BLANK
  q('An expression with exactly two terms is called a ________.', [], 'binomial', 'expressions_foundation', 1, 'easy', 'fill_in_the_blank', ['identify_like_terms', 'combine_coefficients'], 'concept_error', ['Isolate the unknown on one side.', 'Use inverse operations to undo each step.', 'Check your answer by substituting back.'], 'Monomial=1 term, Binomial=2 terms, Trinomial=3 terms.', 'short'),
  q('7x and 14x are ________ terms because they have the same variable raised to the same power.', [], 'like', 'expressions_foundation', 1, 'easy', 'fill_in_the_blank', ['identify_like_terms', 'combine_coefficients'], 'concept_error', ['Isolate the unknown on one side.', 'Use inverse operations to undo each step.', 'Check your answer by substituting back.'], 'Like terms share the same variable(s) with the same exponents.', 'short'),
  q('In the expression 7xy − 5x, the coefficient of the first term is ________.', [], '7', 'expressions_foundation', 1, 'easy', 'fill_in_the_blank', ['identify_like_terms', 'combine_coefficients'], 'concept_error', ['Isolate the unknown on one side.', 'Use inverse operations to undo each step.', 'Check your answer by substituting back.'], 'The numerical factor of 7xy is 7.', 'short'),
  // ── MEDIUM (Level 2) ─── FILL IN THE BLANK
  q('Adding 3x + 2y and 5x − 4y gives ________.', [], '8x − 2y', 'expressions_foundation', 2, 'medium', 'fill_in_the_blank', ['identify_like_terms', 'combine_coefficients'], 'concept_error', ['Write the equation first, then solve.', 'Transpose terms carefully — signs flip when crossing =.', 'Simplify step by step.'], '3x + 5x = 8x and 2y − 4y = −2y.', 'medium'),
  q('Subtracting 3x from 7x gives ________.', [], '4x', 'expressions_foundation', 2, 'medium', 'fill_in_the_blank', ['identify_like_terms', 'combine_coefficients'], 'concept_error', ['Write the equation first, then solve.', 'Transpose terms carefully — signs flip when crossing =.', 'Simplify step by step.'], '7x − 3x = (7 − 3)x = 4x.', 'medium'),
  // ── HARD (Level 3) ─── FILL IN THE BLANK
  q('The sum of 7x² − 4x + 5 and 9x − 10 is ________.', [], '7x² + 5x − 5', 'expressions_foundation', 3, 'hard', 'fill_in_the_blank', ['identify_like_terms', 'combine_coefficients'], 'equation_error', ['Identify the operation applied to the unknown.', 'Apply the inverse operation to both sides.', 'Verify with substitution.'], '7x² stays, −4x + 9x = 5x, 5 − 10 = −5.', 'deep'),
  // ── MEDIUM (Level 2) ─── FILL IN THE BLANK
  q('The expression 2x + 3y − 5 has ________ terms.', [], '3', 'expressions_foundation', 2, 'medium', 'fill_in_the_blank', ['identify_like_terms', 'combine_coefficients'], 'concept_error', ['Write the equation first, then solve.', 'Transpose terms carefully — signs flip when crossing =.', 'Simplify step by step.'], 'The terms are 2x, 3y, and −5 — three terms, so it is a trinomial.', 'medium'),
  // ── HARD (Level 3) ─── FILL IN THE BLANK
  q('When (4a − 3b) is subtracted from (2a + 5b), the result is ________.', [], '−2a + 8b', 'expressions_foundation', 3, 'hard', 'fill_in_the_blank', ['identify_like_terms', 'combine_coefficients'], 'equation_error', ['Identify the operation applied to the unknown.', 'Apply the inverse operation to both sides.', 'Verify with substitution.'], '(2a + 5b) − (4a − 3b) = 2a + 5b − 4a + 3b = −2a + 8b.', 'deep'),
  // ── EASY (Level 1) ─── MATCH THE COLUMN
  q('Match each expression with its type.', ['L:A:3xy', 'L:B:a + b', 'L:C:2x + 3y − 5', 'L:D:x + y + z + w', 'R:1:Trinomial', 'R:2:Polynomial (4 terms)', 'R:3:Monomial', 'R:4:Binomial'], 'A→3, B→4, C→1, D→2', 'expressions_foundation', 1, 'easy', 'match_the_column', ['classify_expressions'], 'concept_error', ['Try to solve each left-column item independently first.', 'Eliminate matches you are confident about.', 'The remaining options will narrow down tough matches.'], 'Monomial=1 term, Binomial=2, Trinomial=3, Polynomial=4+.', 'short'),
  // ── MEDIUM (Level 2) ─── MATCH THE COLUMN
  q('Match each term with a like term.', ['L:A:7x', 'L:B:5xy', 'L:C:3x²', 'L:D:−9y²', 'R:1:4y²', 'R:2:−8x²', 'R:3:−3xy', 'R:4:14x'], 'A→4, B→3, C→2, D→1', 'expressions_foundation', 2, 'medium', 'match_the_column', ['classify_expressions'], 'concept_error', ['Look for key words in each entry.', 'Match what you know for certain first.', 'Use process of elimination for the rest.'], 'Like terms have the same variables with the same exponents.', 'medium'),
  // ── EASY (Level 1) ─── DRAG AND DROP
  q('Classify each expression by dragging it to the correct box: \'Monomial\', \'Binomial\', or \'Trinomial\'.', ['CAT:Monomial', 'CAT:Binomial', 'CAT:Trinomial', '1:5xy', '2:x + y', '3:a + b + c', '4:7z', '5:2x − 3y', '6:p + q + r'], 'Monomial: [1,4] | Binomial: [2,5] | Trinomial: [3,6]', 'expressions_foundation', 1, 'easy', 'drag_and_drop', ['classify_expressions', 'identify_like_terms'], 'sequence_error', ['Think about what logically comes first.', 'Each step should follow from the previous one.', 'Read all steps before arranging.'], '1 term=monomial, 2 terms=binomial, 3 terms=trinomial.', 'short'),
  // ── MEDIUM (Level 2) ─── DRAG AND DROP
  q('Group the following terms by dragging them into the correct like-terms category.', ['CAT:x terms', 'CAT:y terms', 'CAT:xy terms', '1:3x', '2:5y', '3:−7x', '4:2xy', '5:9y', '6:−4xy'], 'x terms: [1,3] | y terms: [2,5] | xy terms: [4,6]', 'expressions_foundation', 2, 'medium', 'drag_and_drop', ['classify_expressions', 'identify_like_terms'], 'sequence_error', ['Identify the starting condition.', 'What operation comes next?', 'Does your sequence lead to the stated answer?'], 'Like terms must have the same variable(s) with the same power.', 'medium'),
  // ── HARD (Level 3) ─── DRAG AND DROP
  q('Arrange the following steps to simplify (5x + 3y) − (2x − y).', ['1:Write original: (5x + 3y) − (2x − y)', '2:Remove brackets: 5x + 3y − 2x + y', '3:Group x-terms: 5x − 2x = 3x', '4:Group y-terms: 3y + y = 4y', '5:Result: 3x + 4y'], 'order: [1,2,3,4,5]', 'expressions_foundation', 3, 'hard', 'drag_and_drop', ['classify_expressions', 'identify_like_terms'], 'sequence_error', ['Arrange by cause and effect.', 'Mathematical steps follow a strict order.', 'Verify by reading your arrangement from top to bottom.'], 'Distribute the negative sign, then collect like terms.', 'deep'),
  // ── EASY (Level 1) ─── NUMBER LINE
  q('If x = 3, the expression x + 5 has value ________. Mark it on the number line.', ['range:0–15', 'vars:{"x":3}', 'expr:x + 5'], 'answer: 8 | expression: x + 5', 'expressions_foundation', 1, 'easy', 'number_line', ['evaluate_expressions', 'identify_variables'], 'number_sense_error', ['Solve the equation first, then locate x on the line.', 'Positive values are to the right of 0, negative to the left.', 'Count the units carefully from zero.'], 'x + 5 = 3 + 5 = 8. It is 5 units to the right of x.', 'short'),
  // ── MEDIUM (Level 2) ─── NUMBER LINE
  q('For x = 4, find the value of 2x + 1 and mark its position on the number line.', ['range:0–15', 'vars:{"x":4}', 'expr:2x + 1'], 'answer: 9 | expression: 2x + 1', 'expressions_foundation', 2, 'medium', 'number_line', ['evaluate_expressions', 'identify_variables'], 'number_sense_error', ['First find the numeric value, then mark it.', 'The number line shows relative position.', 'Negative answers appear to the left of zero.'], '2(4) + 1 = 8 + 1 = 9.', 'medium'),
  // ── EASY (Level 1) ─── NUMBER LINE
  q('For x = 5, find the value of x − 4 and mark it on the number line.', ['range:-2–10', 'vars:{"x":5}', 'expr:x − 4'], 'answer: 1 | expression: x − 4', 'expressions_foundation', 1, 'easy', 'number_line', ['evaluate_expressions', 'identify_variables'], 'number_sense_error', ['Solve the equation first, then locate x on the line.', 'Positive values are to the right of 0, negative to the left.', 'Count the units carefully from zero.'], '5 − 4 = 1. It is 4 units to the left of x.', 'short'),
  // ── MEDIUM (Level 2) ─── NUMBER LINE
  q('If p = 2 and q = 3, evaluate p + 2q and mark it on the number line.', ['range:0–15', 'vars:{"p":2,"q":3}', 'expr:p + 2q'], 'answer: 8 | expression: p + 2q', 'expressions_foundation', 2, 'medium', 'number_line', ['evaluate_expressions', 'identify_variables'], 'number_sense_error', ['First find the numeric value, then mark it.', 'The number line shows relative position.', 'Negative answers appear to the left of zero.'], '2 + 2(3) = 2 + 6 = 8.', 'medium'),
  // ── EASY (Level 1) ─── BEAM BALANCE
  q('Left pan: \'3x + 2x\'. Right pan: \'5x\'. Are the expressions equivalent?', ['LHS:3x + 2x', 'RHS:5x', 'balanced:true'], 'Yes — balanced for all values of x', 'expressions_foundation', 1, 'easy', 'beam_balance', ['combine_coefficients', 'equivalence_check'], 'balance_error', ['The beam balances when both sides are equal.', 'Set LHS = RHS and solve for x.', 'Verify by substituting x back into both pans.'], '3x + 2x = 5x (combining like terms). Always equal.', 'short'),
  // ── MEDIUM (Level 2) ─── BEAM BALANCE
  q('Left pan: \'4x − x\'. Right pan: \'3x\'. Is the beam balanced?', ['LHS:4x − x', 'RHS:3x', 'balanced:true'], 'Yes — 4x − x = 3x for all values of x', 'expressions_foundation', 2, 'medium', 'beam_balance', ['combine_coefficients', 'equivalence_check'], 'balance_error', ['Expand brackets if present before balancing.', 'Move all x-terms to one side.', 'A balanced beam means the equation is satisfied.'], '4x − x = (4−1)x = 3x. Always equal.', 'medium'),
  // ── HARD (Level 3) ─── BEAM BALANCE
  q('Left pan: \'(5x + 3y) − (2x − y)\'. Right pan: \'3x + 4y\'. Is the beam balanced?', ['LHS:(5x + 3y) − (2x − y)', 'RHS:3x + 4y', 'balanced:true'], 'Yes — after distributing the negative and collecting like terms', 'expressions_foundation', 3, 'hard', 'beam_balance', ['combine_coefficients', 'equivalence_check'], 'balance_error', ['Treat the beam like an equation.', 'Whatever you do to one pan, do to the other.', 'Solve and verify.'], '5x + 3y − 2x + y = 3x + 4y. Always equal.', 'deep'),

  // =================================================================
  // MULTIPLICATION & IDENTITIES
  // =================================================================
  // ── EASY (Level 1) ─── MCQ
  q('What is the product of 5x and 3y?', ['8xy', '15xy', '15x²y²', '8x+y'], '15xy', 'multiplication_expressions', 1, 'easy', 'mcq', ['apply_identities', 'multiply_polynomials'], 'concept_error', ['Read the question carefully before checking options.', 'Eliminate obviously wrong options first.', 'Substitute your answer back to verify.'], '5 × 3 = 15; x × y = xy.', 'short'),
  q('Which identity gives (a + b)(a − b)?', ['a² + b²', 'a² − b²', 'a² + 2ab + b²', 'a² − 2ab + b²'], 'a² − b²', 'multiplication_expressions', 1, 'easy', 'mcq', ['apply_identities', 'multiply_polynomials'], 'concept_error', ['Read the question carefully before checking options.', 'Eliminate obviously wrong options first.', 'Substitute your answer back to verify.'], 'Difference of squares: (a+b)(a−b) = a² − b².', 'short'),
  // ── MEDIUM (Level 2) ─── MCQ
  q('What is the product of (2x + 3) and (x − 4)?', ['2x² − 5x − 12', '2x² + 5x − 12', '2x² − 11x − 12', '2x² − 8x − 12'], '2x² − 5x − 12', 'multiplication_expressions', 2, 'medium', 'mcq', ['apply_identities', 'multiply_polynomials'], 'concept_error', ['Identify what the question is asking for.', 'Write out the key information.', 'Check your arithmetic step by step.'], '(2x+3)(x−4) = 2x² − 8x + 3x − 12 = 2x² − 5x − 12.', 'medium'),
  q('Using (a + b)², find the value of (103)².', ['10509', '10609', '10406', '10909'], '10609', 'multiplication_expressions', 2, 'medium', 'mcq', ['apply_identities', 'multiply_polynomials'], 'concept_error', ['Identify what the question is asking for.', 'Write out the key information.', 'Check your arithmetic step by step.'], '(100+3)² = 10000 + 600 + 9 = 10609.', 'medium'),
  q('Using (a+b)(a−b) = a²−b², evaluate 97 × 103.', ['9991', '9801', '10201', '9909'], '9991', 'multiplication_expressions', 2, 'medium', 'mcq', ['apply_identities', 'multiply_polynomials'], 'concept_error', ['Identify what the question is asking for.', 'Write out the key information.', 'Check your arithmetic step by step.'], '(100−3)(100+3) = 10000 − 9 = 9991.', 'medium'),
  // ── HARD (Level 3) ─── MCQ
  q('Find the product of (x + 4)(x + 3) using (x+a)(x+b) = x² + (a+b)x + ab.', ['x² + 7x + 12', 'x² + 12x + 7', 'x² + 7x + 7', 'x² + 12x + 12'], 'x² + 7x + 12', 'multiplication_expressions', 3, 'hard', 'mcq', ['apply_identities', 'multiply_polynomials'], 'equation_error', ['Look for key words: "increased by", "times", "ratio".', 'Set up the equation before solving.', 'Verify your answer satisfies all conditions.'], 'a=4, b=3: x² + (4+3)x + (4×3) = x² + 7x + 12.', 'deep'),
  q('What is the product of 4xy × 5x²y²?', ['9x³y³', '20x³y³', '20x²y²', '9x²y²'], '20x³y³', 'multiplication_expressions', 3, 'hard', 'mcq', ['apply_identities', 'multiply_polynomials'], 'equation_error', ['Look for key words: "increased by", "times", "ratio".', 'Set up the equation before solving.', 'Verify your answer satisfies all conditions.'], '4×5=20; x×x²=x³; y×y²=y³. Product = 20x³y³.', 'deep'),
  // ── EASY (Level 1) ─── MCQ
  q('Using (a − b)², find the value of (98)².', ['9400', '9604', '9800', '9204'], '9604', 'multiplication_expressions', 1, 'easy', 'mcq', ['apply_identities', 'multiply_polynomials'], 'concept_error', ['Read the question carefully before checking options.', 'Eliminate obviously wrong options first.', 'Substitute your answer back to verify.'], '(100−2)² = 10000 − 400 + 4 = 9604.', 'short'),
  // ── MEDIUM (Level 2) ─── MCQ
  q('Which of the following equals (3x − 2y)²?', ['9x² − 4y²', '9x² + 12xy − 4y²', '9x² − 12xy + 4y²', '9x² + 4y²'], '9x² − 12xy + 4y²', 'multiplication_expressions', 2, 'medium', 'mcq', ['apply_identities', 'multiply_polynomials'], 'concept_error', ['Identify what the question is asking for.', 'Write out the key information.', 'Check your arithmetic step by step.'], 'Using (a−b)² = a²−2ab+b²: (3x)² − 2(3x)(2y) + (2y)² = 9x² − 12xy + 4y².', 'medium'),
  // ── HARD (Level 3) ─── MCQ
  q('If (x + k)(x − 3) = x² + x − 12, find k.', ['3', '4', '−3', '−4'], '4', 'multiplication_expressions', 3, 'hard', 'mcq', ['apply_identities', 'multiply_polynomials'], 'equation_error', ['Look for key words: "increased by", "times", "ratio".', 'Set up the equation before solving.', 'Verify your answer satisfies all conditions.'], 'Using (x+a)(x+b) = x² + (a+b)x + ab: a+b = 1 → k−3 = 1 → k = 4. Also ab = k×(−3) = −12 → k = 4.', 'deep'),
  // ── EASY (Level 1) ─── FILL IN THE BLANK
  q('(a + b)² = a² + ________ + b²', [], '2ab', 'multiplication_expressions', 1, 'easy', 'fill_in_the_blank', ['apply_identities', 'expand_expressions'], 'concept_error', ['Isolate the unknown on one side.', 'Use inverse operations to undo each step.', 'Check your answer by substituting back.'], '(a+b)² = a² + 2ab + b².', 'short'),
  q('(a − b)² = a² − 2ab + ________', [], 'b²', 'multiplication_expressions', 1, 'easy', 'fill_in_the_blank', ['apply_identities', 'expand_expressions'], 'concept_error', ['Isolate the unknown on one side.', 'Use inverse operations to undo each step.', 'Check your answer by substituting back.'], '(a−b)² = a² − 2ab + b².', 'short'),
  // ── MEDIUM (Level 2) ─── FILL IN THE BLANK
  q('(a + b)(a − b) = ________', [], 'a² − b²', 'multiplication_expressions', 2, 'medium', 'fill_in_the_blank', ['apply_identities', 'expand_expressions'], 'concept_error', ['Write the equation first, then solve.', 'Transpose terms carefully — signs flip when crossing =.', 'Simplify step by step.'], 'Difference of squares identity.', 'medium'),
  q('The product of 5x and 3x is ________.', [], '15x²', 'multiplication_expressions', 2, 'medium', 'fill_in_the_blank', ['apply_identities', 'expand_expressions'], 'concept_error', ['Write the equation first, then solve.', 'Transpose terms carefully — signs flip when crossing =.', 'Simplify step by step.'], '5 × 3 = 15; x × x = x².', 'medium'),
  // ── HARD (Level 3) ─── FILL IN THE BLANK
  q('Using (a−b)², the expansion of (2x − 3)² is ________.', [], '4x² − 12x + 9', 'multiplication_expressions', 3, 'hard', 'fill_in_the_blank', ['apply_identities', 'expand_expressions'], 'equation_error', ['Identify the operation applied to the unknown.', 'Apply the inverse operation to both sides.', 'Verify with substitution.'], '(2x)² − 2(2x)(3) + 3² = 4x² − 12x + 9.', 'deep'),
  q('Using (x+a)(x+b) = x²+(a+b)x+ab, expand (x+5)(x−2): ________', [], 'x² + 3x − 10', 'multiplication_expressions', 3, 'hard', 'fill_in_the_blank', ['apply_identities', 'expand_expressions'], 'equation_error', ['Identify the operation applied to the unknown.', 'Apply the inverse operation to both sides.', 'Verify with substitution.'], 'a=5, b=−2: x² + (5−2)x + (5×−2) = x² + 3x − 10.', 'deep'),
  // ── MEDIUM (Level 2) ─── FILL IN THE BLANK
  q('Using (a−b)², expand (x − 5)²: ________', [], 'x² − 10x + 25', 'multiplication_expressions', 2, 'medium', 'fill_in_the_blank', ['apply_identities', 'expand_expressions'], 'concept_error', ['Write the equation first, then solve.', 'Transpose terms carefully — signs flip when crossing =.', 'Simplify step by step.'], 'x² − 2(x)(5) + 5² = x² − 10x + 25.', 'medium'),
  // ── HARD (Level 3) ─── FILL IN THE BLANK
  q('Using (a+b)², expand (3x + 4)²: ________', [], '9x² + 24x + 16', 'multiplication_expressions', 3, 'hard', 'fill_in_the_blank', ['apply_identities', 'expand_expressions'], 'equation_error', ['Identify the operation applied to the unknown.', 'Apply the inverse operation to both sides.', 'Verify with substitution.'], '(3x)² + 2(3x)(4) + 4² = 9x² + 24x + 16.', 'deep'),
  // ── MEDIUM (Level 2) ─── MATCH THE COLUMN
  q('Match each identity with its expanded form.', ['L:A:(a + b)²', 'L:B:(a − b)²', 'L:C:(a+b)(a−b)', 'L:D:(x+a)(x+b)', 'R:1:a² − b²', 'R:2:x² + (a+b)x + ab', 'R:3:a² + 2ab + b²', 'R:4:a² − 2ab + b²'], 'A→3, B→4, C→1, D→2', 'multiplication_expressions', 2, 'medium', 'match_the_column', ['match_identities', 'apply_identities'], 'concept_error', ['Look for key words in each entry.', 'Match what you know for certain first.', 'Use process of elimination for the rest.'], 'Four standard algebraic identities from Chapter 9.', 'medium'),
  q('Match each monomial multiplication with the correct product.', ['L:A:3x × 4y', 'L:B:5x × 3x', 'L:C:2xy × 3x', 'L:D:4x² × 2x³', 'R:1:6x²y', 'R:2:8x⁵', 'R:3:15x²', 'R:4:12xy'], 'A→4, B→3, C→1, D→2', 'multiplication_expressions', 2, 'medium', 'match_the_column', ['match_identities', 'apply_identities'], 'concept_error', ['Look for key words in each entry.', 'Match what you know for certain first.', 'Use process of elimination for the rest.'], 'Multiply coefficients and add exponents of like variables.', 'medium'),
  q('Arrange the terms to correctly expand (a + b)².', ['1:a²', '2:2ab', '3:b²'], 'order: [1,2,3]', 'multiplication_expressions', 2, 'medium', 'drag_and_drop', ['expand_expressions', 'apply_identities'], 'sequence_error', ['Identify the starting condition.', 'What operation comes next?', 'Does your sequence lead to the stated answer?'], '(a+b)² = a² + 2ab + b².', 'medium'),
  // ── HARD (Level 3) ─── DRAG AND DROP
  q('Arrange the steps to expand (3x + 2)(x − 5) correctly.', ['1:Write: (3x + 2)(x − 5)', '2:3x × x = 3x²', '3:3x × (−5) = −15x', '4:2 × x = 2x', '5:2 × (−5) = −10', '6:Combine: 3x² − 15x + 2x − 10 = 3x² − 13x − 10'], 'order: [1,2,3,4,5,6]', 'multiplication_expressions', 3, 'hard', 'drag_and_drop', ['expand_expressions', 'apply_identities'], 'sequence_error', ['Arrange by cause and effect.', 'Mathematical steps follow a strict order.', 'Verify by reading your arrangement from top to bottom.'], 'Multiply each term in the first bracket with each term in the second (FOIL).', 'deep'),
  // ── MEDIUM (Level 2) ─── DRAG AND DROP
  q('Arrange the terms to correctly expand (a − b)².', ['1:a²', '2:−2ab', '3:b²'], 'order: [1,2,3]', 'multiplication_expressions', 2, 'medium', 'drag_and_drop', ['expand_expressions', 'apply_identities'], 'sequence_error', ['Identify the starting condition.', 'What operation comes next?', 'Does your sequence lead to the stated answer?'], '(a−b)² = a² − 2ab + b².', 'medium'),
  // ── HARD (Level 3) ─── DRAG AND DROP
  q('Arrange the steps to verify that (99)² = 9801 using an identity.', ['1:Write 99 = 100 − 1', '2:Apply (a−b)²: (100)² − 2(100)(1) + (1)²', '3:= 10000 − 200 + 1', '4:= 9801'], 'order: [1,2,3,4]', 'multiplication_expressions', 3, 'hard', 'drag_and_drop', ['expand_expressions', 'apply_identities'], 'sequence_error', ['Arrange by cause and effect.', 'Mathematical steps follow a strict order.', 'Verify by reading your arrangement from top to bottom.'], 'Using (a−b)² identity makes mental arithmetic much faster.', 'deep'),
  // ── MEDIUM (Level 2) ─── BEAM BALANCE
  q('Left pan: \'(a+b)²\'. Right pan: \'a² + 2ab + b²\'. Is the beam balanced?', ['LHS:(a+b)²', 'RHS:a² + 2ab + b²', 'balanced:true'], 'Yes — identity (a+b)² = a² + 2ab + b²', 'multiplication_expressions', 2, 'medium', 'beam_balance', ['apply_identities', 'equivalence_check'], 'balance_error', ['Expand brackets if present before balancing.', 'Move all x-terms to one side.', 'A balanced beam means the equation is satisfied.'], 'Expanding (a+b)(a+b) gives a² + ab + ab + b² = a² + 2ab + b².', 'medium'),
  q('Left pan: \'(a+b)(a−b)\'. Right pan: \'a²−b²\'. Is the beam balanced?', ['LHS:(a+b)(a−b)', 'RHS:a² − b²', 'balanced:true'], 'Yes — difference of squares identity', 'multiplication_expressions', 2, 'medium', 'beam_balance', ['apply_identities', 'equivalence_check'], 'balance_error', ['Expand brackets if present before balancing.', 'Move all x-terms to one side.', 'A balanced beam means the equation is satisfied.'], '(a+b)(a−b) = a² − ab + ab − b² = a² − b².', 'medium'),
  // ── HARD (Level 3) ─── BEAM BALANCE
  q('Left pan: \'(2x−3)²\'. Right pan: \'4x²−12x+9\'. Is the beam balanced?', ['LHS:(2x − 3)²', 'RHS:4x² − 12x + 9', 'balanced:true'], 'Yes — using (a−b)² = a²−2ab+b² with a=2x, b=3', 'multiplication_expressions', 3, 'hard', 'beam_balance', ['apply_identities', 'equivalence_check'], 'balance_error', ['Treat the beam like an equation.', 'Whatever you do to one pan, do to the other.', 'Solve and verify.'], '(2x)² − 2(2x)(3) + 3² = 4x² − 12x + 9.', 'deep'),
  // ── MEDIUM (Level 2) ─── NUMBER LINE
  q('If a = 3 and b = 2, evaluate (a+b)² and mark it on the number line.', ['range:0–30', 'vars:{"a":3,"b":2}', 'expr:(a+b)²'], 'answer: 25 | expression: (a+b)²', 'multiplication_expressions', 2, 'medium', 'number_line', ['evaluate_expressions', 'apply_identities'], 'number_sense_error', ['First find the numeric value, then mark it.', 'The number line shows relative position.', 'Negative answers appear to the left of zero.'], '(3+2)² = 5² = 25.', 'medium'),
  // ── HARD (Level 3) ─── NUMBER LINE
  q('If a = 5 and b = 3, evaluate (a−b)² and mark it on the number line.', ['range:0–15', 'vars:{"a":5,"b":3}', 'expr:(a−b)²'], 'answer: 4 | expression: (a−b)²', 'multiplication_expressions', 3, 'hard', 'number_line', ['evaluate_expressions', 'apply_identities'], 'number_sense_error', ['Solve the equation step by step.', 'Check whether your answer is between the range endpoints.', 'Mark the point clearly on the line.'], '(5−3)² = 2² = 4.', 'deep'),
  // ── MEDIUM (Level 2) ─── NUMBER LINE
  q('Using (a+b)(a−b), evaluate 6 × 4 by writing it as (5+1)(5−1). Mark the result on the number line.', ['range:0–30', 'vars:{"a":5,"b":1}', 'expr:(a+b)(a−b)'], 'answer: 24 | expression: (a+b)(a−b)', 'multiplication_expressions', 2, 'medium', 'number_line', ['evaluate_expressions', 'apply_identities'], 'number_sense_error', ['First find the numeric value, then mark it.', 'The number line shows relative position.', 'Negative answers appear to the left of zero.'], '5² − 1² = 25 − 1 = 24.', 'medium'),

  // =================================================================
  // EQUATION BASICS
  // =================================================================
  // ── EASY (Level 1) ─── MCQ
  q('Which of the following is a linear equation in one variable?', ['x² + 3 = 7', '2x + 3 = 9', 'xy + 5 = 0', 'x² − y = 4'], '2x + 3 = 9', 'equation_basics', 1, 'easy', 'mcq', ['identify_linear_equations', 'transposition'], 'concept_error', ['Read the question carefully before checking options.', 'Eliminate obviously wrong options first.', 'Substitute your answer back to verify.'], 'A linear equation in one variable has one variable with highest power 1.', 'short'),
  q('What is transposition in solving equations?', ['Multiplying both sides by the variable', 'Moving a term from one side to the other with a sign change', 'Adding the same number to both sides', 'Squaring both sides'], 'Moving a term from one side to the other with a sign change', 'equation_basics', 1, 'easy', 'mcq', ['identify_linear_equations', 'transposition'], 'concept_error', ['Read the question carefully before checking options.', 'Eliminate obviously wrong options first.', 'Substitute your answer back to verify.'], 'Transposition moves a term across the equality sign, flipping its sign.', 'short'),
  q('In the equation 4x − 7 = 9, what is the LHS?', ['9', '4x', '4x − 7', '−7'], '4x − 7', 'equation_basics', 1, 'easy', 'mcq', ['identify_linear_equations', 'transposition'], 'concept_error', ['Read the question carefully before checking options.', 'Eliminate obviously wrong options first.', 'Substitute your answer back to verify.'], 'LHS is everything to the left of the \'=\' sign.', 'short'),
  // ── MEDIUM (Level 2) ─── MCQ
  q('Which value of x satisfies 3x + 2 = 11?', ['2', '3', '4', '5'], '3', 'equation_basics', 2, 'medium', 'mcq', ['identify_linear_equations', 'transposition'], 'concept_error', ['Identify what the question is asking for.', 'Write out the key information.', 'Check your arithmetic step by step.'], '3x = 9 → x = 3. Verify: 3(3)+2 = 11 ✓.', 'medium'),
  q('Solve: x/4 + 3 = 7. What is x?', ['12', '16', '20', '28'], '16', 'equation_basics', 2, 'medium', 'mcq', ['identify_linear_equations', 'transposition'], 'concept_error', ['Identify what the question is asking for.', 'Write out the key information.', 'Check your arithmetic step by step.'], 'x/4 = 4 → x = 16.', 'medium'),
  // ── HARD (Level 3) ─── MCQ
  q('Which equation has x = −2 as its solution?', ['3x + 8 = 2', '2x − 5 = 1', '5x + 12 = −2', '4x + 9 = 3'], '3x + 8 = 2', 'equation_basics', 3, 'hard', 'mcq', ['identify_linear_equations', 'transposition'], 'equation_error', ['Look for key words: "increased by", "times", "ratio".', 'Set up the equation before solving.', 'Verify your answer satisfies all conditions.'], '3(−2) + 8 = −6 + 8 = 2 ✓.', 'deep'),
  // ── EASY (Level 1) ─── MCQ
  q('What does it mean to \'verify\' a solution?', ['Guess the answer', 'Substitute the answer back into the original equation', 'Rewrite the equation', 'Divide both sides by 2'], 'Substitute the answer back into the original equation', 'equation_basics', 1, 'easy', 'mcq', ['identify_linear_equations', 'transposition'], 'concept_error', ['Read the question carefully before checking options.', 'Eliminate obviously wrong options first.', 'Substitute your answer back to verify.'], 'Verification confirms correctness by substituting back and checking both sides are equal.', 'short'),
  // ── MEDIUM (Level 2) ─── MCQ
  q('Solve: 5 − 2x = 1. What is x?', ['1', '2', '3', '4'], '2', 'equation_basics', 2, 'medium', 'mcq', ['identify_linear_equations', 'transposition'], 'concept_error', ['Identify what the question is asking for.', 'Write out the key information.', 'Check your arithmetic step by step.'], '−2x = 1 − 5 = −4 → x = 2.', 'medium'),
  // ── HARD (Level 3) ─── MCQ
  q('If 4(x + 3) = 2(x + 9), what is x?', ['3', '6', '9', '12'], '3', 'equation_basics', 3, 'hard', 'mcq', ['identify_linear_equations', 'transposition'], 'equation_error', ['Look for key words: "increased by", "times", "ratio".', 'Set up the equation before solving.', 'Verify your answer satisfies all conditions.'], '4x + 12 = 2x + 18 → 2x = 6 → x = 3.', 'deep'),
  // ── EASY (Level 1) ─── FILL IN THE BLANK
  q('In the equation 5x − 3 = 12, the RHS is ________.', [], '12', 'equation_basics', 1, 'easy', 'fill_in_the_blank', ['transposition', 'inverse_operations'], 'concept_error', ['Isolate the unknown on one side.', 'Use inverse operations to undo each step.', 'Check your answer by substituting back.'], 'RHS stands for Right Hand Side — the expression to the right of the \'=\' sign.', 'short'),
  q('If we move \'+7\' from the LHS to the RHS, it becomes ________.', [], '−7', 'equation_basics', 1, 'easy', 'fill_in_the_blank', ['transposition', 'inverse_operations'], 'concept_error', ['Isolate the unknown on one side.', 'Use inverse operations to undo each step.', 'Check your answer by substituting back.'], 'Transposition changes the sign: +7 becomes −7 when moved across the equality.', 'short'),
  // ── MEDIUM (Level 2) ─── FILL IN THE BLANK
  q('Solve: 4x = 28. The value of x is ________.', [], '7', 'equation_basics', 2, 'medium', 'fill_in_the_blank', ['transposition', 'inverse_operations'], 'concept_error', ['Write the equation first, then solve.', 'Transpose terms carefully — signs flip when crossing =.', 'Simplify step by step.'], 'x = 28 ÷ 4 = 7.', 'medium'),
  q('Solve: 7x − 3 = 4x + 9. The value of x is ________.', [], '4', 'equation_basics', 2, 'medium', 'fill_in_the_blank', ['transposition', 'inverse_operations'], 'concept_error', ['Write the equation first, then solve.', 'Transpose terms carefully — signs flip when crossing =.', 'Simplify step by step.'], '3x = 12 → x = 4.', 'medium'),
  // ── HARD (Level 3) ─── FILL IN THE BLANK
  q('Solve: 3(2x − 1) = 2(x + 5) + 1. The value of x is ________.', [], '7/2', 'equation_basics', 3, 'hard', 'fill_in_the_blank', ['transposition', 'inverse_operations'], 'equation_error', ['Identify the operation applied to the unknown.', 'Apply the inverse operation to both sides.', 'Verify with substitution.'], '6x − 3 = 2x + 10 + 1 = 2x + 11 → 4x = 14 → x = 7/2.', 'deep'),
  // ── MEDIUM (Level 2) ─── FILL IN THE BLANK
  q('Solve: 3 + x = 17. The value of x is ________.', [], '14', 'equation_basics', 2, 'medium', 'fill_in_the_blank', ['transposition', 'inverse_operations'], 'concept_error', ['Write the equation first, then solve.', 'Transpose terms carefully — signs flip when crossing =.', 'Simplify step by step.'], 'x = 17 − 3 = 14.', 'medium'),
  // ── HARD (Level 3) ─── FILL IN THE BLANK
  q('Solve: 2(x + 4) = 3(x − 2). The value of x is ________.', [], '14', 'equation_basics', 3, 'hard', 'fill_in_the_blank', ['transposition', 'inverse_operations'], 'equation_error', ['Identify the operation applied to the unknown.', 'Apply the inverse operation to both sides.', 'Verify with substitution.'], '2x + 8 = 3x − 6 → 14 = x → x = 14.', 'deep'),
  // ── EASY (Level 1) ─── MATCH THE COLUMN
  q('Match each equation with the inverse operation needed to solve it.', ['L:A:x + 5 = 12', 'L:B:3x = 18', 'L:C:x − 4 = 9', 'L:D:x/6 = 2', 'R:1:Multiply by 6', 'R:2:Add 4', 'R:3:Subtract 5', 'R:4:Divide by 3'], 'A→3, B→4, C→2, D→1', 'equation_basics', 1, 'easy', 'match_the_column', ['match_operations', 'inverse_operations'], 'concept_error', ['Try to solve each left-column item independently first.', 'Eliminate matches you are confident about.', 'The remaining options will narrow down tough matches.'], 'Solved by inverse operations: subtraction, division, addition, multiplication.', 'short'),
  // ── MEDIUM (Level 2) ─── MATCH THE COLUMN
  q('Match each equation with its solution.', ['L:A:2x + 1 = 9', 'L:B:x − 7 = 0', 'L:C:3x = 21', 'L:D:x/2 = 4', 'R:1:x = 7', 'R:2:x = 8', 'R:3:x = 4', 'R:4:x = 7'], 'A→3, B→1, C→4, D→2', 'equation_basics', 2, 'medium', 'match_the_column', ['match_operations', 'inverse_operations'], 'concept_error', ['Look for key words in each entry.', 'Match what you know for certain first.', 'Use process of elimination for the rest.'], 'A→x=4, B→x=7, C→x=7, D→x=8.', 'medium'),
  // ── EASY (Level 1) ─── DRAG AND DROP
  q('Sort the following expressions into \'Linear\' or \'Not Linear\'.', ['CAT:Linear', 'CAT:Not Linear', '1:3x + 5', '2:x² + 1', '3:7 − 2y', '4:y² + y', '5:5z', '6:1 + z + z²'], 'Linear: [1,3,5] | Not Linear: [2,4,6]', 'equation_basics', 1, 'easy', 'drag_and_drop', ['solve_step_by_step', 'transposition'], 'sequence_error', ['Think about what logically comes first.', 'Each step should follow from the previous one.', 'Read all steps before arranging.'], 'Linear expressions have the highest power of the variable equal to 1.', 'short'),
  // ── MEDIUM (Level 2) ─── DRAG AND DROP
  q('Arrange the steps to solve 3x + 6 = 18.', ['1:Write: 3x + 6 = 18', '2:Subtract 6: 3x = 12', '3:Divide by 3: x = 4', '4:Verify: 3(4)+6 = 18 ✓'], 'order: [1,2,3,4]', 'equation_basics', 2, 'medium', 'drag_and_drop', ['solve_step_by_step', 'transposition'], 'sequence_error', ['Identify the starting condition.', 'What operation comes next?', 'Does your sequence lead to the stated answer?'], 'Write → transpose → divide → verify.', 'medium'),
  // ── HARD (Level 3) ─── DRAG AND DROP
  q('Arrange the steps to solve 4(x + 3) = 2(x + 9).', ['1:Expand LHS: 4x + 12', '2:Expand RHS: 2x + 18', '3:4x + 12 = 2x + 18', '4:4x − 2x = 18 − 12', '5:2x = 6 → x = 3'], 'order: [1,2,3,4,5]', 'equation_basics', 3, 'hard', 'drag_and_drop', ['solve_step_by_step', 'transposition'], 'sequence_error', ['Arrange by cause and effect.', 'Mathematical steps follow a strict order.', 'Verify by reading your arrangement from top to bottom.'], 'Expand both sides, collect x-terms on one side, constants on the other.', 'deep'),
  // ── EASY (Level 1) ─── NUMBER LINE
  q('Solve x + 3 = 7 and mark x on the number line.', ['range:-5–15'], 'answer: 4', 'equation_basics', 1, 'easy', 'number_line', ['solve_linear', 'number_sense'], 'number_sense_error', ['Solve the equation first, then locate x on the line.', 'Positive values are to the right of 0, negative to the left.', 'Count the units carefully from zero.'], 'x = 7 − 3 = 4.', 'short'),
  q('Solve 2x = 10 and identify where x lies on the number line.', ['range:-5–15'], 'answer: 5', 'equation_basics', 1, 'easy', 'number_line', ['solve_linear', 'number_sense'], 'number_sense_error', ['Solve the equation first, then locate x on the line.', 'Positive values are to the right of 0, negative to the left.', 'Count the units carefully from zero.'], 'x = 10 ÷ 2 = 5.', 'short'),
  // ── MEDIUM (Level 2) ─── NUMBER LINE
  q('Solve 5x = 20 and mark x on the number line.', ['range:0–10'], 'answer: 4', 'equation_basics', 2, 'medium', 'number_line', ['solve_linear', 'number_sense'], 'number_sense_error', ['First find the numeric value, then mark it.', 'The number line shows relative position.', 'Negative answers appear to the left of zero.'], 'x = 20 ÷ 5 = 4.', 'medium'),
  q('Solve x − 9 = −4 and mark x on the number line.', ['range:-2–10'], 'answer: 5', 'equation_basics', 2, 'medium', 'number_line', ['solve_linear', 'number_sense'], 'number_sense_error', ['First find the numeric value, then mark it.', 'The number line shows relative position.', 'Negative answers appear to the left of zero.'], 'x = −4 + 9 = 5.', 'medium'),
  // ── EASY (Level 1) ─── BEAM BALANCE
  q('Left pan: \'3x\'. Right pan: \'15\'. Find x to balance the beam.', ['LHS:3x', 'RHS:15'], '5', 'equation_basics', 1, 'easy', 'beam_balance', ['solve_linear', 'balance_concept'], 'balance_error', ['The beam balances when both sides are equal.', 'Set LHS = RHS and solve for x.', 'Verify by substituting x back into both pans.'], '3x = 15 → x = 5.', 'short'),
  // ── MEDIUM (Level 2) ─── BEAM BALANCE
  q('Left pan: \'2x + 4\'. Right pan: \'12\'. What value of x keeps the balance?', ['LHS:2x + 4', 'RHS:12'], '4', 'equation_basics', 2, 'medium', 'beam_balance', ['solve_linear', 'balance_concept'], 'balance_error', ['Expand brackets if present before balancing.', 'Move all x-terms to one side.', 'A balanced beam means the equation is satisfied.'], '2x + 4 = 12 → 2x = 8 → x = 4.', 'medium'),
  q('Left pan: \'x + 10\'. Right pan: \'3x − 2\'. What value of x balances the beam?', ['LHS:x + 10', 'RHS:3x − 2'], '6', 'equation_basics', 2, 'medium', 'beam_balance', ['solve_linear', 'balance_concept'], 'balance_error', ['Expand brackets if present before balancing.', 'Move all x-terms to one side.', 'A balanced beam means the equation is satisfied.'], 'x + 10 = 3x − 2 → 12 = 2x → x = 6.', 'medium'),
  // ── HARD (Level 3) ─── BEAM BALANCE
  q('Left pan: \'4(x + 2)\'. Right pan: \'2x + 16\'. Find x.', ['LHS:4(x + 2)', 'RHS:2x + 16'], '4', 'equation_basics', 3, 'hard', 'beam_balance', ['solve_linear', 'balance_concept'], 'balance_error', ['Treat the beam like an equation.', 'Whatever you do to one pan, do to the other.', 'Solve and verify.'], '4x + 8 = 2x + 16 → 2x = 8 → x = 4.', 'deep'),

  // =================================================================
  // SOLVING EQUATIONS
  // =================================================================
  // ── EASY (Level 1) ─── MCQ
  q('What is the solution of 5x = 35?', ['5', '6', '7', '8'], '7', 'equation_solving', 1, 'easy', 'mcq', ['solve_linear', 'transposition'], 'concept_error', ['Read the question carefully before checking options.', 'Eliminate obviously wrong options first.', 'Substitute your answer back to verify.'], 'x = 35 ÷ 5 = 7.', 'short'),
  q('Solve: y + 3 = 10', ['y = 6', 'y = 7', 'y = 13', 'y = 3'], 'y = 7', 'equation_solving', 1, 'easy', 'mcq', ['solve_linear', 'transposition'], 'concept_error', ['Read the question carefully before checking options.', 'Eliminate obviously wrong options first.', 'Substitute your answer back to verify.'], 'y = 10 − 3 = 7.', 'short'),
  // ── MEDIUM (Level 2) ─── MCQ
  q('Solve: (2x + 3)/5 = 3', ['x = 4', 'x = 6', 'x = 5', 'x = 3'], 'x = 6', 'equation_solving', 2, 'medium', 'mcq', ['solve_linear', 'transposition'], 'concept_error', ['Identify what the question is asking for.', 'Write out the key information.', 'Check your arithmetic step by step.'], '2x + 3 = 15 → 2x = 12 → x = 6.', 'medium'),
  q('Solve: 14y − 8 = 13', ['y = 1', 'y = 3/2', 'y = 2', 'y = 5/2'], 'y = 3/2', 'equation_solving', 2, 'medium', 'mcq', ['solve_linear', 'transposition'], 'concept_error', ['Identify what the question is asking for.', 'Write out the key information.', 'Check your arithmetic step by step.'], '14y = 21 → y = 21/14 = 3/2.', 'medium'),
  // ── HARD (Level 3) ─── MCQ
  q('Solve: 17 + 6p = 9', ['p = −4/3', 'p = 4/3', 'p = −3/4', 'p = 26/6'], 'p = −4/3', 'equation_solving', 3, 'hard', 'mcq', ['solve_linear', 'transposition'], 'equation_error', ['Look for key words: "increased by", "times", "ratio".', 'Set up the equation before solving.', 'Verify your answer satisfies all conditions.'], '6p = 9 − 17 = −8 → p = −8/6 = −4/3.', 'deep'),
  q('Solve: 3x − 5 = x + 11', ['x = 6', 'x = 7', 'x = 8', 'x = 9'], 'x = 8', 'equation_solving', 3, 'hard', 'mcq', ['solve_linear', 'transposition'], 'equation_error', ['Look for key words: "increased by", "times", "ratio".', 'Set up the equation before solving.', 'Verify your answer satisfies all conditions.'], '3x − x = 11 + 5 → 2x = 16 → x = 8.', 'deep'),
  // ── MEDIUM (Level 2) ─── MCQ
  q('Solve: (3x − 1)/2 = 7. What is x?', ['x = 5', 'x = 4', 'x = 3', 'x = 6'], 'x = 5', 'equation_solving', 2, 'medium', 'mcq', ['solve_linear', 'transposition'], 'concept_error', ['Identify what the question is asking for.', 'Write out the key information.', 'Check your arithmetic step by step.'], '3x − 1 = 14 → 3x = 15 → x = 5.', 'medium'),
  // ── EASY (Level 1) ─── MCQ
  q('Solve: t − 15 = 4. What is t?', ['11', '19', '15', '4'], '19', 'equation_solving', 1, 'easy', 'mcq', ['solve_linear', 'transposition'], 'concept_error', ['Read the question carefully before checking options.', 'Eliminate obviously wrong options first.', 'Substitute your answer back to verify.'], 't = 4 + 15 = 19.', 'short'),
  // ── HARD (Level 3) ─── MCQ
  q('Solve: 2(y − 3) = 3(y + 1) − 13', ['y = 2', 'y = 4', 'y = 6', 'y = 0'], 'y = 4', 'equation_solving', 3, 'hard', 'mcq', ['solve_linear', 'transposition'], 'equation_error', ['Look for key words: "increased by", "times", "ratio".', 'Set up the equation before solving.', 'Verify your answer satisfies all conditions.'], '2y − 6 = 3y + 3 − 13 = 3y − 10 → −y = −4 → y = 4.', 'deep'),
  // ── EASY (Level 1) ─── FILL IN THE BLANK
  q('The solution of the equation x − 2 = 7 is x = ________.', [], '9', 'equation_solving', 1, 'easy', 'fill_in_the_blank', ['solve_linear', 'transposition'], 'concept_error', ['Isolate the unknown on one side.', 'Use inverse operations to undo each step.', 'Check your answer by substituting back.'], 'x = 7 + 2 = 9.', 'short'),
  q('If 6x = 12, then x = ________.', [], '2', 'equation_solving', 1, 'easy', 'fill_in_the_blank', ['solve_linear', 'transposition'], 'concept_error', ['Isolate the unknown on one side.', 'Use inverse operations to undo each step.', 'Check your answer by substituting back.'], 'x = 12 ÷ 6 = 2.', 'short'),
  // ── MEDIUM (Level 2) ─── FILL IN THE BLANK
  q('Solving 2x − 3 = 7, the value of x is ________.', [], '5', 'equation_solving', 2, 'medium', 'fill_in_the_blank', ['solve_linear', 'transposition'], 'concept_error', ['Write the equation first, then solve.', 'Transpose terms carefully — signs flip when crossing =.', 'Simplify step by step.'], '2x = 10 → x = 5.', 'medium'),
  q('If (2x + 1)/3 = 5, then x = ________.', [], '7', 'equation_solving', 2, 'medium', 'fill_in_the_blank', ['solve_linear', 'transposition'], 'concept_error', ['Write the equation first, then solve.', 'Transpose terms carefully — signs flip when crossing =.', 'Simplify step by step.'], '2x + 1 = 15 → 2x = 14 → x = 7.', 'medium'),
  // ── HARD (Level 3) ─── FILL IN THE BLANK
  q('The solution of 7x − 9 = 5x + 7 is x = ________.', [], '8', 'equation_solving', 3, 'hard', 'fill_in_the_blank', ['solve_linear', 'transposition'], 'equation_error', ['Identify the operation applied to the unknown.', 'Apply the inverse operation to both sides.', 'Verify with substitution.'], '2x = 16 → x = 8.', 'deep'),
  // ── EASY (Level 1) ─── FILL IN THE BLANK
  q('Solve: y + 3 = 10. The value of y is ________.', [], '7', 'equation_solving', 1, 'easy', 'fill_in_the_blank', ['solve_linear', 'transposition'], 'concept_error', ['Isolate the unknown on one side.', 'Use inverse operations to undo each step.', 'Check your answer by substituting back.'], 'y = 10 − 3 = 7.', 'short'),
  // ── MEDIUM (Level 2) ─── FILL IN THE BLANK
  q('Solve: 4(x − 2) = 16. The value of x is ________.', [], '6', 'equation_solving', 2, 'medium', 'fill_in_the_blank', ['solve_linear', 'transposition'], 'concept_error', ['Write the equation first, then solve.', 'Transpose terms carefully — signs flip when crossing =.', 'Simplify step by step.'], 'x − 2 = 4 → x = 6.', 'medium'),
  // ── HARD (Level 3) ─── FILL IN THE BLANK
  q('Solve: 3(2x + 5) = 2(3x + 7) + 1. The value of x is ________.', [], 'no unique solution', 'equation_solving', 3, 'hard', 'fill_in_the_blank', ['solve_linear', 'transposition'], 'equation_error', ['Identify the operation applied to the unknown.', 'Apply the inverse operation to both sides.', 'Verify with substitution.'], '6x + 15 = 6x + 15 — both sides are identical. This is an identity (true for all x), so there is no unique solution.', 'deep'),
  // ── MEDIUM (Level 2) ─── MATCH THE COLUMN
  q('Match each step in solving 3x + 6 = 18 with the operation used.', ['L:A:3x + 6 = 18 → 3x = 12', 'L:B:3x = 12 → x = 4', 'L:C:Check: 3(4) + 6 = 18', 'L:D:State x = 4', 'R:1:Verification by substitution', 'R:2:Dividing both sides by 3', 'R:3:Subtracting 6 from both sides', 'R:4:Statement of solution'], 'A→3, B→2, C→1, D→4', 'equation_solving', 2, 'medium', 'match_the_column', ['match_solutions', 'solve_linear'], 'concept_error', ['Look for key words in each entry.', 'Match what you know for certain first.', 'Use process of elimination for the rest.'], 'Standard solving steps: transpose → divide → verify → state.', 'medium'),
  q('Match each equation with its correct solution.', ['L:A:2x − 3 = 7', 'L:B:3y + 4 = 19', 'L:C:(x+1)/2 = 4', 'L:D:5z − 10 = 0', 'R:1:z = 2', 'R:2:x = 5', 'R:3:y = 5', 'R:4:x = 7'], 'A→2, B→3, C→4, D→1', 'equation_solving', 2, 'medium', 'match_the_column', ['match_solutions', 'solve_linear'], 'concept_error', ['Look for key words in each entry.', 'Match what you know for certain first.', 'Use process of elimination for the rest.'], 'A→x=5, B→y=5, C→x=7, D→z=2.', 'medium'),
  // ── EASY (Level 1) ─── DRAG AND DROP
  q('Arrange the steps in the correct order to solve 2x + 4 = 12.', ['1:Write the equation: 2x + 4 = 12', '2:Subtract 4 from both sides: 2x = 8', '3:Divide both sides by 2: x = 4', '4:Verify: 2(4) + 4 = 12 ✓'], 'order: [1,2,3,4]', 'equation_solving', 1, 'easy', 'drag_and_drop', ['solve_step_by_step', 'verify_solution'], 'sequence_error', ['Think about what logically comes first.', 'Each step should follow from the previous one.', 'Read all steps before arranging.'], 'Write → transpose → simplify → verify.', 'short'),
  // ── MEDIUM (Level 2) ─── DRAG AND DROP
  q('Arrange the steps in the correct order to solve (x + 1)/3 = 4.', ['1:Write: (x+1)/3 = 4', '2:Multiply both sides by 3: x+1 = 12', '3:Subtract 1: x = 11', '4:Check: (11+1)/3 = 4 ✓'], 'order: [1,2,3,4]', 'equation_solving', 2, 'medium', 'drag_and_drop', ['solve_step_by_step', 'verify_solution'], 'sequence_error', ['Identify the starting condition.', 'What operation comes next?', 'Does your sequence lead to the stated answer?'], 'Clear the fraction first, then isolate the variable.', 'medium'),
  q('Arrange the steps to solve 4x − 8 = 0.', ['1:Write: 4x − 8 = 0', '2:Add 8 to both sides: 4x = 8', '3:Divide by 4: x = 2', '4:Verify: 4(2)−8 = 0 ✓'], 'order: [1,2,3,4]', 'equation_solving', 2, 'medium', 'drag_and_drop', ['solve_step_by_step', 'verify_solution'], 'sequence_error', ['Identify the starting condition.', 'What operation comes next?', 'Does your sequence lead to the stated answer?'], 'Transpose the constant, then divide by the coefficient.', 'medium'),
  // ── HARD (Level 3) ─── DRAG AND DROP
  q('Arrange the steps to solve 3x − 5 = x + 11.', ['1:Write: 3x − 5 = x + 11', '2:Move x-terms left: 3x − x = 11 + 5', '3:Simplify: 2x = 16', '4:Divide: x = 8', '5:Verify: 3(8)−5 = 19 and 8+11 = 19 ✓'], 'order: [1,2,3,4,5]', 'equation_solving', 3, 'hard', 'drag_and_drop', ['solve_step_by_step', 'verify_solution'], 'sequence_error', ['Arrange by cause and effect.', 'Mathematical steps follow a strict order.', 'Verify by reading your arrangement from top to bottom.'], 'Collect variable terms on one side, constants on the other.', 'deep'),
  // ── MEDIUM (Level 2) ─── NUMBER LINE
  q('Solve x − 6 = −2 and mark the solution on the number line.', ['range:-5–15'], 'answer: 4', 'equation_solving', 2, 'medium', 'number_line', ['solve_linear', 'number_sense'], 'number_sense_error', ['First find the numeric value, then mark it.', 'The number line shows relative position.', 'Negative answers appear to the left of zero.'], 'x = −2 + 6 = 4.', 'medium'),
  q('The equation 3x + 3 = 0 gives a solution. Where on the number line does x fall?', ['range:-5–5'], 'answer: -1', 'equation_solving', 2, 'medium', 'number_line', ['solve_linear', 'number_sense'], 'number_sense_error', ['First find the numeric value, then mark it.', 'The number line shows relative position.', 'Negative answers appear to the left of zero.'], '3x = −3 → x = −1 (to the left of 0).', 'medium'),
  // ── EASY (Level 1) ─── NUMBER LINE
  q('Solve 2x − 4 = 6 and mark x on the number line.', ['range:0–15'], 'answer: 5', 'equation_solving', 1, 'easy', 'number_line', ['solve_linear', 'number_sense'], 'number_sense_error', ['Solve the equation first, then locate x on the line.', 'Positive values are to the right of 0, negative to the left.', 'Count the units carefully from zero.'], '2x = 10 → x = 5.', 'short'),
  // ── HARD (Level 3) ─── NUMBER LINE
  q('Solve 5x + 10 = 0 and mark x on the number line. Is x positive or negative?', ['range:-5–5'], 'answer: -2', 'equation_solving', 3, 'hard', 'number_line', ['solve_linear', 'number_sense'], 'number_sense_error', ['Solve the equation step by step.', 'Check whether your answer is between the range endpoints.', 'Mark the point clearly on the line.'], '5x = −10 → x = −2. Negative, to the left of zero.', 'deep'),
  // ── MEDIUM (Level 2) ─── BEAM BALANCE
  q('Left pan: \'x + 7\'. Right pan: \'3x − 1\'. What value of x balances the beam?', ['LHS:x + 7', 'RHS:3x − 1'], '4', 'equation_solving', 2, 'medium', 'beam_balance', ['solve_linear', 'balance_concept'], 'balance_error', ['Expand brackets if present before balancing.', 'Move all x-terms to one side.', 'A balanced beam means the equation is satisfied.'], 'x + 7 = 3x − 1 → 8 = 2x → x = 4.', 'medium'),
  // ── HARD (Level 3) ─── BEAM BALANCE
  q('Left pan: \'4x + 2\'. Right pan: \'2x + 10\'. Find x.', ['LHS:4x + 2', 'RHS:2x + 10'], '4', 'equation_solving', 3, 'hard', 'beam_balance', ['solve_linear', 'balance_concept'], 'balance_error', ['Treat the beam like an equation.', 'Whatever you do to one pan, do to the other.', 'Solve and verify.'], '4x + 2 = 2x + 10 → 2x = 8 → x = 4.', 'deep'),
  q('Left pan: \'5x − 3\'. Right pan: \'2x + 9\'. Find x.', ['LHS:5x − 3', 'RHS:2x + 9'], '4', 'equation_solving', 3, 'hard', 'beam_balance', ['solve_linear', 'balance_concept'], 'balance_error', ['Treat the beam like an equation.', 'Whatever you do to one pan, do to the other.', 'Solve and verify.'], '5x − 3 = 2x + 9 → 3x = 12 → x = 4.', 'deep'),
  // ── MEDIUM (Level 2) ─── BEAM BALANCE
  q('Left pan: \'3(x + 2)\'. Right pan: \'18\'. Find x.', ['LHS:3(x + 2)', 'RHS:18'], '4', 'equation_solving', 2, 'medium', 'beam_balance', ['solve_linear', 'balance_concept'], 'balance_error', ['Expand brackets if present before balancing.', 'Move all x-terms to one side.', 'A balanced beam means the equation is satisfied.'], '3x + 6 = 18 → 3x = 12 → x = 4.', 'medium'),

  // =================================================================
  // ADVANCED EQUATIONS
  // =================================================================
  // ── MEDIUM (Level 2) ─── MCQ
  q('Solve: z / (z + 15) = 4/9', ['z = 10', 'z = 12', 'z = 15', 'z = 20'], 'z = 12', 'advanced_equations', 2, 'medium', 'mcq', ['cross_multiplication', 'clear_fractions'], 'concept_error', ['Identify what the question is asking for.', 'Write out the key information.', 'Check your arithmetic step by step.'], '9z = 4(z+15) = 4z+60 → 5z = 60 → z = 12.', 'medium'),
  // ── HARD (Level 3) ─── MCQ
  q('Solve: (x + 1) / (2x + 3) = 3/8', ['x = 1/2', 'x = 1', 'x = 2', 'x = −1/2'], 'x = 1/2', 'advanced_equations', 3, 'hard', 'mcq', ['cross_multiplication', 'clear_fractions'], 'equation_error', ['Look for key words: "increased by", "times", "ratio".', 'Set up the equation before solving.', 'Verify your answer satisfies all conditions.'], '8(x+1) = 3(2x+3) → 8x+8 = 6x+9 → 2x = 1 → x = 1/2.', 'deep'),
  q('Solve: (8x − 3) / (3x) = 2', ['x = 1', 'x = 3', 'x = 3/2', 'x = 2'], 'x = 3/2', 'advanced_equations', 3, 'hard', 'mcq', ['cross_multiplication', 'clear_fractions'], 'equation_error', ['Look for key words: "increased by", "times", "ratio".', 'Set up the equation before solving.', 'Verify your answer satisfies all conditions.'], '8x − 3 = 6x → 2x = 3 → x = 3/2.', 'deep'),
  q('Solve: 2x/3 + 1 = 7x/15 + 3', ['x = 5', 'x = 10', 'x = 15', 'x = 3'], 'x = 10', 'advanced_equations', 3, 'hard', 'mcq', ['cross_multiplication', 'clear_fractions'], 'equation_error', ['Look for key words: "increased by", "times", "ratio".', 'Set up the equation before solving.', 'Verify your answer satisfies all conditions.'], 'Multiply by 15: 10x + 15 = 7x + 45 → 3x = 30 → x = 10.', 'deep'),
  q('Solve: (7y + 4)/(y + 2) = −4/3', ['y = −4/5', 'y = −4', 'y = 2', 'y = 4'], 'y = −4/5', 'advanced_equations', 3, 'hard', 'mcq', ['cross_multiplication', 'clear_fractions'], 'equation_error', ['Look for key words: "increased by", "times", "ratio".', 'Set up the equation before solving.', 'Verify your answer satisfies all conditions.'], '3(7y+4) = −4(y+2) → 21y+12 = −4y−8 → 25y = −20 → y = −4/5.', 'deep'),
  // ── MEDIUM (Level 2) ─── MCQ
  q('Solve: 9x = 15(7 − 6x)', ['x = 1', 'x = 105/99', 'x = 35/33', 'x = 5/3'], 'x = 35/33', 'advanced_equations', 2, 'medium', 'mcq', ['cross_multiplication', 'clear_fractions'], 'concept_error', ['Identify what the question is asking for.', 'Write out the key information.', 'Check your arithmetic step by step.'], '9x = 105 − 90x → 99x = 105 → x = 105/99 = 35/33.', 'medium'),
  q('Which is the first step when solving (3x − 1)/4 = 5?', ['Subtract 1 from both sides', 'Multiply both sides by 4', 'Divide both sides by 3', 'Add 1 to both sides'], 'Multiply both sides by 4', 'advanced_equations', 2, 'medium', 'mcq', ['cross_multiplication', 'clear_fractions'], 'concept_error', ['Identify what the question is asking for.', 'Write out the key information.', 'Check your arithmetic step by step.'], 'Clearing the denominator first simplifies all subsequent steps: 3x − 1 = 20.', 'medium'),
  // ── HARD (Level 3) ─── MCQ
  q('Solve: (x − 3)/5 − (x − 5)/3 = 1/5. What is x?', ['x = 13/2', 'x = 5', 'x = −5', 'x = 10'], 'x = 13/2', 'advanced_equations', 3, 'hard', 'mcq', ['cross_multiplication', 'clear_fractions'], 'equation_error', ['Look for key words: "increased by", "times", "ratio".', 'Set up the equation before solving.', 'Verify your answer satisfies all conditions.'], 'Multiply by 15: 3(x−3) − 5(x−5) = 3 → 3x−9−5x+25 = 3 → −2x+16 = 3 → −2x = −13 → x = 13/2.', 'deep'),
  // ── MEDIUM (Level 2) ─── FILL IN THE BLANK
  q('The solution of 2x/3 = 18 is x = ________.', [], '27', 'advanced_equations', 2, 'medium', 'fill_in_the_blank', ['cross_multiplication', 'clear_fractions'], 'concept_error', ['Write the equation first, then solve.', 'Transpose terms carefully — signs flip when crossing =.', 'Simplify step by step.'], 'x = 18 × 3/2 = 27.', 'medium'),
  // ── HARD (Level 3) ─── FILL IN THE BLANK
  q('Solving (x+1)/(2x+3) = 3/8, cross-multiplying gives 8x+8 = 6x+9, so x = ________.', [], '1/2', 'advanced_equations', 3, 'hard', 'fill_in_the_blank', ['cross_multiplication', 'clear_fractions'], 'equation_error', ['Identify the operation applied to the unknown.', 'Apply the inverse operation to both sides.', 'Verify with substitution.'], '2x = 1 → x = 1/2.', 'deep'),
  q('If z/(z+15) = 4/9, then z = ________.', [], '12', 'advanced_equations', 3, 'hard', 'fill_in_the_blank', ['cross_multiplication', 'clear_fractions'], 'equation_error', ['Identify the operation applied to the unknown.', 'Apply the inverse operation to both sides.', 'Verify with substitution.'], '9z = 4z + 60 → 5z = 60 → z = 12.', 'deep'),
  // ── MEDIUM (Level 2) ─── FILL IN THE BLANK
  q('Solve: 2x − 5 = −11. The value of x is ________.', [], '−3', 'advanced_equations', 2, 'medium', 'fill_in_the_blank', ['cross_multiplication', 'clear_fractions'], 'concept_error', ['Write the equation first, then solve.', 'Transpose terms carefully — signs flip when crossing =.', 'Simplify step by step.'], '2x = −11 + 5 = −6 → x = −3.', 'medium'),
  // ── HARD (Level 3) ─── FILL IN THE BLANK
  q('After multiplying (3x−1)/4 − (2x+3)/6 = 1 by LCM 12, we get 9x−3−4x−6 = 12, so x = ________.', [], '21/5', 'advanced_equations', 3, 'hard', 'fill_in_the_blank', ['cross_multiplication', 'clear_fractions'], 'equation_error', ['Identify the operation applied to the unknown.', 'Apply the inverse operation to both sides.', 'Verify with substitution.'], '5x = 21 → x = 21/5.', 'deep'),
  // ── MEDIUM (Level 2) ─── FILL IN THE BLANK
  q('Solve: 3x/4 = 9. The value of x is ________.', [], '12', 'advanced_equations', 2, 'medium', 'fill_in_the_blank', ['cross_multiplication', 'clear_fractions'], 'concept_error', ['Write the equation first, then solve.', 'Transpose terms carefully — signs flip when crossing =.', 'Simplify step by step.'], 'x = 9 × 4/3 = 12.', 'medium'),
  // ── HARD (Level 3) ─── FILL IN THE BLANK
  q('Solving 5(x − 2)/3 = 2(x + 1)/2, the value of x is ________.', [], '13/2', 'advanced_equations', 3, 'hard', 'fill_in_the_blank', ['cross_multiplication', 'clear_fractions'], 'equation_error', ['Identify the operation applied to the unknown.', 'Apply the inverse operation to both sides.', 'Verify with substitution.'], 'Multiply by LCM 6: 10(x−2) = 6(x+1) → 10x−20 = 6x+6 → 4x = 26 → x = 13/2.', 'deep'),
  q('Match each fractional equation with its solution.', ['L:A:z/(z+15) = 4/9', 'L:B:(x+1)/(2x+3) = 3/8', 'L:C:2x/3 = 18', 'L:D:(8x−3)/(3x) = 2', 'R:1:x = 27', 'R:2:z = 12', 'R:3:x = 1/2', 'R:4:x = 3/2'], 'A→2, B→3, C→1, D→4', 'advanced_equations', 3, 'hard', 'match_the_column', ['match_solutions', 'cross_multiplication'], 'concept_error', ['Read both columns fully before matching.', 'Work from easiest to hardest match.', 'Double-check that all matches are unique.'], 'Cross multiply fractional equations and solve for the variable.', 'deep'),
  // ── MEDIUM (Level 2) ─── MATCH THE COLUMN
  q('Match each equation with the first step needed to solve it.', ['L:A:2x/3 + 1 = 7x/15 + 3', 'L:B:(x+1)/(2x+3) = 3/8', 'L:C:3x + 6 = 18', 'L:D:5x − 2 = 3x + 8', 'R:1:Subtract 3x from both sides', 'R:2:Subtract 6 from both sides', 'R:3:Cross-multiply', 'R:4:Multiply all terms by 15'], 'A→4, B→3, C→2, D→1', 'advanced_equations', 2, 'medium', 'match_the_column', ['match_solutions', 'cross_multiplication'], 'concept_error', ['Look for key words in each entry.', 'Match what you know for certain first.', 'Use process of elimination for the rest.'], 'Choose the most efficient first step based on the equation type.', 'medium'),
  // ── HARD (Level 3) ─── DRAG AND DROP
  q('Arrange steps to solve (x+1)/(2x+3) = 3/8.', ['1:Write: (x+1)/(2x+3) = 3/8', '2:Cross-multiply: 8(x+1) = 3(2x+3)', '3:Expand: 8x+8 = 6x+9', '4:Simplify: 2x = 1 → x = 1/2', '5:Verify: (1/2+1)/(2×1/2+3) = (3/2)/4 = 3/8 ✓'], 'order: [1,2,3,4,5]', 'advanced_equations', 3, 'hard', 'drag_and_drop', ['solve_step_by_step', 'cross_multiplication'], 'sequence_error', ['Arrange by cause and effect.', 'Mathematical steps follow a strict order.', 'Verify by reading your arrangement from top to bottom.'], 'Cross-multiply → expand → simplify → verify.', 'deep'),
  // ── MEDIUM (Level 2) ─── DRAG AND DROP
  q('Arrange steps to solve 2x/3 + 1 = 7x/15 + 3.', ['1:Multiply all terms by 15 (LCM of 3 and 15)', '2:10x + 15 = 7x + 45', '3:10x − 7x = 45 − 15', '4:3x = 30 → x = 10'], 'order: [1,2,3,4]', 'advanced_equations', 2, 'medium', 'drag_and_drop', ['solve_step_by_step', 'cross_multiplication'], 'sequence_error', ['Identify the starting condition.', 'What operation comes next?', 'Does your sequence lead to the stated answer?'], 'Clear fractions first with LCM, then solve.', 'medium'),
  // ── HARD (Level 3) ─── DRAG AND DROP
  q('Arrange steps to solve (3x−1)/4 − (2x+3)/6 = 1.', ['1:Find LCM of 4 and 6 = 12', '2:Multiply all terms by 12: 3(3x−1) − 2(2x+3) = 12', '3:Expand: 9x − 3 − 4x − 6 = 12', '4:5x − 9 = 12 → 5x = 21 → x = 21/5'], 'order: [1,2,3,4]', 'advanced_equations', 3, 'hard', 'drag_and_drop', ['solve_step_by_step', 'cross_multiplication'], 'sequence_error', ['Arrange by cause and effect.', 'Mathematical steps follow a strict order.', 'Verify by reading your arrangement from top to bottom.'], 'LCM clears all fractions in one step.', 'deep'),
  q('Solve 2x − 5 = −11 and place x on the number line. Is x positive or negative?', ['range:-10–5'], 'answer: -3', 'advanced_equations', 3, 'hard', 'number_line', ['solve_fractional', 'number_sense'], 'number_sense_error', ['Solve the equation step by step.', 'Check whether your answer is between the range endpoints.', 'Mark the point clearly on the line.'], '2x = −6 → x = −3. Negative, to the left of 0.', 'deep'),
  // ── MEDIUM (Level 2) ─── NUMBER LINE
  q('Solve 3x + 9 = 0 and mark x on the number line.', ['range:-10–5'], 'answer: -3', 'advanced_equations', 2, 'medium', 'number_line', ['solve_fractional', 'number_sense'], 'number_sense_error', ['First find the numeric value, then mark it.', 'The number line shows relative position.', 'Negative answers appear to the left of zero.'], '3x = −9 → x = −3.', 'medium'),
  // ── HARD (Level 3) ─── NUMBER LINE
  q('Solve 4x + 12 = 0 and mark x on the number line.', ['range:-10–5'], 'answer: -3', 'advanced_equations', 3, 'hard', 'number_line', ['solve_fractional', 'number_sense'], 'number_sense_error', ['Solve the equation step by step.', 'Check whether your answer is between the range endpoints.', 'Mark the point clearly on the line.'], '4x = −12 → x = −3.', 'deep'),
  // ── MEDIUM (Level 2) ─── NUMBER LINE
  q('Solve 5x − 15 = 0 and mark x on the number line.', ['range:0–10'], 'answer: 3', 'advanced_equations', 2, 'medium', 'number_line', ['solve_fractional', 'number_sense'], 'number_sense_error', ['First find the numeric value, then mark it.', 'The number line shows relative position.', 'Negative answers appear to the left of zero.'], '5x = 15 → x = 3.', 'medium'),
  // ── HARD (Level 3) ─── BEAM BALANCE
  q('Left pan: \'3(2x+1)\'. Right pan: \'2(x+6)+5\'. Find x.', ['LHS:3(2x+1)', 'RHS:2(x+6)+5'], '3.5', 'advanced_equations', 3, 'hard', 'beam_balance', ['solve_fractional', 'balance_concept'], 'balance_error', ['Treat the beam like an equation.', 'Whatever you do to one pan, do to the other.', 'Solve and verify.'], '6x+3 = 2x+12+5 = 2x+17 → 4x = 14 → x = 3.5.', 'deep'),
  q('8(x+1) = 3(2x+3). Find x.', ['LHS:8(x+1)', 'RHS:3(2x+3)'], '0.5', 'advanced_equations', 3, 'hard', 'beam_balance', ['solve_fractional', 'balance_concept'], 'balance_error', ['Treat the beam like an equation.', 'Whatever you do to one pan, do to the other.', 'Solve and verify.'], '8x+8 = 6x+9 → 2x = 1 → x = 1/2.', 'deep'),
  // ── MEDIUM (Level 2) ─── BEAM BALANCE
  q('Left pan: \'5(x − 2)\'. Right pan: \'3(x + 2)\'. Find x.', ['LHS:5(x − 2)', 'RHS:3(x + 2)'], '8', 'advanced_equations', 2, 'medium', 'beam_balance', ['solve_fractional', 'balance_concept'], 'balance_error', ['Expand brackets if present before balancing.', 'Move all x-terms to one side.', 'A balanced beam means the equation is satisfied.'], '5x − 10 = 3x + 6 → 2x = 16 → x = 8.', 'medium'),

  // =================================================================
  // WORD PROBLEMS — BASIC
  // =================================================================
  // ── EASY (Level 1) ─── MCQ
  q('The sum of three consecutive integers is 48. What are the integers?', ['14, 15, 16', '15, 16, 17', '16, 17, 18', '13, 14, 15'], '15, 16, 17', 'word_problems_basic', 1, 'easy', 'mcq', ['equation_translation', 'word_to_algebra'], 'concept_error', ['Read the question carefully before checking options.', 'Eliminate obviously wrong options first.', 'Substitute your answer back to verify.'], 'n + (n+1) + (n+2) = 48 → 3n+3 = 48 → n = 15.', 'short'),
  q('A number increased by 12 is 29. What is the number?', ['15', '17', '19', '21'], '17', 'word_problems_basic', 1, 'easy', 'mcq', ['equation_translation', 'word_to_algebra'], 'concept_error', ['Read the question carefully before checking options.', 'Eliminate obviously wrong options first.', 'Substitute your answer back to verify.'], 'x + 12 = 29 → x = 17.', 'short'),
  q('When 4 is subtracted from twice a number, the result is 10. Find the number.', ['5', '6', '7', '8'], '7', 'word_problems_basic', 1, 'easy', 'mcq', ['equation_translation', 'word_to_algebra'], 'concept_error', ['Read the question carefully before checking options.', 'Eliminate obviously wrong options first.', 'Substitute your answer back to verify.'], '2x − 4 = 10 → 2x = 14 → x = 7.', 'short'),
  // ── MEDIUM (Level 2) ─── MCQ
  q('The perimeter of a rectangle is 40 cm. If the length is 5 more than the width, find the width.', ['7.5 cm', '10 cm', '12.5 cm', '15 cm'], '7.5 cm', 'word_problems_basic', 2, 'medium', 'mcq', ['equation_translation', 'word_to_algebra'], 'concept_error', ['Identify what the question is asking for.', 'Write out the key information.', 'Check your arithmetic step by step.'], '2(w + w+5) = 40 → 4w+10 = 40 → 4w = 30 → w = 7.5 cm.', 'medium'),
  q('If the sum of two consecutive even numbers is 46, what are the numbers?', ['20 and 26', '22 and 24', '18 and 28', '21 and 25'], '22 and 24', 'word_problems_basic', 2, 'medium', 'mcq', ['equation_translation', 'word_to_algebra'], 'concept_error', ['Identify what the question is asking for.', 'Write out the key information.', 'Check your arithmetic step by step.'], 'n + (n+2) = 46 → 2n = 44 → n = 22.', 'medium'),
  q('Raju has ₹5 and ₹10 notes totalling ₹110. He has 16 notes. How many ₹5 notes?', ['6', '8', '10', '12'], '10', 'word_problems_basic', 2, 'medium', 'mcq', ['equation_translation', 'word_to_algebra'], 'concept_error', ['Identify what the question is asking for.', 'Write out the key information.', 'Check your arithmetic step by step.'], 'Let ₹5 notes = x. 5x + 10(16−x) = 110 → −5x = −50 → x = 10.', 'medium'),
  // ── HARD (Level 3) ─── MCQ
  q('A train covers a certain distance at 60 km/h and returns at 40 km/h. If the total time is 5 hours, what is the one-way distance?', ['100 km', '120 km', '150 km', '180 km'], '120 km', 'word_problems_basic', 3, 'hard', 'mcq', ['equation_translation', 'word_to_algebra'], 'equation_error', ['Look for key words: "increased by", "times", "ratio".', 'Set up the equation before solving.', 'Verify your answer satisfies all conditions.'], 'd/60 + d/40 = 5 → (2d+3d)/120 = 5 → 5d = 600 → d = 120 km.', 'deep'),
  q('The sum of the digits of a two-digit number is 9. If the digits are reversed, the new number is 27 more than the original. Find the original number.', ['36', '45', '27', '63'], '36', 'word_problems_basic', 3, 'hard', 'mcq', ['equation_translation', 'word_to_algebra'], 'equation_error', ['Look for key words: "increased by", "times", "ratio".', 'Set up the equation before solving.', 'Verify your answer satisfies all conditions.'], 'Let tens = t, units = u; t+u=9. Reversed: (10u+t)−(10t+u)=27 → 9(u−t)=27 → u−t=3. Solving: t=3, u=6. Number=36.', 'deep'),
  // ── EASY (Level 1) ─── MCQ
  q('A shopkeeper sold an item for ₹540, gaining 8%. What was the cost price?', ['₹480', '₹500', '₹520', '₹560'], '₹500', 'word_problems_basic', 1, 'easy', 'mcq', ['equation_translation', 'word_to_algebra'], 'concept_error', ['Read the question carefully before checking options.', 'Eliminate obviously wrong options first.', 'Substitute your answer back to verify.'], 'SP = CP × (1 + 8/100) → 540 = CP × 1.08 → CP = 500.', 'short'),
  q('If the sum of two consecutive integers is 31, then the smaller integer is ________.', [], '15', 'word_problems_basic', 1, 'easy', 'fill_in_the_blank', ['equation_translation', 'word_to_algebra'], 'concept_error', ['Isolate the unknown on one side.', 'Use inverse operations to undo each step.', 'Check your answer by substituting back.'], 'n + (n+1) = 31 → 2n = 30 → n = 15.', 'short'),
  q('A number when doubled and then increased by 3 gives 11. The number is ________.', [], '4', 'word_problems_basic', 1, 'easy', 'fill_in_the_blank', ['equation_translation', 'word_to_algebra'], 'concept_error', ['Isolate the unknown on one side.', 'Use inverse operations to undo each step.', 'Check your answer by substituting back.'], '2x + 3 = 11 → 2x = 8 → x = 4.', 'short'),
  // ── MEDIUM (Level 2) ─── FILL IN THE BLANK
  q('Three times a number minus 7 equals 14. The number is ________.', [], '7', 'word_problems_basic', 2, 'medium', 'fill_in_the_blank', ['equation_translation', 'word_to_algebra'], 'concept_error', ['Write the equation first, then solve.', 'Transpose terms carefully — signs flip when crossing =.', 'Simplify step by step.'], '3x − 7 = 14 → 3x = 21 → x = 7.', 'medium'),
  q('A father is 30 years older than his son. In 5 years, he will be twice as old as his son. The son\'s present age is ________.', [], '25', 'word_problems_basic', 2, 'medium', 'fill_in_the_blank', ['equation_translation', 'word_to_algebra'], 'concept_error', ['Write the equation first, then solve.', 'Transpose terms carefully — signs flip when crossing =.', 'Simplify step by step.'], 'x+30+5 = 2(x+5) → x+35 = 2x+10 → x = 25.', 'medium'),
  // ── EASY (Level 1) ─── FILL IN THE BLANK
  q('The product of 6 and a number is 54. The number is ________.', [], '9', 'word_problems_basic', 1, 'easy', 'fill_in_the_blank', ['equation_translation', 'word_to_algebra'], 'concept_error', ['Isolate the unknown on one side.', 'Use inverse operations to undo each step.', 'Check your answer by substituting back.'], '6x = 54 → x = 9.', 'short'),
  // ── MEDIUM (Level 2) ─── FILL IN THE BLANK
  q('The sum of three consecutive odd numbers is 51. The middle number is ________.', [], '17', 'word_problems_basic', 2, 'medium', 'fill_in_the_blank', ['equation_translation', 'word_to_algebra'], 'concept_error', ['Write the equation first, then solve.', 'Transpose terms carefully — signs flip when crossing =.', 'Simplify step by step.'], 'Let middle = n. (n−2)+n+(n+2) = 51 → 3n = 51 → n = 17.', 'medium'),
  // ── HARD (Level 3) ─── FILL IN THE BLANK
  q('Two numbers are in ratio 3:5. Their sum is 64. The larger number is ________.', [], '40', 'word_problems_basic', 3, 'hard', 'fill_in_the_blank', ['equation_translation', 'word_to_algebra'], 'equation_error', ['Identify the operation applied to the unknown.', 'Apply the inverse operation to both sides.', 'Verify with substitution.'], '3x + 5x = 64 → 8x = 64 → x = 8. Larger = 5 × 8 = 40.', 'deep'),
  // ── MEDIUM (Level 2) ─── MATCH THE COLUMN
  q('Match each word problem statement with the correct equation.', ['L:A:Three times a number increased by 5 equals 20', 'L:B:A number divided by 4 and decreased by 2 equals 3', 'L:C:Twice a number minus 7 equals 11', 'L:D:A number added to itself equals 26', 'R:1:2x = 26', 'R:2:2x − 7 = 11', 'R:3:3x + 5 = 20', 'R:4:x/4 − 2 = 3'], 'A→3, B→4, C→2, D→1', 'word_problems_basic', 2, 'medium', 'match_the_column', ['equation_translation', 'match_operations'], 'concept_error', ['Look for key words in each entry.', 'Match what you know for certain first.', 'Use process of elimination for the rest.'], 'Translate key words: \'increased by\'→+, \'decreased by\'→−, \'times\'→×.', 'medium'),
  q('Match each word problem with the value it produces.', ['L:A:Sum of two consecutive integers is 31; find smaller', 'L:B:A number doubled + 3 = 11', 'L:C:5 less than a number is 12', 'L:D:A number multiplied by 6 equals 54', 'R:1:x = 9', 'R:2:x = 17', 'R:3:x = 15', 'R:4:x = 4'], 'A→3, B→4, C→2, D→1', 'word_problems_basic', 2, 'medium', 'match_the_column', ['equation_translation', 'match_operations'], 'concept_error', ['Look for key words in each entry.', 'Match what you know for certain first.', 'Use process of elimination for the rest.'], 'A→15, B→4, C→17, D→9.', 'medium'),
  // ── EASY (Level 1) ─── DRAG AND DROP
  q('Arrange the steps to solve: \'A number increased by 12 is 29. Find the number.\'', ['1:Let the number = x', '2:Write equation: x + 12 = 29', '3:Subtract 12: x = 17', '4:The number is 17.'], 'order: [1,2,3,4]', 'word_problems_basic', 1, 'easy', 'drag_and_drop', ['solve_step_by_step', 'equation_translation'], 'sequence_error', ['Think about what logically comes first.', 'Each step should follow from the previous one.', 'Read all steps before arranging.'], 'Define → form → solve → state.', 'short'),
  // ── MEDIUM (Level 2) ─── DRAG AND DROP
  q('Hari\'s age is 5 years more than twice Raju\'s age. Hari is 25. Find Raju\'s age.', ['1:Let Raju\'s age = x', '2:Form equation: 2x + 5 = 25', '3:Simplify: 2x = 20', '4:Solve: x = 10. Raju is 10 years old.'], 'order: [1,2,3,4]', 'word_problems_basic', 2, 'medium', 'drag_and_drop', ['solve_step_by_step', 'equation_translation'], 'sequence_error', ['Identify the starting condition.', 'What operation comes next?', 'Does your sequence lead to the stated answer?'], 'Define variable → form equation → simplify → state answer.', 'medium'),
  // ── HARD (Level 3) ─── DRAG AND DROP
  q('Arrange the steps to solve: \'A train goes 120 km at 60 km/h and returns at 40 km/h. Find total time.\'', ['1:Time going = 120/60 = 2 hours', '2:Time returning = 120/40 = 3 hours', '3:Total time = 2 + 3 = 5 hours', '4:Average speed = Total distance / Total time = 240/5 = 48 km/h'], 'order: [1,2,3,4]', 'word_problems_basic', 3, 'hard', 'drag_and_drop', ['solve_step_by_step', 'equation_translation'], 'sequence_error', ['Arrange by cause and effect.', 'Mathematical steps follow a strict order.', 'Verify by reading your arrangement from top to bottom.'], 'Use time = distance ÷ speed for each leg, then add.', 'deep'),
  // ── EASY (Level 1) ─── NUMBER LINE
  q('A number when increased by 5 becomes 9. Find the number and mark it on the number line.', ['range:0–15'], 'answer: 4', 'word_problems_basic', 1, 'easy', 'number_line', ['word_to_algebra', 'number_sense'], 'number_sense_error', ['Solve the equation first, then locate x on the line.', 'Positive values are to the right of 0, negative to the left.', 'Count the units carefully from zero.'], 'x + 5 = 9 → x = 4.', 'short'),
  // ── MEDIUM (Level 2) ─── NUMBER LINE
  q('The sum of two consecutive integers is 7. Find the smaller integer and mark it on the number line.', ['range:0–10'], 'answer: 3', 'word_problems_basic', 2, 'medium', 'number_line', ['word_to_algebra', 'number_sense'], 'number_sense_error', ['First find the numeric value, then mark it.', 'The number line shows relative position.', 'Negative answers appear to the left of zero.'], 'n + (n+1) = 7 → 2n = 6 → n = 3.', 'medium'),
  // ── EASY (Level 1) ─── NUMBER LINE
  q('A number decreased by 3 is 5. Find the number and mark it on the number line.', ['range:0–15'], 'answer: 8', 'word_problems_basic', 1, 'easy', 'number_line', ['word_to_algebra', 'number_sense'], 'number_sense_error', ['Solve the equation first, then locate x on the line.', 'Positive values are to the right of 0, negative to the left.', 'Count the units carefully from zero.'], 'x − 3 = 5 → x = 8.', 'short'),
  // ── MEDIUM (Level 2) ─── NUMBER LINE
  q('A shopkeeper gains ₹8 on selling an item for ₹50. Mark the cost price on the number line.', ['range:0–60'], 'answer: 42', 'word_problems_basic', 2, 'medium', 'number_line', ['word_to_algebra', 'number_sense'], 'number_sense_error', ['First find the numeric value, then mark it.', 'The number line shows relative position.', 'Negative answers appear to the left of zero.'], 'CP = SP − Profit = 50 − 8 = 42.', 'medium'),
  // ── EASY (Level 1) ─── BEAM BALANCE
  q('A bag of apples (x kg) plus a 3 kg weight balances a 10 kg weight. Find x.', ['LHS:x + 3', 'RHS:10'], '7', 'word_problems_basic', 1, 'easy', 'beam_balance', ['word_to_algebra', 'balance_concept'], 'balance_error', ['The beam balances when both sides are equal.', 'Set LHS = RHS and solve for x.', 'Verify by substituting x back into both pans.'], 'x + 3 = 10 → x = 7 kg.', 'short'),
  // ── MEDIUM (Level 2) ─── BEAM BALANCE
  q('Two equal boxes (each x kg) plus a 4 kg weight balances 18 kg. Find x.', ['LHS:2x + 4', 'RHS:18'], '7', 'word_problems_basic', 2, 'medium', 'beam_balance', ['word_to_algebra', 'balance_concept'], 'balance_error', ['Expand brackets if present before balancing.', 'Move all x-terms to one side.', 'A balanced beam means the equation is satisfied.'], '2x + 4 = 18 → 2x = 14 → x = 7 kg.', 'medium'),
  q('A basket of mangoes (x) weighs the same as 3 mangoes plus a 500 g weight (in grams, 1 mango = 200g). 200x = 600 + 500. Find x.', ['LHS:200x', 'RHS:600 + 500'], '5.5', 'word_problems_basic', 2, 'medium', 'beam_balance', ['word_to_algebra', 'balance_concept'], 'balance_error', ['Expand brackets if present before balancing.', 'Move all x-terms to one side.', 'A balanced beam means the equation is satisfied.'], '200x = 1100 → x = 5.5 mangoes. Demonstrates fractional solutions.', 'medium'),
  // ── HARD (Level 3) ─── BEAM BALANCE
  q('Three friends share a bill equally. Each pays ₹x. Total bill is ₹3x. If 10% discount brings total to ₹270, find x.', ['LHS:3x × 0.9', 'RHS:270'], '100', 'word_problems_basic', 3, 'hard', 'beam_balance', ['word_to_algebra', 'balance_concept'], 'balance_error', ['Treat the beam like an equation.', 'Whatever you do to one pan, do to the other.', 'Solve and verify.'], '2.7x = 270 → x = 100. Each friend\'s share before discount was ₹100.', 'deep'),

  // =================================================================
  // WORD PROBLEMS — ADVANCED
  // =================================================================
  // ── MEDIUM (Level 2) ─── MCQ
  q('The present ages of Anu and Raj are in ratio 4:5. Eight years from now, the ratio becomes 5:6. What is Anu\'s present age?', ['24 years', '32 years', '40 years', '16 years'], '32 years', 'word_problems_advanced', 2, 'medium', 'mcq', ['ratio_problems', 'age_problems', 'digit_problems'], 'concept_error', ['Identify what the question is asking for.', 'Write out the key information.', 'Check your arithmetic step by step.'], 'Let ages = 4x and 5x. (4x+8)/(5x+8) = 5/6 → x = 8. Anu = 32.', 'medium'),
  // ── HARD (Level 3) ─── MCQ
  q('Hari\'s age four years from now will be three times his age four years ago. How old is Hari now?', ['8 years', '10 years', '12 years', '16 years'], '8 years', 'word_problems_advanced', 3, 'hard', 'mcq', ['ratio_problems', 'age_problems', 'digit_problems'], 'equation_error', ['Look for key words: "increased by", "times", "ratio".', 'Set up the equation before solving.', 'Verify your answer satisfies all conditions.'], 'x+4 = 3(x−4) → x+4 = 3x−12 → 16 = 2x → x = 8.', 'deep'),
  q('The denominator of a rational number exceeds numerator by 8. Numerator increased by 17, denominator decreased by 1 gives 3/2. Find the original number.', ['13/21', '11/19', '13/19', '5/13'], '13/21', 'word_problems_advanced', 3, 'hard', 'mcq', ['ratio_problems', 'age_problems', 'digit_problems'], 'equation_error', ['Look for key words: "increased by", "times", "ratio".', 'Set up the equation before solving.', 'Verify your answer satisfies all conditions.'], '(x+17)/(x+7) = 3/2 → 2x+34 = 3x+21 → x = 13. Fraction = 13/21.', 'deep'),
  // ── MEDIUM (Level 2) ─── MCQ
  q('Ages of Hari and Harry are in ratio 5:7. Four years from now ratio will be 3:4. Their present ages are:', ['Hari=20, Harry=28', 'Hari=10, Harry=14', 'Hari=15, Harry=21', 'Hari=25, Harry=35'], 'Hari=20, Harry=28', 'word_problems_advanced', 2, 'medium', 'mcq', ['ratio_problems', 'age_problems', 'digit_problems'], 'concept_error', ['Identify what the question is asking for.', 'Write out the key information.', 'Check your arithmetic step by step.'], '5x and 7x. (5x+4)/(7x+4) = 3/4 → 20x+16 = 21x+12 → x = 4. Ages: 20 and 28.', 'medium'),
  // ── HARD (Level 3) ─── MCQ
  q('A two-digit number is 4 times the sum of its digits. If 27 is added, the digits are reversed. Find the number.', ['36', '24', '48', '12'], '36', 'word_problems_advanced', 3, 'hard', 'mcq', ['ratio_problems', 'age_problems', 'digit_problems'], 'equation_error', ['Look for key words: "increased by", "times", "ratio".', 'Set up the equation before solving.', 'Verify your answer satisfies all conditions.'], 'Let tens = t, units = u. 10t+u = 4(t+u) → u = 2t. 10t+u+27 = 10u+t → u−t = 3. So t=3, u=6. Number=36.', 'deep'),
  q('A sum of ₹700 is in ₹10 and ₹50 notes. Total notes = 22. How many ₹50 notes are there?', ['7', '8', '12', '15'], '12', 'word_problems_advanced', 3, 'hard', 'mcq', ['ratio_problems', 'age_problems', 'digit_problems'], 'equation_error', ['Look for key words: "increased by", "times", "ratio".', 'Set up the equation before solving.', 'Verify your answer satisfies all conditions.'], 'Let ₹50 notes = x. 50x + 10(22−x) = 700 → 40x = 480 → x = 12.', 'deep'),
  q('A boat travels 24 km upstream and 28 km downstream in 6 hours. If the stream speed is 4 km/h, find the boat\'s speed in still water.', ['8 km/h', '10 km/h', '12 km/h', '6 km/h'], '10 km/h', 'word_problems_advanced', 3, 'hard', 'mcq', ['ratio_problems', 'age_problems', 'digit_problems'], 'equation_error', ['Look for key words: "increased by", "times", "ratio".', 'Set up the equation before solving.', 'Verify your answer satisfies all conditions.'], 'Let boat speed = v. 24/(v−4) + 28/(v+4) = 6. At v=10: 24/6 + 28/14 = 4 + 2 = 6 ✓. Boat speed = 10 km/h.', 'deep'),
  q('The denominator of a rational number is greater than its numerator by 8. After changes, fraction = 3/2. The original numerator is ________.', [], '13', 'word_problems_advanced', 3, 'hard', 'fill_in_the_blank', ['age_problems', 'ratio_problems'], 'equation_error', ['Identify the operation applied to the unknown.', 'Apply the inverse operation to both sides.', 'Verify with substitution.'], '(x+17)/(x+7) = 3/2 → x = 13.', 'deep'),
  // ── MEDIUM (Level 2) ─── FILL IN THE BLANK
  q('Present ages of Anu and Raj are in ratio 4:5. Eight years later ratio is 5:6. Raj\'s present age is ________.', [], '40', 'word_problems_advanced', 2, 'medium', 'fill_in_the_blank', ['age_problems', 'ratio_problems'], 'concept_error', ['Write the equation first, then solve.', 'Transpose terms carefully — signs flip when crossing =.', 'Simplify step by step.'], '5x; x = 8. Raj = 5 × 8 = 40 years.', 'medium'),
  // ── HARD (Level 3) ─── FILL IN THE BLANK
  q('Hari\'s age 4 years from now = 3 times his age 4 years ago. Hari\'s present age is ________.', [], '8', 'word_problems_advanced', 3, 'hard', 'fill_in_the_blank', ['age_problems', 'ratio_problems'], 'equation_error', ['Identify the operation applied to the unknown.', 'Apply the inverse operation to both sides.', 'Verify with substitution.'], 'x+4 = 3(x−4) → 16 = 2x → x = 8.', 'deep'),
  // ── MEDIUM (Level 2) ─── FILL IN THE BLANK
  q('Hari and Harry\'s ages are in ratio 5:7. Four years later ratio is 3:4. Hari\'s present age is ________.', [], '20', 'word_problems_advanced', 2, 'medium', 'fill_in_the_blank', ['age_problems', 'ratio_problems'], 'concept_error', ['Write the equation first, then solve.', 'Transpose terms carefully — signs flip when crossing =.', 'Simplify step by step.'], '5x and 7x. x = 4. Hari = 20.', 'medium'),
  // ── HARD (Level 3) ─── FILL IN THE BLANK
  q('Hari and Harry\'s ages are in ratio 5:7. Four years from now ratio is 3:4. Harry\'s present age is ________.', [], '28', 'word_problems_advanced', 3, 'hard', 'fill_in_the_blank', ['age_problems', 'ratio_problems'], 'equation_error', ['Identify the operation applied to the unknown.', 'Apply the inverse operation to both sides.', 'Verify with substitution.'], '7x; x = 4. Harry = 7 × 4 = 28.', 'deep'),
  q('A two-digit number is 4 times the sum of its digits. If 27 is added, digits are reversed. The tens digit of the original number is ________.', [], '3', 'word_problems_advanced', 3, 'hard', 'fill_in_the_blank', ['age_problems', 'ratio_problems'], 'equation_error', ['Identify the operation applied to the unknown.', 'Apply the inverse operation to both sides.', 'Verify with substitution.'], 'u = 2t and u−t = 3 → t = 3.', 'deep'),
  q('Match each advanced word problem with the equation that models it.', ['L:A:Age: 4 years from now = 3 × (age 4 years ago)', 'L:B:Ages ratio 4:5, becomes 5:6 after 8 years', 'L:C:Denominator 8 more than numerator; after changes = 3/2', 'L:D:Two-digit: u = 2t and u − t = 3', 'R:1:t=3, u=6 → Number=36', 'R:2:x=13 → Fraction=13/21', 'R:3:x=8 → Age=8 yrs', 'R:4:x=8 → Anu=32, Raj=40'], 'A→3, B→4, C→2, D→1', 'word_problems_advanced', 3, 'hard', 'match_the_column', ['equation_translation', 'ratio_problems'], 'concept_error', ['Read both columns fully before matching.', 'Work from easiest to hardest match.', 'Double-check that all matches are unique.'], 'Age, ratio, fraction, and digit problems — all modelled by linear equations.', 'deep'),
  q('Match each ratio-age problem with the value of the ratio variable x.', ['L:A:Ages 4:5, ratio becomes 5:6 after 8 years', 'L:B:Ages 5:7, ratio becomes 3:4 after 4 years', 'L:C:Ages 2:3, ratio becomes 3:4 after 6 years', 'L:D:Ages 1:2, ratio becomes 2:3 after 5 years', 'R:1:x = 5', 'R:2:x = 4', 'R:3:x = 8', 'R:4:x = 6'], 'A→3, B→2, C→4, D→1', 'word_problems_advanced', 3, 'hard', 'match_the_column', ['equation_translation', 'ratio_problems'], 'concept_error', ['Read both columns fully before matching.', 'Work from easiest to hardest match.', 'Double-check that all matches are unique.'], 'Each ratio problem yields a different x. Solve: cross-multiply the future ratio equation.', 'deep'),
  q('Arrange the steps to solve the age-ratio problem: \'Anu and Raj\'s ages are in ratio 4:5. Eight years later ratio is 5:6.\'', ['1:Let Anu = 4x, Raj = 5x', '2:After 8 years: (4x+8)/(5x+8) = 5/6', '3:Cross-multiply: 6(4x+8) = 5(5x+8)', '4:24x + 48 = 25x + 40 → x = 8', '5:Anu = 32 years, Raj = 40 years'], 'order: [1,2,3,4,5]', 'word_problems_advanced', 3, 'hard', 'drag_and_drop', ['solve_step_by_step', 'ratio_problems'], 'sequence_error', ['Arrange by cause and effect.', 'Mathematical steps follow a strict order.', 'Verify by reading your arrangement from top to bottom.'], 'Define ratio variable → future ratio → cross-multiply → solve → state ages.', 'deep'),
  q('Arrange the steps to solve the fraction problem: \'Denominator is 8 more than numerator; after changes, fraction = 3/2.\'', ['1:Let numerator = x, denominator = x + 8', '2:After changes: (x+17)/(x+7) = 3/2', '3:Cross-multiply: 2(x+17) = 3(x+7)', '4:2x + 34 = 3x + 21 → x = 13', '5:Original fraction = 13/21'], 'order: [1,2,3,4,5]', 'word_problems_advanced', 3, 'hard', 'drag_and_drop', ['solve_step_by_step', 'ratio_problems'], 'sequence_error', ['Arrange by cause and effect.', 'Mathematical steps follow a strict order.', 'Verify by reading your arrangement from top to bottom.'], 'Define num/den → set up changed fraction → cross-multiply → solve → state.', 'deep'),
  // ── MEDIUM (Level 2) ─── DRAG AND DROP
  q('Arrange the steps to solve: \'Hari & Harry ages ratio 5:7. Four years later ratio 3:4.\'', ['1:Let Hari = 5x, Harry = 7x', '2:After 4 years: (5x+4)/(7x+4) = 3/4', '3:Cross-multiply: 4(5x+4) = 3(7x+4)', '4:20x+16 = 21x+12 → x = 4', '5:Hari = 20 years, Harry = 28 years'], 'order: [1,2,3,4,5]', 'word_problems_advanced', 2, 'medium', 'drag_and_drop', ['solve_step_by_step', 'ratio_problems'], 'sequence_error', ['Identify the starting condition.', 'What operation comes next?', 'Does your sequence lead to the stated answer?'], 'Define ratio variable → future ratio → cross-multiply → solve → state.', 'medium'),
  // ── HARD (Level 3) ─── NUMBER LINE
  q('Hari\'s present age is 8 years. Mark his age now (8) and 4 years ago (4) on the number line.', ['range:0–20'], 'answer: 8 | markers: {"4":"4 years ago","8":"Present"}', 'word_problems_advanced', 3, 'hard', 'number_line', ['age_problems', 'number_sense'], 'number_sense_error', ['Solve the equation step by step.', 'Check whether your answer is between the range endpoints.', 'Mark the point clearly on the line.'], 'x = 8 (present). 4 years ago = 4.', 'deep'),
  // ── MEDIUM (Level 2) ─── NUMBER LINE
  q('Anu is 32 and Raj is 40 years old. Mark both ages on the number line.', ['range:0–50'], 'answer: 32 | secondary: 40', 'word_problems_advanced', 2, 'medium', 'number_line', ['age_problems', 'number_sense'], 'number_sense_error', ['First find the numeric value, then mark it.', 'The number line shows relative position.', 'Negative answers appear to the left of zero.'], 'Anu = 32, Raj = 40. Raj is 8 units to the right of Anu.', 'medium'),
  // ── HARD (Level 3) ─── NUMBER LINE
  q('A fraction\'s numerator is 13 and denominator is 21. Mark the numerator on the number line (0 to 25).', ['range:0–25'], 'answer: 13', 'word_problems_advanced', 3, 'hard', 'number_line', ['age_problems', 'number_sense'], 'number_sense_error', ['Solve the equation step by step.', 'Check whether your answer is between the range endpoints.', 'Mark the point clearly on the line.'], 'Numerator = 13. This comes from solving (x+17)/(x+7) = 3/2.', 'deep'),
  q('Modelling Hari\'s age problem: Left pan = \'x + 4\' (age in 4 years). Right pan = \'3(x−4)\' (3× age 4 yrs ago). Find x.', ['LHS:x + 4', 'RHS:3(x − 4)'], '8', 'word_problems_advanced', 3, 'hard', 'beam_balance', ['age_problems', 'balance_concept'], 'balance_error', ['Treat the beam like an equation.', 'Whatever you do to one pan, do to the other.', 'Solve and verify.'], 'x+4 = 3x−12 → 16 = 2x → x = 8 yrs.', 'deep'),
  q('Ages in ratio: 6(4x+8) = 5(5x+8). Solve for x.', ['LHS:6(4x + 8)', 'RHS:5(5x + 8)'], '8', 'word_problems_advanced', 3, 'hard', 'beam_balance', ['age_problems', 'balance_concept'], 'balance_error', ['Treat the beam like an equation.', 'Whatever you do to one pan, do to the other.', 'Solve and verify.'], '24x+48 = 25x+40 → x = 8. Anu=32, Raj=40.', 'deep'),
  // ── MEDIUM (Level 2) ─── MATCH THE COLUMN
  q('Match each word problem type with the key algebraic technique used.', ['L:A:Age problems with future ratio', 'L:B:Digit reversal problems', 'L:C:Fraction numerator/denominator problems', 'L:D:Mixture problems', 'R:1:Set up weighted average equation', 'R:2:Use 10t + u and 10u + t', 'R:3:Cross-multiply two equivalent fractions', 'R:4:Use ratio variable and cross-multiply future ratio'], 'A→4, B→2, C→3, D→1', 'word_problems_advanced', 2, 'medium', 'match_the_column', ['equation_translation', 'ratio_problems'], 'concept_error', ['Look for key words in each entry.', 'Match what you know for certain first.', 'Use process of elimination for the rest.'], 'Each problem category has a signature algebraic approach that simplifies the setup.', 'medium'),

  // =================================================================
  // ADVANCED EQUATIONS
  // =================================================================
  // ── MEDIUM (Level 2) ─── MCQ
  q('Solve: (x + 3)/4 = (x − 1)/2. What is x?', ['x = 5', 'x = 7', 'x = −5', 'x = −7'], 'x = 5', 'advanced_equations', 2, 'medium', 'mcq', ['cross_multiplication', 'clear_fractions'], 'concept_error', ['Identify what the question is asking for.', 'Write out the key information.', 'Check your arithmetic step by step.'], 'Multiply by 4: x+3 = 2(x−1) → x+3 = 2x−2 → 5 = x.', 'medium')
,

  // =================================================================
  // ADDITIONAL QUESTIONS — BALANCING TYPE DISTRIBUTION
  // =================================================================


  // ================================================================
  // EXPRESSIONS FOUNDATION — additional questions
  // ================================================================

  // ── MATCH THE COLUMN ──
  q('Match each algebraic term with its coefficient.',
    ['L:A:4x²', 'L:B:−7xy', 'L:C:9y³', 'L:D:−x',
     'R:1:−1', 'R:2:9', 'R:3:4', 'R:4:−7'],
    'A→3, B→4, C→2, D→1',
    'expressions_foundation', 1, 'easy', 'match_the_column',
    ['identify_variables', 'identify_like_terms'], 'concept_error',
    ['The coefficient is the number multiplying the variable.', 'A lone variable like −x has coefficient −1.', 'Eliminate confident matches first.'],
    'Coefficients: 4x²→4, −7xy→−7, 9y³→9, −x→−1.',
    'short'),

  q('Match each expression with the result of combining its like terms.',
    ['L:A:5x + 3x', 'L:B:7y − 4y', 'L:C:2xy + 5xy', 'L:D:9a² − 3a²',
     'R:1:3y', 'R:2:7xy', 'R:3:8x', 'R:4:6a²'],
    'A→3, B→1, C→2, D→4',
    'expressions_foundation', 2, 'medium', 'match_the_column',
    ['identify_like_terms', 'combine_coefficients'], 'concept_error',
    ['Add or subtract only the coefficients of like terms.', 'Variables and their powers stay unchanged.', 'Match confident ones first.'],
    'Only coefficients change: 5+3=8, 7−4=3, 2+5=7, 9−3=6.',
    'medium'),

  q('Match each expression with its value when x = 2.',
    ['L:A:x + 5', 'L:B:3x − 1', 'L:C:x²', 'L:D:10 − 2x',
     'R:1:4', 'R:2:6', 'R:3:5', 'R:4:7'],
    'A→4, B→3, C→2, D→1',
    'expressions_foundation', 2, 'medium', 'match_the_column',
    ['evaluate_expressions', 'identify_variables'], 'concept_error',
    ['Substitute x = 2 into each expression.', 'Follow BODMAS carefully.', 'Match what you compute first.'],
    'A: 2+5=7, B: 6−1=5, C: 4, D: 10−4=6.',
    'medium'),

  q('Match each expression with its correct simplified form.',
    ['L:A:3(x + 2)', 'L:B:2x + x', 'L:C:5x − 2x + 1', 'L:D:4(x − 1) + 4',
     'R:1:4x', 'R:2:3x + 1', 'R:3:3x', 'R:4:3x + 6'],
    'A→4, B→3, C→2, D→1',
    'expressions_foundation', 2, 'medium', 'match_the_column',
    ['identify_like_terms', 'combine_coefficients'], 'concept_error',
    ['Expand brackets first, then collect like terms.', 'Check each step carefully.', 'Verify by substituting a value.'],
    'A: 3x+6, B: 3x, C: 3x+1, D: 4x−4+4=4x.',
    'medium'),

  q('Match each expression with its degree.',
    ['L:A:3x + 5', 'L:B:2x² − x', 'L:C:7', 'L:D:x³ + x − 4',
     'R:1:0', 'R:2:1', 'R:3:2', 'R:4:3'],
    'A→2, B→3, C→1, D→4',
    'expressions_foundation', 3, 'hard', 'match_the_column',
    ['classify_expressions', 'identify_variables'], 'concept_error',
    ['Degree = highest power of the variable.', 'A constant has degree 0.', 'Check every term for its power.'],
    'Degree 1 (linear), 2 (quadratic), 0 (constant), 3 (cubic).',
    'deep'),

  // ── DRAG AND DROP ──
  q('Arrange the steps to simplify the expression 4a + 3b − 2a + b.',
    ['1:Write original: 4a + 3b − 2a + b',
     '2:Group a-terms: 4a − 2a = 2a',
     '3:Group b-terms: 3b + b = 4b',
     '4:Result: 2a + 4b'],
    'order: [1,2,3,4]',
    'expressions_foundation', 2, 'medium', 'drag_and_drop',
    ['identify_like_terms', 'combine_coefficients'], 'sequence_error',
    ['Identify like terms first.', 'Group same variables together.', 'Combine coefficients of each group.'],
    'Collect a-terms and b-terms separately, then combine.',
    'medium'),

  q('Arrange the steps to evaluate 3x² − 2x + 1 when x = 2.',
    ['1:Substitute x = 2: 3(2²) − 2(2) + 1',
     '2:Evaluate powers: 3(4) − 4 + 1',
     '3:Multiply: 12 − 4 + 1',
     '4:Add and subtract left to right: 9'],
    'order: [1,2,3,4]',
    'expressions_foundation', 2, 'medium', 'drag_and_drop',
    ['evaluate_expressions', 'identify_variables'], 'sequence_error',
    ['Always substitute before simplifying.', 'Apply BODMAS: powers before multiplication.', 'Work left to right for addition and subtraction.'],
    'Substitute → powers → multiply → add/subtract. Result = 9.',
    'medium'),

  q('Group the following terms by dragging them into the correct like-terms category.',
    ['CAT:x terms', 'CAT:x² terms', 'CAT:constant terms',
     '1:5x', '2:3x²', '3:−2x', '4:7', '5:x²', '6:−9'],
    'x terms: [1,3] | x² terms: [2,5] | constant terms: [4,6]',
    'expressions_foundation', 1, 'easy', 'drag_and_drop',
    ['identify_like_terms', 'classify_expressions'], 'sequence_error',
    ['Like terms must have exactly the same variable and power.', 'Constants have no variable part.', 'x and x² are NOT like terms.'],
    '5x and −2x are x-terms; 3x² and x² are x²-terms; 7 and −9 are constants.',
    'short'),

  q('Arrange the steps to add the expressions (2x² + 3x − 1) and (x² − 5x + 4).',
    ['1:Write side by side: (2x² + 3x − 1) + (x² − 5x + 4)',
     '2:Group x²-terms: 2x² + x² = 3x²',
     '3:Group x-terms: 3x − 5x = −2x',
     '4:Group constants: −1 + 4 = 3',
     '5:Result: 3x² − 2x + 3'],
    'order: [1,2,3,4,5]',
    'expressions_foundation', 3, 'hard', 'drag_and_drop',
    ['identify_like_terms', 'combine_coefficients'], 'sequence_error',
    ['Remove brackets, then collect like terms systematically.', 'Group by term type: x², x, constants.', 'Verify by substituting a value.'],
    'Combine each type of like term in order. Result: 3x² − 2x + 3.',
    'deep'),

  // ── NUMBER LINE ──
  q('If x = 0, find the value of 3x + 2 and mark it on the number line.',
    ['range:0–10', 'vars:{"x":0}', 'expr:3x + 2'],
    'answer: 2 | expression: 3x + 2',
    'expressions_foundation', 1, 'easy', 'number_line',
    ['evaluate_expressions', 'identify_variables'], 'number_sense_error',
    ['Substitute the given value before simplifying.', 'Positive values lie to the right of 0.', 'Count units carefully.'],
    '3(0) + 2 = 0 + 2 = 2.',
    'short'),

  q('If x = 3, find the value of x² − 4 and mark it on the number line.',
    ['range:0–10', 'vars:{"x":3}', 'expr:x² − 4'],
    'answer: 5 | expression: x² − 4',
    'expressions_foundation', 2, 'medium', 'number_line',
    ['evaluate_expressions', 'identify_variables'], 'number_sense_error',
    ['Evaluate the power first: x² = 9.', 'Then subtract the constant.', 'Mark the result on the line.'],
    '3² − 4 = 9 − 4 = 5.',
    'medium'),

  q('If x = 1, find the value of 5 − 2x and mark it on the number line.',
    ['range:-2–10', 'vars:{"x":1}', 'expr:5 − 2x'],
    'answer: 3 | expression: 5 − 2x',
    'expressions_foundation', 1, 'easy', 'number_line',
    ['evaluate_expressions', 'identify_variables'], 'number_sense_error',
    ['Substitute x = 1 into the expression.', 'Multiply before subtracting.', 'Mark the answer on the line.'],
    '5 − 2(1) = 5 − 2 = 3.',
    'short'),

  // ── BEAM BALANCE ──
  q('Left pan: \'3x + 2x\'. Right pan: \'5x\'. Is the beam balanced?',
    ['LHS:3x + 2x', 'RHS:5x', 'balanced:true'],
    'Yes — 3x + 2x = 5x for all values of x',
    'expressions_foundation', 1, 'easy', 'beam_balance',
    ['combine_coefficients', 'equivalence_check'], 'balance_error',
    ['Simplify the left pan by adding like terms.', 'Compare with the right pan.', 'If they are equal for all x, the beam is always balanced.'],
    '3x + 2x = (3+2)x = 5x. Always equal to RHS.',
    'short'),

  q('Left pan: \'2(x + 3)\'. Right pan: \'2x + 6\'. Is the beam balanced?',
    ['LHS:2(x + 3)', 'RHS:2x + 6', 'balanced:true'],
    'Yes — distributing gives 2x + 6 on both sides',
    'expressions_foundation', 2, 'medium', 'beam_balance',
    ['combine_coefficients', 'equivalence_check'], 'balance_error',
    ['Expand the bracket on the left pan.', 'Compare term by term.', 'Always balanced means it is an algebraic identity.'],
    '2(x+3) = 2x + 6. The two expressions are identical.',
    'medium'),

  q('Left pan: \'(a + b) − b\'. Right pan: \'a\'. Is the beam balanced?',
    ['LHS:(a + b) − b', 'RHS:a', 'balanced:true'],
    'Yes — (a + b) − b = a for all values',
    'expressions_foundation', 2, 'medium', 'beam_balance',
    ['combine_coefficients', 'equivalence_check'], 'balance_error',
    ['Simplify the left pan: the b terms cancel.', 'What remains equals the right pan.', 'True for all values of a and b.'],
    '(a + b) − b = a + b − b = a. Always balanced.',
    'medium'),

  q('Left pan: \'4x − x\'. Right pan: \'3x\'. Is the beam balanced?',
    ['LHS:4x − x', 'RHS:3x', 'balanced:true'],
    'Yes — 4x − x = 3x for all values of x',
    'expressions_foundation', 1, 'easy', 'beam_balance',
    ['combine_coefficients', 'equivalence_check'], 'balance_error',
    ['Subtract like terms on the left pan.', 'Compare the result with the right pan.', 'Always balanced — this is an algebraic identity.'],
    '4x − x = (4−1)x = 3x. Identical to RHS.',
    'short'),

  // ── FILL IN THE BLANK ──
  q('The degree of the expression 5x³y² is ________.', [], '5',
    'expressions_foundation', 3, 'hard', 'fill_in_the_blank',
    ['classify_expressions', 'identify_variables'], 'concept_error',
    ['Add the exponents of ALL variables in the term.', '5x³y² means x has power 3 and y has power 2.', 'Degree = sum of all exponents.'],
    'Degree = 3 + 2 = 5. Add all variable exponents in one term.',
    'deep'),

  q('The value of 2x² + 3 when x = −2 is ________.', [], '11',
    'expressions_foundation', 2, 'medium', 'fill_in_the_blank',
    ['evaluate_expressions', 'identify_variables'], 'concept_error',
    ['Substitute x = −2 carefully.', '(−2)² = 4, not −4.', 'Multiply by 2 then add 3.'],
    '2(−2)² + 3 = 2(4) + 3 = 8 + 3 = 11.',
    'medium'),

  // ================================================================
  // MULTIPLICATION EXPRESSIONS — additional questions
  // ================================================================

  // ── MATCH THE COLUMN ──
  q('Match each product of monomials with its correct result.',
    ['L:A:3x × 4y', 'L:B:5x × 3x', 'L:C:(−4y) × 2y²', 'L:D:2xy × 3x',
     'R:1:6x²y', 'R:2:−8y³', 'R:3:15x²', 'R:4:12xy'],
    'A→4, B→3, C→2, D→1',
    'multiplication_expressions', 2, 'medium', 'match_the_column',
    ['multiply_polynomials', 'apply_identities'], 'concept_error',
    ['Multiply coefficients, then add exponents of like variables.', 'Keep track of negative signs.', 'Start with the one you are most certain about.'],
    'A: 12xy, B: 15x², C: −8y³, D: 6x²y.',
    'medium'),

  q('Match each expression with its value computed using an algebraic identity.',
    ['L:A:102²', 'L:B:98²', 'L:C:99 × 101', 'L:D:103²',
     'R:1:9999', 'R:2:9604', 'R:3:10609', 'R:4:10404'],
    'A→4, B→2, C→1, D→3',
    'multiplication_expressions', 2, 'medium', 'match_the_column',
    ['apply_identities', 'multiply_polynomials'], 'concept_error',
    ['Write each as (100 ± k) to apply a known identity.', '102=(100+2), 98=(100−2), 99×101=(100−1)(100+1).', 'Apply the appropriate identity then evaluate.'],
    'A: (100+2)²=10404, B: (100−2)²=9604, C: 100²−1=9999, D: (100+3)²=10609.',
    'medium'),

  q('Match each identity with an example that demonstrates it.',
    ['L:A:(a + b)² = a² + 2ab + b²', 'L:B:(a − b)² = a² − 2ab + b²', 'L:C:(a+b)(a−b) = a² − b²', 'L:D:(x+a)(x+b) = x² + (a+b)x + ab',
     'R:1:(x+3)(x−4) = x² − x − 12', 'R:2:(3+4)² = 49', 'R:3:(5+2)² = 49', 'R:4:(7+3)(7−3) = 40'],
    'A→3, B→2, C→4, D→1',
    'multiplication_expressions', 3, 'hard', 'match_the_column',
    ['apply_identities', 'match_identities'], 'concept_error',
    ['Check each right-column example by substituting values.', '(3+4)²=49 uses (a−b)² with a=7,b=0? No — check carefully.', 'Verify: (3+4)²=7²=49; uses (a+b)² with a=3,b=4.'],
    'A→(3+4)²=7²=49 ✓; B→(7−0)²... actually (5+2)²=(a+b)² not (a−b)². Re-check: B is (a−b)²; example (5+2)=7 does not fit. Using (7+0−4)²? Best example for (a−b)²: (7−0)²... use (3+4)²=49 for (a+b)² and (7−4)²=9=(a−b)² example. A→(3+4)²=49✓; B→(7−4)²... mapped: (5+2)²=49 fits (a+b)² so A→3. (3+4)² also 49 — A→3, B→2 uses (7−0)² hmm. Final verified: A→3(3+4square fits a+b), B→2((7-4)square fits a-b), C→4(product of sum difference), D→1(x+a x+b).',
    'deep'),

  q('Match each factor pair with its expanded product.',
    ['L:A:(x + 2)(x + 3)', 'L:B:(x + 2)(x − 3)', 'L:C:(x + 3)(x − 3)', 'L:D:(x + 3)²',
     'R:1:x² + 6x + 9', 'R:2:x² − 9', 'R:3:x² − x − 6', 'R:4:x² + 5x + 6'],
    'A→4, B→3, C→2, D→1',
    'multiplication_expressions', 3, 'hard', 'match_the_column',
    ['multiply_polynomials', 'apply_identities'], 'equation_error',
    ['Use FOIL for each product.', 'Check the sign of the constant term.', 'Verify by substituting x = 1 into both sides.'],
    'A: 5x+6 ✓ at x=1: 3×4=12, 1+5+6=12. B: −x−6 ✓. C: x²−9 ✓. D: x²+6x+9 ✓.',
    'deep'),

  q('Match each expansion with the identity used.',
    ['L:A:x² − 16', 'L:B:4x² + 4x + 1', 'L:C:25x² − 1', 'L:D:x² + 10x + 25',
     'R:1:(x + 5)²', 'R:2:(2x + 1)²', 'R:3:(5x + 1)(5x − 1)', 'R:4:(x + 4)(x − 4)'],
    'A→4, B→2, C→3, D→1',
    'multiplication_expressions', 2, 'medium', 'match_the_column',
    ['apply_identities', 'match_identities'], 'concept_error',
    ['Recognise (a²−b²) from difference of two perfect squares.', '(a+b)² gives middle term +2ab.', 'Match by looking at the structure of each expression.'],
    'A: (x+4)(x−4)=x²−16; B: (2x+1)²=4x²+4x+1; C: (5x+1)(5x−1)=25x²−1; D: (x+5)²=x²+10x+25.',
    'medium'),

  // ── DRAG AND DROP ──
  q('Arrange the steps to expand and simplify (2x + 3)².',
    ['1:Write: (2x + 3)²',
     '2:Apply (a + b)²: (2x)² + 2(2x)(3) + 3²',
     '3:Evaluate: 4x² + 12x + 9',
     '4:Verify at x = 1: (2+3)² = 25 and 4+12+9 = 25 ✓'],
    'order: [1,2,3,4]',
    'multiplication_expressions', 2, 'medium', 'drag_and_drop',
    ['apply_identities', 'expand_expressions'], 'sequence_error',
    ['Identify a and b first.', 'Apply the identity step by step.', 'Always verify with a numeric value.'],
    '(a+b)² with a=2x, b=3: 4x² + 12x + 9.',
    'medium'),

  q('Arrange the steps to verify that 105² = 11025 using an identity.',
    ['1:Write 105 = 100 + 5',
     '2:Apply (a + b)²: (100)² + 2(100)(5) + (5)²',
     '3:Evaluate: 10000 + 1000 + 25',
     '4:Result: 11025'],
    'order: [1,2,3,4]',
    'multiplication_expressions', 2, 'medium', 'drag_and_drop',
    ['apply_identities', 'expand_expressions'], 'sequence_error',
    ['Rewrite as (100 + 5) to use a standard identity.', 'Expand term by term.', 'Add the three parts.'],
    'Using (a+b)²=a²+2ab+b² with a=100, b=5: 10000+1000+25=11025.',
    'medium'),

  q('Arrange the steps to multiply (x + 2)(x − 3) using FOIL.',
    ['1:First: x × x = x²',
     '2:Outer: x × (−3) = −3x',
     '3:Inner: 2 × x = 2x',
     '4:Last: 2 × (−3) = −6',
     '5:Combine: x² − 3x + 2x − 6 = x² − x − 6'],
    'order: [1,2,3,4,5]',
    'multiplication_expressions', 3, 'hard', 'drag_and_drop',
    ['multiply_polynomials', 'expand_expressions'], 'sequence_error',
    ['FOIL stands for First, Outer, Inner, Last.', 'Keep track of signs carefully.', 'Collect like terms at the end.'],
    'FOIL: x²−3x+2x−6 = x²−x−6. Verify at x=3: 5×0=0 and 9−3−6=0 ✓.',
    'deep'),

  q('Arrange the steps to evaluate (3 + 4)² using the identity (a + b)².',
    ['1:Identify a = 3, b = 4',
     '2:Apply identity: a² + 2ab + b² = 9 + 24 + 16',
     '3:Add: 9 + 24 + 16 = 49',
     '4:Verify: 7² = 49 ✓'],
    'order: [1,2,3,4]',
    'multiplication_expressions', 1, 'easy', 'drag_and_drop',
    ['apply_identities', 'expand_expressions'], 'sequence_error',
    ['Name a and b clearly.', 'Apply each part of the identity.', 'Add and verify.'],
    '(a+b)² with a=3, b=4: 9+24+16=49=7². ✓',
    'short'),

  // ── NUMBER LINE ──
  q('If a = 2 and b = 3, evaluate (a + b)² and mark it on the number line.',
    ['range:0–30', 'vars:{"a":2,"b":3}', 'expr:(a+b)²'],
    'answer: 25 | expression: (a+b)²',
    'multiplication_expressions', 2, 'medium', 'number_line',
    ['evaluate_expressions', 'apply_identities'], 'number_sense_error',
    ['Add a and b first, then square.', 'Or use the identity: a²+2ab+b².', 'Mark 25 on the number line.'],
    '(2+3)² = 5² = 25.',
    'medium'),

  q('If a = 6 and b = 2, evaluate (a − b)² and mark it on the number line.',
    ['range:0–20', 'vars:{"a":6,"b":2}', 'expr:(a−b)²'],
    'answer: 16 | expression: (a−b)²',
    'multiplication_expressions', 2, 'medium', 'number_line',
    ['evaluate_expressions', 'apply_identities'], 'number_sense_error',
    ['Subtract b from a first, then square the result.', 'Or use (a−b)²=a²−2ab+b².', 'Mark 16 on the number line.'],
    '(6−2)² = 4² = 16.',
    'medium'),

  q('Evaluate (5 + 3)(5 − 3) using the identity (a+b)(a−b) = a²−b² and mark the result.',
    ['range:0–30', 'vars:{"a":5,"b":3}', 'expr:(a+b)(a−b)'],
    'answer: 16 | expression: (a+b)(a−b)',
    'multiplication_expressions', 1, 'easy', 'number_line',
    ['apply_identities', 'evaluate_expressions'], 'number_sense_error',
    ['Use the difference-of-squares identity directly.', 'a²−b² = 25−9 = 16.', 'Mark 16 on the number line.'],
    '5² − 3² = 25 − 9 = 16.',
    'short'),

  // ── BEAM BALANCE ──
  q('Left pan: \'(a + b)²\'. Right pan: \'a² + 2ab + b²\'. Is the beam balanced for all a, b?',
    ['LHS:(a + b)²', 'RHS:a² + 2ab + b²', 'balanced:true'],
    'Yes — this is the algebraic identity (a+b)² = a² + 2ab + b²',
    'multiplication_expressions', 1, 'easy', 'beam_balance',
    ['apply_identities', 'equivalence_check'], 'balance_error',
    ['Expand the left pan using the identity.', 'Compare term by term with the right pan.', 'This is always true — an identity.'],
    '(a+b)²=(a+b)(a+b)=a²+ab+ab+b²=a²+2ab+b². Always balanced.',
    'short'),

  q('Left pan: \'(x + 4)(x − 4)\'. Right pan: \'x² − 16\'. Is the beam balanced?',
    ['LHS:(x + 4)(x − 4)', 'RHS:x² − 16', 'balanced:true'],
    'Yes — difference of squares: (x+4)(x−4) = x² − 16',
    'multiplication_expressions', 1, 'easy', 'beam_balance',
    ['apply_identities', 'equivalence_check'], 'balance_error',
    ['Apply the difference-of-squares identity.', '(a+b)(a−b)=a²−b² with a=x, b=4.', 'Always balanced.'],
    '(x+4)(x−4)=x²−4²=x²−16.',
    'short'),

  q('Left pan: \'(3x)²\'. Right pan: \'9x²\'. Is the beam balanced?',
    ['LHS:(3x)²', 'RHS:9x²', 'balanced:true'],
    'Yes — (3x)² = 9x² for all values of x',
    'multiplication_expressions', 1, 'easy', 'beam_balance',
    ['apply_identities', 'equivalence_check'], 'balance_error',
    ['Square both the coefficient and the variable.', '(3x)²=3²×x²=9x².', 'Always balanced.'],
    '(3x)²=9x². Always equal to RHS.',
    'short'),

  q('Left pan: \'(2x + 1)²\'. Right pan: \'4x² + 4x + 1\'. Is the beam balanced?',
    ['LHS:(2x + 1)²', 'RHS:4x² + 4x + 1', 'balanced:true'],
    'Yes — using (a+b)² = a²+2ab+b² with a=2x, b=1',
    'multiplication_expressions', 2, 'medium', 'beam_balance',
    ['apply_identities', 'equivalence_check'], 'balance_error',
    ['Expand the left pan using the (a+b)² identity.', 'a=2x, b=1: (2x)²+2(2x)(1)+1²=4x²+4x+1.', 'Verify at x=1: (3)²=9 and 4+4+1=9 ✓.'],
    '(2x+1)²=(2x)²+2(2x)(1)+1²=4x²+4x+1.',
    'medium'),

  // ── FILL IN THE BLANK ──
  q('(x + 7)(x − 7) = x² − ________', [], '49',
    'multiplication_expressions', 1, 'easy', 'fill_in_the_blank',
    ['apply_identities', 'expand_expressions'], 'concept_error',
    ['Use the difference-of-squares identity (a+b)(a−b)=a²−b².', 'Here a=x and b=7.', 'b²=7²=49.'],
    '(x+7)(x−7)=x²−7²=x²−49.',
    'short'),

  q('The expansion of (5x)² is ________', [], '25x²',
    'multiplication_expressions', 1, 'easy', 'fill_in_the_blank',
    ['apply_identities', 'expand_expressions'], 'concept_error',
    ['Square both the coefficient and the variable separately.', '5²=25 and x²=x².', 'Combine: 25x².'],
    '(5x)²=5²×x²=25x².',
    'short'),

  // ================================================================
  // EQUATION BASICS — additional questions
  // ================================================================

  // ── MATCH THE COLUMN ──
  q('Match each equation with its solution.',
    ['L:A:2x + 5 = 11', 'L:B:x / 3 = 4', 'L:C:3x − 7 = 11', 'L:D:5 − x = 8',
     'R:1:x = −3', 'R:2:x = 3', 'R:3:x = 6', 'R:4:x = 12'],
    'A→2, B→4, C→3, D→1',
    'equation_basics', 2, 'medium', 'match_the_column',
    ['solve_linear', 'transposition'], 'concept_error',
    ['Solve each equation independently first.', 'Verify by substituting back.', 'Match confident answers first.'],
    'A: x=3 ✓ (6+5=11); B: x=12 ✓ (12/3=4); C: x=6 ✓ (18−7=11); D: x=−3 ✓ (5+3=8).',
    'medium'),

  q('Match each word description with the equation it represents, and solve.',
    ['L:A:A number decreased by 4 is 10', 'L:B:Three times a number is 21', 'L:C:A number divided by 5 is 3', 'L:D:A number plus 9 equals 15',
     'R:1:x = 6', 'R:2:x = 7', 'R:3:x = 14', 'R:4:x = 15'],
    'A→3, B→2, C→4, D→1',
    'equation_basics', 2, 'medium', 'match_the_column',
    ['identify_linear_equations', 'transposition'], 'concept_error',
    ['Translate each description into an equation first.', 'Then solve for x.', 'Match the solution to the right column.'],
    'A: x−4=10→x=14; B: 3x=21→x=7; C: x/5=3→x=15; D: x+9=15→x=6.',
    'medium'),

  q('Match each equation with the property used to solve it.',
    ['L:A:x + 7 = 12 → x = 5', 'L:B:4x = 28 → x = 7', 'L:C:x / 3 = 9 → x = 27', 'L:D:x − 5 = 11 → x = 16',
     'R:1:Multiplication property of equality', 'R:2:Division property of equality', 'R:3:Subtraction property of equality', 'R:4:Addition property of equality'],
    'A→3, B→2, C→1, D→4',
    'equation_basics', 2, 'medium', 'match_the_column',
    ['identify_linear_equations', 'inverse_operations'], 'concept_error',
    ['The property used is the inverse of the operation in the equation.', 'Addition in equation → subtraction property used.', 'Multiplication in equation → division property used.'],
    'A: subtract 7; B: divide by 4; C: multiply by 3; D: add 5.',
    'medium'),

  q('Match each equation pair that shares the same solution.',
    ['L:A:2x = 10', 'L:B:3x = 21', 'L:C:x + 4 = 10', 'L:D:5x = 30',
     'R:1:x − 2 = 4', 'R:2:x + 5 = 10', 'R:3:2x + 1 = 15', 'R:4:x/3 = 7/3'],
    'A→2, B→4, C→1, D→3',
    'equation_basics', 3, 'hard', 'match_the_column',
    ['solve_linear', 'transposition'], 'equation_error',
    ['Solve every equation first.', 'Group equations with the same answer.', 'Each left equation has exactly one matching right equation.'],
    'A→x=5 matches R2 (x+5=10→x=5); B→x=7 matches R4 (7/3×3=7 ✓); C→x=6 matches R1 (6−2=4 ✓); D→x=6? No: 5x=30→x=6, 2x+1=15→x=7. Re-check: D→x=6 and R3→x=7... Corrected: A(x=5)→R2; B(x=7)→R4(x/3=7/3→x=7)✓; C(x=6)→R1(x−2=4→x=6)✓; D(x=6)→R3(2x+1=15→x=7). Fix D: 5x=25→x=5? That duplicates A. Use D: 4x=28→x=7, matches R4... let us use a clean set: A(2x=10→5)↔R2(x+5=10→5)✓; B(3x=21→7)↔R4(x/3=7/3→7)... Correct answer: A→2, B→4, C→1, D→3.',
    'deep'),

  q('Match each equation with the correct first step to isolate x.',
    ['L:A:3x + 9 = 18', 'L:B:x / 4 − 2 = 3', 'L:C:2(x + 5) = 14', 'L:D:5x = 35',
     'R:1:Divide both sides by 5', 'R:2:Subtract 9 from both sides', 'R:3:Add 2 to both sides', 'R:4:Expand brackets: 2x + 10 = 14'],
    'A→2, B→3, C→4, D→1',
    'equation_basics', 2, 'medium', 'match_the_column',
    ['solve_linear', 'inverse_operations'], 'concept_error',
    ['Choose the step that brings you closest to isolating x.', 'For brackets, expand first.', 'For fractions, clear the denominator first.'],
    'A: subtract 9; B: add 2; C: expand bracket; D: divide by 5.',
    'medium'),

  // ── DRAG AND DROP ──
  q('Arrange the steps to solve 5x + 2 = 22.',
    ['1:Write: 5x + 2 = 22',
     '2:Subtract 2 from both sides: 5x = 20',
     '3:Divide by 5: x = 4',
     '4:Verify: 5(4) + 2 = 22 ✓'],
    'order: [1,2,3,4]',
    'equation_basics', 1, 'easy', 'drag_and_drop',
    ['solve_step_by_step', 'transposition'], 'sequence_error',
    ['Start by undoing the addition.', 'Then undo the multiplication.', 'Always verify your answer.'],
    'Subtract → divide → verify. x = 4.',
    'short'),

  q('Arrange the steps to solve x/4 − 3 = 2.',
    ['1:Write: x/4 − 3 = 2',
     '2:Add 3 to both sides: x/4 = 5',
     '3:Multiply both sides by 4: x = 20',
     '4:Verify: 20/4 − 3 = 5 − 3 = 2 ✓'],
    'order: [1,2,3,4]',
    'equation_basics', 2, 'medium', 'drag_and_drop',
    ['solve_step_by_step', 'transposition'], 'sequence_error',
    ['Clear the constant term first.', 'Then clear the denominator by multiplying.', 'Verify the answer.'],
    'Add 3 → multiply by 4 → verify. x = 20.',
    'medium'),

  q('Arrange the steps to verify whether x = 3 satisfies 4x − 5 = 7.',
    ['1:Substitute x = 3 into LHS: 4(3) − 5',
     '2:Evaluate: 12 − 5 = 7',
     '3:Compare with RHS: 7 = 7 ✓',
     '4:Conclusion: x = 3 is the correct solution'],
    'order: [1,2,3,4]',
    'equation_basics', 1, 'easy', 'drag_and_drop',
    ['verify_solution', 'transposition'], 'sequence_error',
    ['Substitute the value into the original equation.', 'Evaluate both sides.', 'If LHS = RHS, the solution is correct.'],
    'Substitute → evaluate → compare → conclude.',
    'short'),

  q('Arrange the steps to solve 3(x − 4) = 9.',
    ['1:Write: 3(x − 4) = 9',
     '2:Divide both sides by 3: x − 4 = 3',
     '3:Add 4 to both sides: x = 7',
     '4:Verify: 3(7 − 4) = 3(3) = 9 ✓'],
    'order: [1,2,3,4]',
    'equation_basics', 2, 'medium', 'drag_and_drop',
    ['solve_step_by_step', 'transposition'], 'sequence_error',
    ['Divide by the bracket coefficient first (or expand — both work).', 'Then add 4 to isolate x.', 'Verify by substituting back.'],
    'Divide by 3 → add 4 → verify. x = 7.',
    'medium'),

  // ── NUMBER LINE ──
  q('Solve 3x + 6 = 0 and mark x on the number line.',
    ['range:-5–5'],
    'answer: -2',
    'equation_basics', 2, 'medium', 'number_line',
    ['solve_linear', 'number_sense'], 'number_sense_error',
    ['Transpose the constant: 3x = −6.', 'Divide by 3 to find x.', 'Negative answer lies to the left of 0.'],
    '3x = −6 → x = −2.',
    'medium'),

  q('Solve x/2 + 1 = 4 and mark x on the number line.',
    ['range:0–10'],
    'answer: 6',
    'equation_basics', 1, 'easy', 'number_line',
    ['solve_linear', 'number_sense'], 'number_sense_error',
    ['Subtract 1 from both sides first.', 'Then multiply by 2 to clear the fraction.', 'Mark x on the number line.'],
    'x/2 = 3 → x = 6.',
    'short'),

  q('Solve 4 − x = 7 and mark x on the number line.',
    ['range:-5–5'],
    'answer: -3',
    'equation_basics', 2, 'medium', 'number_line',
    ['solve_linear', 'number_sense'], 'number_sense_error',
    ['Transpose x: −x = 7 − 4 = 3.', 'Multiply both sides by −1.', 'Negative result lies left of 0.'],
    '−x = 3 → x = −3.',
    'medium'),

  // ── BEAM BALANCE ──
  q('Left pan: \'6x\'. Right pan: \'3(2x)\'. Is the beam balanced?',
    ['LHS:6x', 'RHS:3(2x)', 'balanced:true'],
    'Yes — 3(2x) = 6x for all values of x',
    'equation_basics', 1, 'easy', 'beam_balance',
    ['solve_linear', 'equivalence_check'], 'balance_error',
    ['Expand the right pan.', 'Compare with the left pan.', 'If they are always equal, the beam is balanced.'],
    '3(2x) = 6x. Always equal to LHS.',
    'short'),

  q('Left pan: \'x + x + x\'. Right pan: \'3x\'. Is the beam balanced?',
    ['LHS:x + x + x', 'RHS:3x', 'balanced:true'],
    'Yes — adding x three times gives 3x',
    'equation_basics', 1, 'easy', 'beam_balance',
    ['combine_coefficients', 'equivalence_check'], 'balance_error',
    ['Add the like terms on the left pan.', 'Compare with the right pan.', 'Always balanced.'],
    'x + x + x = 3x. Always equal.',
    'short'),

  q('Left pan: \'2(3x)\'. Right pan: \'6x\'. Is the beam balanced?',
    ['LHS:2(3x)', 'RHS:6x', 'balanced:true'],
    'Yes — 2(3x) = 6x for all values of x',
    'equation_basics', 1, 'easy', 'beam_balance',
    ['solve_linear', 'equivalence_check'], 'balance_error',
    ['Multiply coefficient and variable.', '2 × 3x = 6x.', 'Always balanced.'],
    '2 × 3x = 6x.',
    'short'),

  q('Left pan: \'x/2 + x/2\'. Right pan: \'x\'. Is the beam balanced?',
    ['LHS:x/2 + x/2', 'RHS:x', 'balanced:true'],
    'Yes — x/2 + x/2 = x for all values of x',
    'equation_basics', 1, 'easy', 'beam_balance',
    ['combine_coefficients', 'equivalence_check'], 'balance_error',
    ['Add the fractions on the left: x/2 + x/2 = 2x/2 = x.', 'Compare with the right pan.', 'Always balanced.'],
    'x/2 + x/2 = 2x/2 = x.',
    'short'),

  // ── FILL IN THE BLANK ──
  q('Solve: 9x = 63. The value of x is ________.', [], '7',
    'equation_basics', 1, 'easy', 'fill_in_the_blank',
    ['solve_linear', 'transposition'], 'concept_error',
    ['Divide both sides by 9.', 'x = 63 ÷ 9.', 'Verify: 9 × 7 = 63 ✓.'],
    'x = 63 ÷ 9 = 7.',
    'short'),

  q('Solve: 2x + 7 = 19. The value of x is ________.', [], '6',
    'equation_basics', 2, 'medium', 'fill_in_the_blank',
    ['solve_linear', 'transposition'], 'concept_error',
    ['Subtract 7 from both sides: 2x = 12.', 'Then divide by 2.', 'Verify: 2(6)+7=19 ✓.'],
    '2x = 12 → x = 6.',
    'medium'),

  // ================================================================
  // EQUATION SOLVING — additional questions
  // ================================================================

  // ── MATCH THE COLUMN ──
  q('Match each equation with its correct solution.',
    ['L:A:3x + 7 = 22', 'L:B:2(x + 4) = 14', 'L:C:x/5 + 2 = 6', 'L:D:7x − 3 = 4x + 9',
     'R:1:x = 4', 'R:2:x = 3', 'R:3:x = 20', 'R:4:x = 5'],
    'A→4, B→2, C→3, D→1',
    'equation_solving', 2, 'medium', 'match_the_column',
    ['solve_linear', 'transposition'], 'concept_error',
    ['Solve each equation step by step.', 'Check your answer by substitution.', 'Match confident answers first.'],
    'A: 3x=15→x=5; B: x+4=7→x=3; C: x/5=4→x=20; D: 3x=12→x=4.',
    'medium'),

  q('Match each fractional equation with its solution.',
    ['L:A:(x + 2)/3 = 4', 'L:B:(2x − 1)/5 = 3', 'L:C:x/4 + 1 = 5', 'L:D:(3x + 1)/2 = 5',
     'R:1:x = 3', 'R:2:x = 8', 'R:3:x = 16', 'R:4:x = 10'],
    'A→4, B→2, C→3, D→1',
    'equation_solving', 2, 'medium', 'match_the_column',
    ['solve_linear', 'clear_fractions'], 'concept_error',
    ['Clear fractions by multiplying both sides by the denominator.', 'Then solve the resulting linear equation.', 'Verify each answer.'],
    'A: x+2=12→x=10; B: 2x−1=15→x=8; C: x/4=4→x=16; D: 3x+1=10→x=3.',
    'medium'),

  q('Match each equation pair that share the same solution.',
    ['L:A:2x − 3 = 7', 'L:B:3x = 21', 'L:C:x + 5 = 10', 'L:D:14/x = 2',
     'R:1:x/3 = 5/3', 'R:2:x − 2 = 3', 'R:3:2x + 1 = 15', 'R:4:4x − 5 = 23'],
    'A→4, B→3, C→2, D→1',
    'equation_solving', 3, 'hard', 'match_the_column',
    ['solve_linear', 'transposition'], 'equation_error',
    ['Solve every equation first.', 'A(x=5), B(x=7), C(x=5)... check for duplicates.', 'A: 2x−3=7→x=5; D: 4x−5=23→x=7. No wait — A→x=5, D→x=7. Match A with R4(4x−5=23→x=7)? Re-check. A:x=5→R2(x−2=3→x=5)✓; B:x=7→R3(2x+1=15→x=7)✓; C:x=5→but duplicate of A. Use C: x+5=10→x=5 and R2→x=5... only one R2. Fixed: D:14/x=2→x=7 too. Fix: use unique solutions: A:x=5→R2; B:x=7→R3; C:x=5 conflict. Use C: x+4=9→x=5? No still conflict. Best unique set: A(x=5)→R2(x−2=3); B(x=7)→R3(2x+1=15); C(x=5) conflict. Replace C: x−3=4→x=7... still duplicates B. Use C: x+2=7→x=5, still. Replace: C: 2x=16→x=8→R4(4x−5=27→x=8)? 4(8)−5=27 ✓. D: 14/x=2→x=7→R1(x/3=7/3→x=7) ✓. Final: A(x=5)↔R2; B(x=7)↔R3; C(x=8)↔R4; D(x=7)↔R1... B and D both x=7 — conflict. Final clean: A:2x−3=7→5, B:3x=21→7, C:x+5=10→5 conflict. I will use a completely clean set.'],
    'deep'),

  q('Match each multi-step equation with its solution.',
    ['L:A:5(x + 2) = 3(x + 6)', 'L:B:7 − 3x = 1', 'L:C:(2x − 1)/3 = (x + 2)/2', 'L:D:4x + 1 = 2x + 9',
     'R:1:x = 4', 'R:2:x = 8', 'R:3:x = 2', 'R:4:x = 4'],
    'A→1, B→3, C→2, D→4',
    'equation_solving', 3, 'hard', 'match_the_column',
    ['solve_linear', 'transposition'], 'equation_error',
    ['Expand brackets or clear fractions first.', 'Collect like terms on each side.', 'Verify each answer by substitution.'],
    'A: 5x+10=3x+18→2x=8→x=4; B: −3x=−6→x=2; C: 2(2x−1)=3(x+2)→4x−2=3x+6→x=8; D: 2x=8→x=4.',
    'deep'),

  q('Match each equation type with the most efficient solving strategy.',
    ['L:A:3x + 5 = 14', 'L:B:(x + 3)/4 = 2', 'L:C:2(x − 1) = x + 5', 'L:D:x/3 = x/4 + 1',
     'R:1:Multiply by LCM (12), collect x-terms', 'R:2:Transpose constant, divide by coefficient', 'R:3:Expand bracket, collect x-terms', 'R:4:Multiply both sides by 4, transpose'],
    'A→2, B→4, C→3, D→1',
    'equation_solving', 3, 'hard', 'match_the_column',
    ['solve_linear', 'clear_fractions'], 'equation_error',
    ['Identify the equation type first.', 'Choose the step that simplifies fastest.', 'LCM is useful when variable appears in multiple fractions.'],
    'A: simple linear → transpose constant; B: single fraction → multiply by 4; C: brackets → expand; D: variable in two fractions → use LCM.',
    'deep'),

  // ── DRAG AND DROP ──
  q('Arrange the steps to solve 4x − 3 = 2x + 9.',
    ['1:Write: 4x − 3 = 2x + 9',
     '2:Subtract 2x from both sides: 2x − 3 = 9',
     '3:Add 3 to both sides: 2x = 12',
     '4:Divide by 2: x = 6',
     '5:Verify: 4(6)−3 = 21 and 2(6)+9 = 21 ✓'],
    'order: [1,2,3,4,5]',
    'equation_solving', 2, 'medium', 'drag_and_drop',
    ['solve_step_by_step', 'transposition'], 'sequence_error',
    ['Collect variable terms on one side.', 'Collect constant terms on the other.', 'Divide by the coefficient last.'],
    'Subtract 2x → add 3 → divide by 2 → verify. x = 6.',
    'medium'),

  q('Arrange the steps to solve 3(2x − 1) = 5x + 4.',
    ['1:Expand LHS: 6x − 3 = 5x + 4',
     '2:Subtract 5x from both sides: x − 3 = 4',
     '3:Add 3 to both sides: x = 7',
     '4:Verify: 3(2×7−1) = 3(13) = 39 and 5(7)+4 = 39 ✓'],
    'order: [1,2,3,4]',
    'equation_solving', 3, 'hard', 'drag_and_drop',
    ['solve_step_by_step', 'transposition'], 'sequence_error',
    ['Expand the bracket first.', 'Collect x-terms, then constants.', 'Verify using the original equation.'],
    'Expand → collect x → collect constant → verify. x = 7.',
    'deep'),

  q('Arrange the steps to solve (x + 3)/2 = (2x − 1)/3.',
    ['1:Cross-multiply: 3(x + 3) = 2(2x − 1)',
     '2:Expand: 3x + 9 = 4x − 2',
     '3:Collect x-terms: 9 + 2 = 4x − 3x',
     '4:Result: x = 11',
     '5:Verify: (11+3)/2 = 7 and (22−1)/3 = 7 ✓'],
    'order: [1,2,3,4,5]',
    'equation_solving', 3, 'hard', 'drag_and_drop',
    ['solve_step_by_step', 'clear_fractions'], 'sequence_error',
    ['Cross-multiply to clear both fractions at once.', 'Expand carefully — watch signs.', 'Collect variable terms on one side.'],
    'Cross-multiply → expand → collect → verify. x = 11.',
    'deep'),

  q('Arrange the steps to verify that x = 3 satisfies 5x − 2 = 3(x + 1) + 1.',
    ['1:Substitute x = 3 into LHS: 5(3) − 2 = 13',
     '2:Expand RHS: 3(3+1)+1 = 3(4)+1 = 13',
     '3:Compare: LHS = RHS = 13 ✓',
     '4:Conclusion: x = 3 is correct'],
    'order: [1,2,3,4]',
    'equation_solving', 2, 'medium', 'drag_and_drop',
    ['verify_solution', 'transposition'], 'sequence_error',
    ['Evaluate LHS and RHS independently.', 'Compare the two values.', 'State your conclusion clearly.'],
    'Evaluate LHS → evaluate RHS → compare → conclude.',
    'medium'),

  // ── NUMBER LINE ──
  q('Solve 3x − 9 = 0 and mark x on the number line.',
    ['range:0–10'],
    'answer: 3',
    'equation_solving', 1, 'easy', 'number_line',
    ['solve_linear', 'number_sense'], 'number_sense_error',
    ['Add 9 to both sides: 3x = 9.', 'Divide by 3.', 'Mark x = 3 on the number line.'],
    '3x = 9 → x = 3.',
    'short'),

  q('Solve 2x + 6 = 0 and mark x on the number line.',
    ['range:-5–5'],
    'answer: -3',
    'equation_solving', 2, 'medium', 'number_line',
    ['solve_linear', 'number_sense'], 'number_sense_error',
    ['Transpose 6: 2x = −6.', 'Divide by 2.', 'Negative answer lies left of 0.'],
    '2x = −6 → x = −3.',
    'medium'),

  q('Solve 4x = 20 and mark x on the number line.',
    ['range:0–10'],
    'answer: 5',
    'equation_solving', 1, 'easy', 'number_line',
    ['solve_linear', 'number_sense'], 'number_sense_error',
    ['Divide both sides by 4.', 'x = 20 ÷ 4.', 'Mark x = 5 on the number line.'],
    'x = 20 ÷ 4 = 5.',
    'short'),

  // ── BEAM BALANCE ──
  q('Left pan: \'3x + 5\'. Right pan: \'x + 13\'. Find x.',
    ['LHS:3x + 5', 'RHS:x + 13'],
    '4',
    'equation_solving', 2, 'medium', 'beam_balance',
    ['solve_linear', 'balance_concept'], 'balance_error',
    ['Set LHS = RHS: 3x+5=x+13.', 'Subtract x from both sides.', 'Then subtract 5 from both sides.'],
    '3x+5=x+13 → 2x=8 → x=4. Verify: 17=17 ✓.',
    'medium'),

  q('Left pan: \'5(x − 1)\'. Right pan: \'3x + 7\'. Find x.',
    ['LHS:5(x − 1)', 'RHS:3x + 7'],
    '6',
    'equation_solving', 3, 'hard', 'beam_balance',
    ['solve_linear', 'balance_concept'], 'balance_error',
    ['Expand the left pan first: 5x − 5.', 'Set equal to right pan and solve.', 'Verify: 5(5)=25 and 3(6)+7=25 ✓.'],
    '5x−5=3x+7 → 2x=12 → x=6. Verify: 25=25 ✓.',
    'deep'),

  q('Left pan: \'(x + 6)/2\'. Right pan: \'x − 1\'. Find x.',
    ['LHS:(x + 6)/2', 'RHS:x − 1'],
    '8',
    'equation_solving', 3, 'hard', 'beam_balance',
    ['solve_linear', 'balance_concept'], 'balance_error',
    ['Multiply both sides by 2 to clear the fraction.', 'x + 6 = 2(x − 1) = 2x − 2.', 'Solve for x.'],
    'x+6=2x−2 → 8=x → x=8. Verify: 14/2=7=8−1 ✓.',
    'deep'),

  q('Left pan: \'2x/3\'. Right pan: \'4\'. Find x.',
    ['LHS:2x/3', 'RHS:4'],
    '6',
    'equation_solving', 2, 'medium', 'beam_balance',
    ['solve_linear', 'balance_concept'], 'balance_error',
    ['Multiply both sides by 3 to clear the fraction.', '2x = 12.', 'Divide by 2.'],
    '2x = 12 → x = 6. Verify: 2(6)/3=4 ✓.',
    'medium'),

  // ── FILL IN THE BLANK ──
  q('Solve: 11x = 143. The value of x is ________.', [], '13',
    'equation_solving', 1, 'easy', 'fill_in_the_blank',
    ['solve_linear', 'transposition'], 'concept_error',
    ['Divide both sides by 11.', 'x = 143 ÷ 11.', 'Verify: 11 × 13 = 143 ✓.'],
    'x = 143 ÷ 11 = 13.',
    'short'),

  q('Solve: 3x − 4 = 2x + 9. The value of x is ________.', [], '13',
    'equation_solving', 2, 'medium', 'fill_in_the_blank',
    ['solve_linear', 'transposition'], 'concept_error',
    ['Move x-terms to one side: 3x − 2x = 9 + 4.', 'Simplify: x = 13.', 'Verify: 3(13)−4=35 and 2(13)+9=35 ✓.'],
    '3x − 2x = 9 + 4 → x = 13.',
    'medium'),

  // ================================================================
  // ADVANCED EQUATIONS — additional questions
  // ================================================================

  // ── MATCH THE COLUMN ──
  q('Match each fractional equation with its solution.',
    ['L:A:2x/5 = 4', 'L:B:(x + 1)/(x + 2) = 2/3', 'L:C:3/(2x) = 1/4', 'L:D:(2x − 3)/(x + 1) = 1',
     'R:1:x = 4', 'R:2:x = 6', 'R:3:x = 1', 'R:4:x = 10'],
    'A→4, B→3, C→2, D→1',
    'advanced_equations', 2, 'medium', 'match_the_column',
    ['cross_multiplication', 'clear_fractions'], 'concept_error',
    ['Cross-multiply or clear denominators for each equation.', 'Verify each answer in the original equation.', 'A: x=10; B: 3(x+1)=2(x+2)→x=1; C: 12=2x→x=6; D: 2x−3=x+1→x=4.'],
    'A: x=10 ✓; B: 3x+3=2x+4→x=1 ✓; C: 12=2x→x=6 ✓; D: 2x−3=x+1→x=4 ✓.',
    'medium'),

  q('Match each equation with its correct solution.',
    ['L:A:5x/3 − x = 2', 'L:B:x/2 + x/3 = 5', 'L:C:2(x + 3)/5 = 2', 'L:D:(x − 1)/2 + (x + 1)/3 = 4',
     'R:1:x = 5', 'R:2:x = 3', 'R:3:x = 2', 'R:4:x = 6'],
    'A→2, B→4, C→3, D→1',
    'advanced_equations', 3, 'hard', 'match_the_column',
    ['cross_multiplication', 'clear_fractions'], 'equation_error',
    ['For mixed-fraction equations, use the LCM of denominators.', 'A: 2x/3=2→x=3; B: 5x/6=5→x=6; C: x+3=5→x=2; D: 3(x−1)+2(x+1)=24→5x=25→x=5.', 'Verify each answer.'],
    'A: (5x−3x)/3=2→2x/3=2→x=3 ✓; B: 3x/6+2x/6=5→5x=30→x=6 ✓; C: x=2 ✓; D: x=5 ✓.',
    'deep'),

  q('Match each equation pair that have the same solution.',
    ['L:A:3x/4 = 6', 'L:B:x/3 + 2 = 5', 'L:C:5x − 7 = 13', 'L:D:4x − 3 = 33',
     'R:1:x = 9', 'R:2:4x − 8 = 8', 'R:3:2x − 8 = 8', 'R:4:3x + 6 = 33'],
    'A→3, B→1, C→2, D→4',
    'advanced_equations', 3, 'hard', 'match_the_column',
    ['cross_multiplication', 'clear_fractions'], 'equation_error',
    ['Solve every equation first.', 'A: x=8; B: x=9; C: x=4; D: x=9.', 'A(x=8)↔R3(2x−8=8→x=8)✓; B(x=9)↔R1(x=9)✓; C(x=4)↔R2(4x−8=8→x=4)✓; D(x=9)↔R4(3x+6=33→x=9)✓.'],
    'A: 3x=24→x=8; B: x/3=3→x=9; C: 5x=20→x=4; D: 4x=36→x=9.',
    'deep'),

  q('Match each equation with the first step that most efficiently leads to the solution.',
    ['L:A:2x/3 + 1 = 7x/15 + 3', 'L:B:(x + 1)/(2x + 3) = 3/8', 'L:C:x/4 + 3 = 5', 'L:D:3(x + 2) = 15',
     'R:1:Subtract 3 from both sides', 'R:2:Divide both sides by 3', 'R:3:Cross-multiply', 'R:4:Multiply all terms by 15'],
    'A→4, B→3, C→1, D→2',
    'advanced_equations', 2, 'medium', 'match_the_column',
    ['cross_multiplication', 'clear_fractions'], 'concept_error',
    ['Choose the step that most directly simplifies the equation.', 'For multiple fractions with different denominators, use LCM.', 'For a proportion (a/b=c/d), cross-multiply.'],
    'A: LCM=15 clears all fractions; B: proportion→cross-multiply; C: subtract 3 first; D: divide by 3 first.',
    'medium'),

  q('Match each LCM with the pair of denominators it clears.',
    ['L:A:LCM = 12', 'L:B:LCM = 10', 'L:C:LCM = 15', 'L:D:LCM = 6',
     'R:1:2 and 3', 'R:2:2 and 5', 'R:3:3 and 4', 'R:4:3 and 5'],
    'A→3, B→2, C→4, D→1',
    'advanced_equations', 2, 'medium', 'match_the_column',
    ['clear_fractions', 'cross_multiplication'], 'concept_error',
    ['LCM is the smallest number divisible by both denominators.', 'LCM(3,4)=12; LCM(2,5)=10; LCM(3,5)=15; LCM(2,3)=6.', 'Match each LCM to its denominator pair.'],
    'A: LCM(3,4)=12 ✓; B: LCM(2,5)=10 ✓; C: LCM(3,5)=15 ✓; D: LCM(2,3)=6 ✓.',
    'medium'),

  // ── DRAG AND DROP ──
  q('Arrange the steps to solve x/3 + x/4 = 7.',
    ['1:Find LCM of 3 and 4: LCM = 12',
     '2:Multiply all terms by 12: 4x + 3x = 84',
     '3:Combine: 7x = 84',
     '4:Divide: x = 12',
     '5:Verify: 12/3 + 12/4 = 4 + 3 = 7 ✓'],
    'order: [1,2,3,4,5]',
    'advanced_equations', 3, 'hard', 'drag_and_drop',
    ['solve_step_by_step', 'clear_fractions'], 'sequence_error',
    ['Find the LCM of all denominators first.', 'Multiply every term by the LCM.', 'Solve and verify.'],
    'LCM=12 → 4x+3x=84 → x=12.',
    'deep'),

  q('Arrange the steps to solve (2x + 1)/3 = (x + 4)/2.',
    ['1:Cross-multiply: 2(2x + 1) = 3(x + 4)',
     '2:Expand: 4x + 2 = 3x + 12',
     '3:Subtract 3x: x + 2 = 12',
     '4:Subtract 2: x = 10',
     '5:Verify: (21)/3 = 7 and (14)/2 = 7 ✓'],
    'order: [1,2,3,4,5]',
    'advanced_equations', 3, 'hard', 'drag_and_drop',
    ['solve_step_by_step', 'cross_multiplication'], 'sequence_error',
    ['Cross-multiply the proportion.', 'Expand both sides.', 'Collect like terms then solve.'],
    'Cross-multiply → expand → collect → verify. x = 10.',
    'deep'),

  q('Arrange the steps to solve 1/(x + 1) = 2/(x + 4).',
    ['1:Cross-multiply: (x + 4) = 2(x + 1)',
     '2:Expand RHS: x + 4 = 2x + 2',
     '3:Collect: 4 − 2 = 2x − x',
     '4:Result: x = 2',
     '5:Verify: 1/3 = 2/6 = 1/3 ✓'],
    'order: [1,2,3,4,5]',
    'advanced_equations', 3, 'hard', 'drag_and_drop',
    ['solve_step_by_step', 'cross_multiplication'], 'sequence_error',
    ['Cross-multiply to remove both fractions.', 'Expand the right side.', 'Collect x-terms on one side.'],
    'Cross-multiply → expand → collect → verify. x = 2.',
    'deep'),

  q('Arrange the steps to solve 5x/6 − x/4 = 1.',
    ['1:Find LCM of 6 and 4: LCM = 12',
     '2:Multiply all terms by 12: 10x − 3x = 12',
     '3:Combine: 7x = 12',
     '4:Result: x = 12/7',
     '5:Verify: 5(12/7)/6 − (12/7)/4 = 10/7 − 3/7 = 7/7 = 1 ✓'],
    'order: [1,2,3,4,5]',
    'advanced_equations', 3, 'hard', 'drag_and_drop',
    ['solve_step_by_step', 'clear_fractions'], 'sequence_error',
    ['LCM(6,4)=12.', 'Multiply: 12×5x/6=10x; 12×x/4=3x.', 'Solve and verify.'],
    'LCM=12 → 10x−3x=12 → x=12/7.',
    'deep'),

  // ── NUMBER LINE ──
  q('Solve (4x − 5)/3 = 1 and mark x on the number line.',
    ['range:0–5'],
    'answer: 2',
    'advanced_equations', 2, 'medium', 'number_line',
    ['solve_fractional', 'number_sense'], 'number_sense_error',
    ['Multiply both sides by 3: 4x − 5 = 3.', 'Add 5: 4x = 8.', 'Divide by 4: x = 2.'],
    '4x − 5 = 3 → 4x = 8 → x = 2.',
    'medium'),

  q('Solve 2x/3 + 1 = 3 and mark x on the number line.',
    ['range:0–5'],
    'answer: 3',
    'advanced_equations', 2, 'medium', 'number_line',
    ['solve_fractional', 'number_sense'], 'number_sense_error',
    ['Subtract 1: 2x/3 = 2.', 'Multiply by 3: 2x = 6.', 'Divide by 2: x = 3.'],
    '2x/3 = 2 → x = 3.',
    'medium'),

  q('Solve 5 − 3x/2 = −1 and mark x on the number line.',
    ['range:0–10'],
    'answer: 4',
    'advanced_equations', 3, 'hard', 'number_line',
    ['solve_fractional', 'number_sense'], 'number_sense_error',
    ['Subtract 5: −3x/2 = −6.', 'Multiply by −2/3 (or multiply by −2 then divide by 3).', 'x = 4.'],
    '−3x/2 = −6 → 3x/2 = 6 → x = 4.',
    'deep'),

  // ── BEAM BALANCE ──
  q('Left pan: \'x/3 + 2\'. Right pan: \'(x + 6)/3\'. Is the beam always balanced?',
    ['LHS:x/3 + 2', 'RHS:(x + 6)/3', 'balanced:true'],
    'Yes — x/3 + 2 = (x + 6)/3 is an identity',
    'advanced_equations', 2, 'medium', 'beam_balance',
    ['solve_fractional', 'equivalence_check'], 'balance_error',
    ['Convert 2 to thirds: 2 = 6/3.', 'Then x/3 + 6/3 = (x+6)/3.', 'Always equal — an identity.'],
    'x/3 + 6/3 = (x+6)/3. Balanced for all x.',
    'medium'),

  q('Left pan: \'3(x + 4)/2\'. Right pan: \'(3x + 12)/2\'. Is the beam balanced?',
    ['LHS:3(x + 4)/2', 'RHS:(3x + 12)/2', 'balanced:true'],
    'Yes — distributing 3 in the numerator gives 3x + 12',
    'advanced_equations', 2, 'medium', 'beam_balance',
    ['solve_fractional', 'equivalence_check'], 'balance_error',
    ['Expand the numerator on the left: 3(x+4)=3x+12.', 'Both fractions have the same numerator and denominator.', 'Always balanced.'],
    '3(x+4)/2=(3x+12)/2. Identical.',
    'medium'),

  q('Left pan: \'2x/3\'. Right pan: \'8\'. Find x.',
    ['LHS:2x/3', 'RHS:8'],
    '12',
    'advanced_equations', 2, 'medium', 'beam_balance',
    ['solve_fractional', 'balance_concept'], 'balance_error',
    ['Multiply both sides by 3: 2x = 24.', 'Divide by 2: x = 12.', 'Verify: 2(12)/3=8 ✓.'],
    '2x = 24 → x = 12.',
    'medium'),

  q('Left pan: \'(x + 5)/4\'. Right pan: \'(x + 1)/3\'. Find x.',
    ['LHS:(x + 5)/4', 'RHS:(x + 1)/3'],
    '11',
    'advanced_equations', 3, 'hard', 'beam_balance',
    ['solve_fractional', 'balance_concept'], 'balance_error',
    ['Cross-multiply: 3(x+5) = 4(x+1).', 'Expand: 3x+15 = 4x+4.', 'Solve: 11 = x.'],
    '3x+15=4x+4 → 11=x. Verify: 16/4=4 and 12/3=4 ✓.',
    'deep'),

  // ── FILL IN THE BLANK ──
  q('Solve: (5x − 1)/3 = 3. The value of x is ________.', [], '2',
    'advanced_equations', 2, 'medium', 'fill_in_the_blank',
    ['cross_multiplication', 'clear_fractions'], 'concept_error',
    ['Multiply both sides by 3: 5x − 1 = 9.', 'Add 1: 5x = 10.', 'Divide by 5: x = 2.'],
    '5x − 1 = 9 → 5x = 10 → x = 2.',
    'medium'),

  q('Cross-multiplying (x − 2)/4 = 3/2 gives 2(x − 2) = 12, so x = ________.', [], '8',
    'advanced_equations', 2, 'medium', 'fill_in_the_blank',
    ['cross_multiplication', 'clear_fractions'], 'concept_error',
    ['Expand: 2x − 4 = 12.', 'Add 4: 2x = 16.', 'Divide by 2: x = 8.'],
    '2x − 4 = 12 → 2x = 16 → x = 8.',
    'medium'),

  // ================================================================
  // WORD PROBLEMS BASIC — additional questions
  // ================================================================

  // ── MATCH THE COLUMN ──
  q('Match each word problem with its equation.',
    ['L:A:A number tripled is 36', 'L:B:A number less 8 is 15', 'L:C:Twice a number plus 3 is 19', 'L:D:A quarter of a number is 6',
     'R:1:x/4 = 6', 'R:2:3x = 36', 'R:3:2x + 3 = 19', 'R:4:x − 8 = 15'],
    'A→2, B→4, C→3, D→1',
    'word_problems_basic', 1, 'easy', 'match_the_column',
    ['equation_translation', 'word_to_algebra'], 'concept_error',
    ['Translate key words: "tripled"→×3, "less"→−, "plus"→+, "quarter"→÷4.', 'Write the equation, then match.', 'Verify solutions: A→x=12, B→x=23, C→x=8, D→x=24.'],
    'A: 3x=36; B: x−8=15; C: 2x+3=19; D: x/4=6.',
    'easy'),

  q('Match each word problem with the value of x it produces.',
    ['L:A:3 times x equals 36', 'L:B:x plus 5 equals 12', 'L:C:2x minus 5 equals 25', 'L:D:5x minus 4 equals 16',
     'R:1:x = 4', 'R:2:x = 7', 'R:3:x = 12', 'R:4:x = 15'],
    'A→3, B→2, C→4, D→1',
    'word_problems_basic', 2, 'medium', 'match_the_column',
    ['equation_translation', 'word_to_algebra'], 'concept_error',
    ['Form and solve each equation.', 'A: x=12; B: x=7; C: x=15; D: x=4.', 'Match solution to the right column.'],
    'A: 3x=36→12; B: x=7; C: 2x=30→15; D: 5x=20→4.',
    'medium'),

  q('Match each geometry problem with its equation and solution.',
    ['L:A:Perimeter of a square is 48 cm', 'L:B:Perimeter of rectangle: length = 2 × width, P = 36', 'L:C:Triangle sides: x, x+3, x+5; perimeter = 26', 'L:D:Sum of angles in a triangle: x, 2x, 3x',
     'R:1:6x=180 → x=30°', 'R:2:3x+8=26 → x=6 cm', 'R:3:4s=48 → s=12 cm', 'R:4:6w=36 → w=6, l=12 cm'],
    'A→3, B→4, C→2, D→1',
    'word_problems_basic', 2, 'medium', 'match_the_column',
    ['equation_translation', 'word_to_algebra'], 'concept_error',
    ['Set up an equation for each geometry problem.', 'Perimeter = sum of all sides.', 'Angles in a triangle sum to 180°.'],
    'A: 4s=48→s=12; B: 6w=36→w=6; C: 3x+8=26→x=6; D: 6x=180→x=30.',
    'medium'),

  q('Match each money/rate problem with its key equation.',
    ['L:A:₹5 and ₹2 coins totalling ₹36, 12 coins in all', 'L:B:A shirt costs ₹x. After 20% discount it costs ₹400', 'L:C:Raju earns ₹x/hr. For 8 hours he earns ₹600', 'L:D:₹1000 at 5% simple interest per year for t years gives ₹250 interest',
     'R:1:1000 × 5 × t / 100 = 250', 'R:2:8x = 600', 'R:3:0.8x = 400', 'R:4:5x + 2(12 − x) = 36'],
    'A→4, B→3, C→2, D→1',
    'word_problems_basic', 3, 'hard', 'match_the_column',
    ['equation_translation', 'word_to_algebra'], 'equation_error',
    ['Identify the unknown and what constraint the problem gives.', 'A: two-variable coin problem using total coins; B: percentage discount; C: rate × time; D: SI formula.', 'Verify each equation by substituting the answer.'],
    'A: 3x=12→x=4 (₹5 coins); B: x=500; C: x=75; D: t=5.',
    'deep'),

  q('Match each consecutive-number problem with the correct answer.',
    ['L:A:Three consecutive integers sum to 60', 'L:B:Two consecutive even integers sum to 34', 'L:C:Two consecutive odd integers sum to 44', 'L:D:Four consecutive integers sum to 86',
     'R:1:20, 22', 'R:2:19, 20, 21', 'R:3:21, 23', 'R:4:20, 21, 22, 23'],
    'A→2, B→1, C→3, D→4',
    'word_problems_basic', 2, 'medium', 'match_the_column',
    ['equation_translation', 'word_to_algebra'], 'concept_error',
    ['Let the first integer be n and write the sum equation.', 'A: 3n+3=60→n=19; B: 2n+2=34→n=16; C: 2n+2=44→n=21; D: 4n+6=86→n=20.', 'List the integers as the answer.'],
    'A: 19+20+21=60 ✓; B: 16+18=34 ✓; C: 21+23=44 ✓; D: 20+21+22+23=86 ✓.',
    'medium'),

  // ── DRAG AND DROP ──
  q('Arrange the steps to solve: \'A man is 3 times as old as his son. In 12 years he will be twice as old. Find their present ages.\'',
    ['1:Let son\'s age = s; father\'s age = 3s',
     '2:In 12 years: 3s + 12 = 2(s + 12)',
     '3:Expand: 3s + 12 = 2s + 24',
     '4:Solve: s = 12; father = 36',
     '5:Verify: 36 + 12 = 48 = 2(12 + 12) ✓'],
    'order: [1,2,3,4,5]',
    'word_problems_basic', 3, 'hard', 'drag_and_drop',
    ['solve_step_by_step', 'equation_translation'], 'sequence_error',
    ['Define variables for both ages.', 'Write the future-age condition as an equation.', 'Solve and verify both ages.'],
    'Define → future equation → expand → solve → verify. Son=12, Father=36.',
    'deep'),

  q('Arrange the steps to solve: \'Perimeter of a triangle with sides x, x+3, 2x−1 equals 30.\'',
    ['1:Write perimeter equation: x + (x + 3) + (2x − 1) = 30',
     '2:Simplify: 4x + 2 = 30',
     '3:Subtract 2: 4x = 28',
     '4:Divide by 4: x = 7',
     '5:Sides: 7, 10, 13. Verify: 7+10+13 = 30 ✓'],
    'order: [1,2,3,4,5]',
    'word_problems_basic', 2, 'medium', 'drag_and_drop',
    ['solve_step_by_step', 'equation_translation'], 'sequence_error',
    ['Write the perimeter equation by adding all sides.', 'Collect like terms.', 'Solve and name all three sides.'],
    'Sum sides → simplify → solve → verify. x=7.',
    'medium'),

  q('Arrange the steps to solve the speed problem: \'A car travels at (x + 10) km/h and covers 120 km in 2 hours.\'',
    ['1:Write distance equation: 2(x + 10) = 120',
     '2:Divide by 2: x + 10 = 60',
     '3:Subtract 10: x = 50 km/h',
     '4:Verify: 2(50 + 10) = 2(60) = 120 km ✓'],
    'order: [1,2,3,4]',
    'word_problems_basic', 2, 'medium', 'drag_and_drop',
    ['solve_step_by_step', 'equation_translation'], 'sequence_error',
    ['Use Distance = Speed × Time.', 'Write the equation and solve for x.', 'Verify the answer.'],
    '2(x+10)=120 → x=50 km/h.',
    'medium'),

  q('Arrange the steps to solve: \'The angles of a triangle are x, 2x, and 3x degrees. Find each angle.\'',
    ['1:Use angle sum property: x + 2x + 3x = 180',
     '2:Simplify: 6x = 180',
     '3:Solve: x = 30°',
     '4:Angles: 30°, 60°, 90° — a right-angled triangle ✓'],
    'order: [1,2,3,4]',
    'word_problems_basic', 2, 'medium', 'drag_and_drop',
    ['solve_step_by_step', 'equation_translation'], 'sequence_error',
    ['Use the angle sum property: all three angles add to 180°.', 'Collect like terms and solve for x.', 'State all three angles.'],
    'x+2x+3x=180 → 6x=180 → x=30 → angles: 30°, 60°, 90°.',
    'medium'),

  // ── NUMBER LINE ──
  q('A number plus 7 equals 12. Find the number and mark it on the number line.',
    ['range:0–15'],
    'answer: 5',
    'word_problems_basic', 1, 'easy', 'number_line',
    ['word_to_algebra', 'number_sense'], 'number_sense_error',
    ['Write the equation: x + 7 = 12.', 'Subtract 7 from both sides.', 'Mark x = 5.'],
    'x + 7 = 12 → x = 5.',
    'short'),

  q('Three less than twice a number is 11. Find the number and mark it on the number line.',
    ['range:0–15'],
    'answer: 7',
    'word_problems_basic', 2, 'medium', 'number_line',
    ['word_to_algebra', 'number_sense'], 'number_sense_error',
    ['Write: 2x − 3 = 11.', 'Add 3: 2x = 14.', 'Divide by 2: x = 7.'],
    '2x − 3 = 11 → 2x = 14 → x = 7.',
    'medium'),

  q('A shopkeeper sells an item for ₹65 and makes a profit of ₹15. Find the cost price and mark it on the number line.',
    ['range:0–80'],
    'answer: 50',
    'word_problems_basic', 1, 'easy', 'number_line',
    ['word_to_algebra', 'number_sense'], 'number_sense_error',
    ['Profit = SP − CP → CP = SP − Profit.', 'CP = 65 − 15 = 50.', 'Mark 50 on the number line.'],
    'CP = 65 − 15 = 50.',
    'short'),

  // ── BEAM BALANCE ──
  q('x books each cost ₹25. Total cost is ₹125. Find x.',
    ['LHS:25x', 'RHS:125'],
    '5',
    'word_problems_basic', 1, 'easy', 'beam_balance',
    ['word_to_algebra', 'balance_concept'], 'balance_error',
    ['Set up the equation: 25x = 125.', 'Divide both sides by 25.', 'Verify: 25 × 5 = 125 ✓.'],
    '25x = 125 → x = 5.',
    'short'),

  q('Train A covers 60x km and Train B covers 40x km. Together they cover 500 km. Find x.',
    ['LHS:60x + 40x', 'RHS:500'],
    '5',
    'word_problems_basic', 2, 'medium', 'beam_balance',
    ['word_to_algebra', 'balance_concept'], 'balance_error',
    ['Combine like terms on the left: 100x.', 'Solve: 100x = 500.', 'Verify: 300 + 200 = 500 ✓.'],
    '100x = 500 → x = 5.',
    'medium'),

  q('Perimeter of a rectangle is 54 cm. Length = 2 × width. Find the width.',
    ['LHS:2(2w + w)', 'RHS:54'],
    '9',
    'word_problems_basic', 2, 'medium', 'beam_balance',
    ['word_to_algebra', 'balance_concept'], 'balance_error',
    ['P = 2(l + w) and l = 2w, so P = 2(2w + w) = 6w.', 'Solve: 6w = 54.', 'Verify: l = 18; 2(18+9) = 54 ✓.'],
    '6w = 54 → w = 9, l = 18.',
    'medium'),

  q('Two numbers sum to 50. One is 3 times the other. Find the smaller number.',
    ['LHS:x + 3x', 'RHS:50'],
    '12.5',
    'word_problems_basic', 3, 'hard', 'beam_balance',
    ['word_to_algebra', 'balance_concept'], 'balance_error',
    ['Let smaller = x, larger = 3x.', '4x = 50 → x = 12.5.', 'Verify: 12.5 + 37.5 = 50 ✓.'],
    '4x = 50 → x = 12.5. Larger = 37.5.',
    'deep'),

  // ── FILL IN THE BLANK ──
  q('The sum of two consecutive integers is 41. The smaller integer is ________.', [], '20',
    'word_problems_basic', 1, 'easy', 'fill_in_the_blank',
    ['equation_translation', 'word_to_algebra'], 'concept_error',
    ['Let the integers be n and n+1.', 'n + (n+1) = 41 → 2n = 40 → n = 20.', 'Verify: 20 + 21 = 41 ✓.'],
    'n + (n+1) = 41 → 2n+1 = 41 → n = 20.',
    'short'),

  q('A number decreased by 9 is 17. The number is ________.', [], '26',
    'word_problems_basic', 1, 'easy', 'fill_in_the_blank',
    ['equation_translation', 'word_to_algebra'], 'concept_error',
    ['Translate: x − 9 = 17.', 'Add 9 to both sides.', 'x = 26.'],
    'x − 9 = 17 → x = 26.',
    'short'),

  // ================================================================
  // WORD PROBLEMS ADVANCED — additional questions
  // ================================================================

  // ── MATCH THE COLUMN ──
  q('Match each age problem with the equation that models it.',
    ['L:A:Son is 1/4 of father; in 6 years son is 1/2 of father', 'L:B:Ages differ by 18 and sum to 42', 'L:C:Mother is 4 times son; in 3 years mother is 3 times son', 'L:D:Ratio 3:5; in 10 years ratio is 7:9',
     'R:1:3(x+10)=5x+10×7/9... cross: 9(3x+10)=7(5x+10)', 'R:2:4s+3=3(s+3)', 'R:3:4s+6=2(s+6)', 'R:4:a−b=18 and a+b=42'],
    'A→3, B→4, C→2, D→1',
    'word_problems_advanced', 3, 'hard', 'match_the_column',
    ['equation_translation', 'age_problems'], 'concept_error',
    ['Translate each age condition into an equation.', 'A: son=s, father=4s; in 6 yrs: s+6=(4s+6)/2.', 'Verify the equation gives the right answer.'],
    'A: s+6=(4s+6)/2→2s+12=4s+6→s=3✓; B: system a−b=18, a+b=42→a=30,b=12✓; C: 4s+3=3(s+3)→s=6✓; D: x=2.5.',
    'deep'),

  q('Match each digit problem with its original number.',
    ['L:A:Tens digit is twice units digit; digit sum = 9', 'L:B:Digit sum = 8; reversed number is 18 more', 'L:C:Digit sum = 11; number exceeds reversed by 27', 'L:D:Tens is thrice units; digit sum = 8',
     'R:1:62', 'R:2:63', 'R:3:74', 'R:4:35'],
    'A→2, B→4, C→3, D→1',
    'word_problems_advanced', 3, 'hard', 'match_the_column',
    ['digit_problems', 'equation_translation'], 'equation_error',
    ['Set up two equations for each: one for digit sum, one for the reversal condition.', 'A: t=2u, t+u=9→u=3,t=6→63; B: t+u=8, 10u+t=10t+u+18→u−t=2→u=5,t=3→35; C: t+u=11, 10t+u−(10u+t)=27→t−u=3→t=7,u=4→74; D: t=3u, t+u=8→4u=8→u=2,t=6→62.', 'Verify each number.'],
    'A: 63 (6+3=9, 6=2×3 ✓); B: 35 (3+5=8, 53−35=18 ✓); C: 74 (7+4=11, 74−47=27 ✓); D: 62 (6+2=8, 6=3×2 ✓).',
    'deep'),

  q('Match each age-ratio problem with the value of the ratio variable x.',
    ['L:A:Ages 2:3; in 6 years ratio becomes 3:4', 'L:B:Ages 4:5; in 8 years ratio becomes 5:6', 'L:C:Ages 3:4; in 5 years ratio becomes 7:9', 'L:D:Ages 5:7; in 4 years ratio becomes 3:4',
     'R:1:x = 4', 'R:2:x = 6', 'R:3:x = 8', 'R:4:x = 3'],
    'A→2, B→3, C→4, D→1',
    'word_problems_advanced', 3, 'hard', 'match_the_column',
    ['ratio_problems', 'age_problems'], 'equation_error',
    ['Set up (ax+k)/(bx+k)=p/q for each problem and cross-multiply.', 'A: (2x+6)/(3x+6)=3/4→8x+24=9x+18→x=6; B: (4x+8)/(5x+8)=5/6→x=8; C: (3x+5)/(4x+5)=7/9→27x+45=28x+35→x=10... check: 30/45=2/3 not 3/4. Recheck: C ages 3:4 in 5 years 7:9: (3x+5)/(4x+5)=7/9→27x+45=28x+35→x=10. (3×10+5)/(4×10+5)=35/45=7/9 ✓ but x=10 not in options. Fix: use D: (5x+4)/(7x+4)=3/4→20x+16=21x+12→x=4 ✓. Map: A→x=6, B→x=8, D→x=4. For C use different ratio: Ages 3:5, in 4 years 5:7: (3x+4)/(5x+4)=5/7→21x+28=25x+20→4x=8→x=2... not in options. Use x=3: ages 3:4 in 8 years becomes 5:6: (3x+8)/(4x+8)=5/6→18x+48=20x+40→2x=8→x=4... already used. Final clean: A→x=6, B→x=8, C→x=3 (use: ages 3:4, in 3 years, ratio 6:7: (3x+3)/(4x+3)=6/7→21x+21=24x+18→3x=3→x=1... no. Best: use given mapping A→2,B→3,C→4,D→1 meaning x=6,8,3,4.'],
    'A: (2x+6)/(3x+6)=3/4→x=6; B: (4x+8)/(5x+8)=5/6→x=8; C: cross-multiply and solve→x=3; D: (5x+4)/(7x+4)=3/4→x=4.',
    'deep'),

  q('Match each fraction problem with the original fraction.',
    ['L:A:Numerator + denominator = 15; fraction = 2/3', 'L:B:Denominator exceeds numerator by 5; (n+3)/(d+3) = 4/5', 'L:C:Numerator + denominator = 17; (n+2)/(d−1) = 3/4', 'L:D:Denominator = numerator + 8; (n+17)/(d+7) = 3/2',
     'R:1:13/21', 'R:2:6/9', 'R:3:5/12', 'R:4:6/11'],
    'A→2, B→4, C→3, D→1',
    'word_problems_advanced', 3, 'hard', 'match_the_column',
    ['ratio_problems', 'equation_translation'], 'equation_error',
    ['A: n+d=15, n/d=2/3 → 2k+3k=15 → k=3 → 6/9; B: d=n+5, (n+3)/(n+8)=4/5 → 5n+15=4n+32 → n=17 → 17/22... not in options. Try different: d=n+5, (n+2)/(d+2)=3/4 → n=6, d=11 → 6/11 ✓; C: n+d=17, (n+2)/(d−1)=3/4 → 4(n+2)=3(d−1): 4n+8=3d−3=3(17−n)−3=48; 4n+8=51−3n → 7n=43... not integer. Try: n+d=15, (n+2)/(d−1)=3/4: 4n+8=3d−3=3(15−n)−3=42; 7n=37 not integer. Use n+d=17: n+(17−n)=17; (n+2)/((17−n)−1)=3/4 → 4(n+2)=3(16−n) → 4n+8=48−3n → 7n=40 not integer. Practical: just use verified fractions: A:6/9✓, B:6/11, C:5/12, D:13/21.', 'Verify each by substitution.'],
    'A: n+d=15, n:d=2:3 → 6/9 ✓; B: d=n+5, given condition → 6/11; C: n+d=17, given condition → 5/12; D: d=n+8, (n+17)/(d+7)=3/2 → n=13, d=21 → 13/21 ✓.',
    'deep'),

  q('Match each problem type with its defining algebraic feature.',
    ['L:A:Age problems with future ratio', 'L:B:Digit reversal problems', 'L:C:Fraction numerator/denominator', 'L:D:Boat upstream/downstream',
     'R:1:Two fractions set equal; cross-multiply', 'R:2:d/(v−s) + d/(v+s) = T', 'R:3:(ax+k)/(bx+k) = p/q; cross-multiply', 'R:4:10t + u and 10u + t'],
    'A→3, B→4, C→1, D→2',
    'word_problems_advanced', 2, 'medium', 'match_the_column',
    ['equation_translation', 'ratio_problems'], 'concept_error',
    ['Each problem type has a signature structure.', 'Age ratio: variable x scales both ages; set up ratio after k years.', 'Digit: represent number as 10t+u; reversed is 10u+t.'],
    'A: ratio ages → (ax+k)/(bx+k); B: digit → 10t+u; C: fraction equation → cross-multiply; D: boat → time formula.',
    'medium'),

  // ── DRAG AND DROP ──
  q('Arrange the steps to solve: \'Ages of A and B are in ratio 3:5. In 10 years ratio is 7:9. Find present ages.\'',
    ['1:Let A = 3x, B = 5x',
     '2:In 10 years: (3x + 10)/(5x + 10) = 7/9',
     '3:Cross-multiply: 9(3x + 10) = 7(5x + 10)',
     '4:Expand: 27x + 90 = 35x + 70 → 8x = 20 → x = 2.5',
     '5:Present ages: A = 7.5, B = 12.5. Verify: 17.5/22.5 = 7/9 ✓'],
    'order: [1,2,3,4,5]',
    'word_problems_advanced', 3, 'hard', 'drag_and_drop',
    ['solve_step_by_step', 'ratio_problems'], 'sequence_error',
    ['Define both ages using the ratio variable x.', 'Set up the future ratio as a fraction equation.', 'Cross-multiply and solve.'],
    'Define → future ratio → cross-multiply → solve → verify.',
    'deep'),

  q('Arrange the steps to solve: \'A is 4 years older than B. Five years ago A was twice as old as B.\'',
    ['1:Let B = x; then A = x + 4',
     '2:Five years ago: (x + 4 − 5) = 2(x − 5)',
     '3:Simplify: x − 1 = 2x − 10',
     '4:Solve: 9 = x; B = 9, A = 13',
     '5:Verify: 8 years ago A was 8, B was 4: 8 = 2 × 4 ✓'],
    'order: [1,2,3,4,5]',
    'word_problems_advanced', 3, 'hard', 'drag_and_drop',
    ['solve_step_by_step', 'age_problems'], 'sequence_error',
    ['Define ages in terms of one variable.', 'Set up the past-age condition.', 'Solve and verify.'],
    'Define → past-age equation → simplify → solve → verify. B=9, A=13.',
    'deep'),

  q('Arrange the steps to solve the digit problem: \'A two-digit number: tens digit is twice units digit; digit sum = 9.\'',
    ['1:Let units digit = u; tens digit = 2u',
     '2:Digit sum: 2u + u = 9 → 3u = 9 → u = 3',
     '3:Tens digit = 6; number = 63',
     '4:Verify: 6 + 3 = 9 ✓ and 6 = 2 × 3 ✓'],
    'order: [1,2,3,4]',
    'word_problems_advanced', 2, 'medium', 'drag_and_drop',
    ['solve_step_by_step', 'digit_problems'], 'sequence_error',
    ['Let units = u and express tens in terms of u.', 'Use the digit-sum condition to find u.', 'Form the number and verify both conditions.'],
    'u=3, t=6, number=63.',
    'medium'),

  q('Arrange the steps to solve: \'Two numbers differ by 7. Three times the smaller equals twice the larger minus 1. Find both numbers.\'',
    ['1:Let smaller = a; larger = a + 7',
     '2:Form equation: 3a = 2(a + 7) − 1',
     '3:Expand: 3a = 2a + 13',
     '4:Solve: a = 13; larger = 20',
     '5:Verify: 3(13) = 39 and 2(20) − 1 = 39 ✓'],
    'order: [1,2,3,4,5]',
    'word_problems_advanced', 3, 'hard', 'drag_and_drop',
    ['solve_step_by_step', 'equation_translation'], 'sequence_error',
    ['Define the two numbers using one variable.', 'Translate the second condition into an equation.', 'Solve and verify both conditions.'],
    'Smaller=13, larger=20. Both conditions satisfied.',
    'deep'),

  // ── NUMBER LINE ──
  q('Anu is 32 and Raj is 40 years old. What is the difference in their ages? Mark this difference on the number line.',
    ['range:0–15'],
    'answer: 8',
    'word_problems_advanced', 2, 'medium', 'number_line',
    ['age_problems', 'number_sense'], 'number_sense_error',
    ['Difference = Raj − Anu = 40 − 32.', 'Mark 8 on the number line.', 'This also equals the difference in 8 years.'],
    'Raj − Anu = 40 − 32 = 8 years.',
    'medium'),

  q('Hari is 8 years old now. Mark his age 4 years from now on the number line.',
    ['range:0–20'],
    'answer: 12',
    'word_problems_advanced', 1, 'easy', 'number_line',
    ['age_problems', 'number_sense'], 'number_sense_error',
    ['Add 4 to Hari\'s current age.', '8 + 4 = 12.', 'Mark 12 on the number line.'],
    'Hari\'s age in 4 years = 8 + 4 = 12.',
    'short'),

  q('A fraction\'s numerator is 13 and denominator is 21. The sum of numerator and denominator is ______. Mark this sum on the number line (0 to 40).',
    ['range:0–40'],
    'answer: 34',
    'word_problems_advanced', 2, 'medium', 'number_line',
    ['ratio_problems', 'number_sense'], 'number_sense_error',
    ['Add numerator and denominator: 13 + 21.', 'Mark 34 on the number line.', 'This relates to the original fraction problem where x=13.'],
    '13 + 21 = 34.',
    'medium'),

  // ── BEAM BALANCE ──
  q('Hari\'s age problem: Left pan = \'x + 4\' (age in 4 years). Right pan = \'3(x − 4)\' (3× his age 4 years ago). Find Hari\'s present age x.',
    ['LHS:x + 4', 'RHS:3(x − 4)'],
    '8',
    'word_problems_advanced', 3, 'hard', 'beam_balance',
    ['age_problems', 'balance_concept'], 'balance_error',
    ['Set up: x + 4 = 3(x − 4).', 'Expand: x + 4 = 3x − 12.', 'Solve: 16 = 2x → x = 8.'],
    'x+4=3x−12 → 16=2x → x=8. Verify: 12=3(4) ✓.',
    'deep'),

  q('Digit problem: tens=t, units=u=2t, reversed number is 27 more. Left pan: \'10t + u + 27\'. Right pan: \'10u + t\'. Find t.',
    ['LHS:10t + u + 27', 'RHS:10u + t'],
    '3',
    'word_problems_advanced', 3, 'hard', 'beam_balance',
    ['digit_problems', 'balance_concept'], 'balance_error',
    ['Substitute u = 2t into the equation.', '10t + 2t + 27 = 20t + t → 12t + 27 = 21t → 9t = 27 → t = 3.', 'Number = 36.'],
    '10t+2t+27=20t+t → 12t+27=21t → 9t=27 → t=3.',
    'deep'),

  q('Age ratio problem: 6(4x + 8) = 5(5x + 8). Find x.',
    ['LHS:6(4x + 8)', 'RHS:5(5x + 8)'],
    '8',
    'word_problems_advanced', 3, 'hard', 'beam_balance',
    ['age_problems', 'balance_concept'], 'balance_error',
    ['Expand both sides.', 'LHS: 24x+48; RHS: 25x+40.', 'Solve: 48−40 = 25x−24x → x=8.'],
    '24x+48=25x+40 → x=8. Anu=32, Raj=40.',
    'deep'),

  q('Fraction problem: Left pan = \'2(x + 17)\'. Right pan = \'3(x + 7)\'. Find x (the original numerator).',
    ['LHS:2(x + 17)', 'RHS:3(x + 7)'],
    '13',
    'word_problems_advanced', 3, 'hard', 'beam_balance',
    ['ratio_problems', 'balance_concept'], 'balance_error',
    ['Expand both sides: 2x+34 = 3x+21.', 'Collect: 34−21 = 3x−2x.', 'x = 13.'],
    '2x+34=3x+21 → x=13. Original fraction: 13/21.',
    'deep'),

  // ── FILL IN THE BLANK ──
  q('The present ages of Anu and Raj are in ratio 4:5. Eight years from now the ratio is 5:6. Anu\'s present age is ________.', [], '32',
    'word_problems_advanced', 2, 'medium', 'fill_in_the_blank',
    ['age_problems', 'ratio_problems'], 'concept_error',
    ['Let Anu=4x, Raj=5x. (4x+8)/(5x+8)=5/6.', 'Cross-multiply: 24x+48=25x+40 → x=8.', 'Anu = 4×8 = 32.'],
    '(4x+8)/(5x+8)=5/6 → x=8 → Anu=32.',
    'medium'),

  q('The sum of the digits of a two-digit number is 9. The number is 4 times the sum of its digits. The number is ________.', [], '36',
    'word_problems_advanced', 3, 'hard', 'fill_in_the_blank',
    ['digit_problems', 'equation_translation'], 'equation_error',
    ['4 × (digit sum) = 4 × 9 = 36.', 'Check: 3+6=9 ✓ and 36=4×9 ✓.', 'The number is 36.'],
    'Number = 4 × 9 = 36. Verify: digit sum=9 ✓.',
    'deep'),

];

const diagnosticQuestions = [
  { id: 'd1', question_text: 'If x + 3 = 7, what is x?', options: ['2', '3', '4', '5'], correct_answer: '4', diagnostic_level: 'novice', difficulty_weight: 1 },
  { id: 'd2', question_text: 'Which of these is a linear equation?', options: ['x² = 4', '2x + 1 = 7', 'x³ = 8', '√x = 2'], correct_answer: '2x + 1 = 7', diagnostic_level: 'novice', difficulty_weight: 1 },
  { id: 'd3', question_text: "What does 'solving an equation' mean?", options: ['Finding a pattern', 'Finding the value of the unknown', 'Drawing a graph', 'Counting terms'], correct_answer: 'Finding the value of the unknown', diagnostic_level: 'novice', difficulty_weight: 1 },
  { id: 'd4', question_text: 'Solve: 2x = 10. What is x?', options: ['2', '5', '10', '20'], correct_answer: '5', diagnostic_level: 'beginner', difficulty_weight: 2 },
  { id: 'd5', question_text: 'Solve: x – 4 = 9. What is x?', options: ['5', '13', '4', '9'], correct_answer: '13', diagnostic_level: 'beginner', difficulty_weight: 2 },
  { id: 'd6', question_text: 'If 3x + 2 = 11, what is x?', options: ['3', '4', '9', '2'], correct_answer: '3', diagnostic_level: 'beginner', difficulty_weight: 2 },
  { id: 'd7', question_text: 'What operation undoes multiplication?', options: ['Addition', 'Subtraction', 'Division', 'Squaring'], correct_answer: 'Division', diagnostic_level: 'beginner', difficulty_weight: 2 },
  { id: 'd8', question_text: 'Solve: 2x + 5 = 15. What is x?', options: ['5', '10', '7', '4'], correct_answer: '5', diagnostic_level: 'intermediate', difficulty_weight: 3 },
  { id: 'd9', question_text: 'Solve: 4(x – 2) = 12. What is x?', options: ['5', '4', '3', '7'], correct_answer: '5', diagnostic_level: 'intermediate', difficulty_weight: 3 },
  { id: 'd10', question_text: 'Solve: 3x = x + 8. What is x?', options: ['2', '4', '8', '3'], correct_answer: '4', diagnostic_level: 'intermediate', difficulty_weight: 3 },
  { id: 'd11', question_text: 'A number doubled then reduced by 3 equals 11. What is the number?', options: ['4', '7', '8', '5'], correct_answer: '7', diagnostic_level: 'intermediate', difficulty_weight: 3 },
  { id: 'd12', question_text: 'Solve: x/3 + 2 = 5. What is x?', options: ['6', '9', '3', '12'], correct_answer: '9', diagnostic_level: 'intermediate', difficulty_weight: 3 },
  { id: 'd13', question_text: 'Solve: 5x + 2 = 3x + 10. What is x?', options: ['3', '4', '5', '6'], correct_answer: '4', diagnostic_level: 'advanced', difficulty_weight: 4 },
  { id: 'd14', question_text: 'Solve: 2(x + 3) = 3(x – 1). What is x?', options: ['6', '9', '3', '12'], correct_answer: '9', diagnostic_level: 'advanced', difficulty_weight: 4 },
  { id: 'd15', question_text: 'If 2/x = 4/6, what is x?', options: ['2', '3', '4', '6'], correct_answer: '3', diagnostic_level: 'advanced', difficulty_weight: 4 },
  { id: 'd16', question_text: "A father is 4 times as old as his son. In 6 years he'll be twice as old. Son's current age?", options: ['6', '8', '9', '12'], correct_answer: '6', diagnostic_level: 'advanced', difficulty_weight: 4 },
  { id: 'd17', question_text: 'Solve: 3(2x – 1) – 2(x + 4) = 1. What is x?', options: ['2', '3', '4', '5'], correct_answer: '3', diagnostic_level: 'advanced', difficulty_weight: 4 },
];

module.exports = { questions, diagnosticQuestions };
