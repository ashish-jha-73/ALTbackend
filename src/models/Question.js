const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema(
  {
    question_text: {
      type: String,
      required: true,
    },
    options: {
      type: [String],
      required: true,
      validate: {
        validator: (arr) => arr.length >= 2,
        message: 'At least two options are required',
      },
    },
    correct_answer: {
      type: String,
      required: true,
    },
    concept: {
      type: String,
      required: true,
      index: true,
    },
    level: {
      type: Number,
      enum: [1, 2, 3],
      required: true,
      default: 1,
      index: true,
    },
    difficulty: {
      type: String,
      enum: ['easy', 'medium', 'hard'],
      required: true,
      index: true,
    },
    question_type: {
      type: String,
      enum: ['mcq', 'step', 'error_detection', 'fill_blank', 'match', 'drag_sort'],
      default: 'mcq',
      index: true,
    },
    skills: {
      type: [String],
      default: [],
    },
    misconception_target: {
      type: String,
      default: 'concept_error',
    },
    cognitive_level: {
      type: String,
      default: 'apply',
    },
    story_based: {
      type: Boolean,
      default: false,
    },
    time_expected: {
      type: Number,
      default: 60,
    },
    hints: {
      type: [String],
      default: [],
    },
    explanation: {
      type: String,
      default: '',
    },
    explanation_depth: {
      type: String,
      enum: ['short', 'medium', 'deep'],
      default: 'medium',
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Question', questionSchema);
