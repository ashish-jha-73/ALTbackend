const express = require('express');
const cors = require('cors');
const allowedOrigin = process.env.CORS_ORIGIN || '*';
const authRoutes = require('./routes/authRoutes');
const learningRoutes = require('./routes/learningRoutes');


const app = express();

app.use(cors({ origin: allowedOrigin, credentials: true }));
app.use(express.json());

app.get('/health', (_, res) => {
  res.json({ status: 'ok' });
});

app.use('/api/auth', authRoutes);
app.use('/api', learningRoutes);

module.exports = app;
