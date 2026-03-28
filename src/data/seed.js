require('dotenv').config();
const mongoose = require('mongoose');
const { connectDB } = require('../config/db');
const Question = require('../models/Question');
const questions = require('./seedQuestions');

async function seed() {
  try {
    await connectDB();
    await Question.deleteMany({});
    await Question.insertMany(questions);
    console.log(`Seeded ${questions.length} questions`);
  } catch (error) {
    console.error('Seeding failed:', error.message);
  } finally {
    await mongoose.connection.close();
  }
}

seed();
