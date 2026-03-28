const User = require('../models/User');
const { hashPassword, verifyPassword, createToken } = require('../services/authService');

function sanitizeUser(user) {
  return {
    user_id: user._id,
    name: user.name,
    username: user.username,
  };
}

async function register(req, res) {
  try {
    const { name, username, password } = req.body;

    if (!name || !username || !password) {
      return res.status(400).json({ message: 'name, username and password are required' });
    }

    if (password.length < 6) {
      return res.status(400).json({ message: 'password must be at least 6 characters' });
    }

    const existing = await User.findOne({ username: username.trim().toLowerCase() });
    if (existing) {
      return res.status(409).json({ message: 'username already exists' });
    }

    const passwordHash = hashPassword(password);

    const user = await User.create({
      name: name.trim(),
      username: username.trim().toLowerCase(),
      password_hash: passwordHash,
    });

    const token = createToken(user);

    return res.status(201).json({
      token,
      user: sanitizeUser(user),
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

async function login(req, res) {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ message: 'username and password are required' });
    }

    const user = await User.findOne({ username: username.trim().toLowerCase() });
    if (!user) {
      return res.status(401).json({ message: 'invalid credentials' });
    }

    const valid = verifyPassword(password, user.password_hash);
    if (!valid) {
      return res.status(401).json({ message: 'invalid credentials' });
    }

    const token = createToken(user);

    return res.json({
      token,
      user: sanitizeUser(user),
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

module.exports = {
  register,
  login,
};
