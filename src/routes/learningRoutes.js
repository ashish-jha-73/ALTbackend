const express = require('express');
const { authenticateToken } = require('../middleware/authMiddleware');
const {
  submitAttempt,
  nextQuestion,
  completeLesson,
  getProgress,
  getConceptMap,
  getSessionSummary,
} = require('../controllers/learningController');

const router = express.Router();

router.use(authenticateToken);

router.post('/attempt', submitAttempt);
router.post('/complete-lesson', completeLesson);
router.get('/next-question', nextQuestion);
router.get('/progress', getProgress);
router.get('/concept-map', getConceptMap);
router.get('/session-summary', getSessionSummary);

module.exports = router;
