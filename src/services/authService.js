const crypto = require('crypto');
const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET || 'dev_secret_change_me';
const JWT_EXPIRES_IN = '7d';

function hashPassword(password, salt = crypto.randomBytes(16).toString('hex')) {
  const hash = crypto.scryptSync(password, salt, 64).toString('hex');
  return { salt, hash };
}

function verifyPassword(password, passwordHash) {
  if (!passwordHash || !passwordHash.salt || !passwordHash.hash) {
    return false;
  }

  const candidate = crypto.scryptSync(password, passwordHash.salt, 64).toString('hex');
  return crypto.timingSafeEqual(
    Buffer.from(candidate, 'hex'),
    Buffer.from(passwordHash.hash, 'hex')
  );
}

function createToken(user) {
  return jwt.sign(
    {
      sub: String(user._id),
      username: user.username,
      name: user.name,
    },
    JWT_SECRET,
    { expiresIn: JWT_EXPIRES_IN }
  );
}

function verifyToken(token) {
  return jwt.verify(token, JWT_SECRET);
}

module.exports = {
  hashPassword,
  verifyPassword,
  createToken,
  verifyToken,
};
