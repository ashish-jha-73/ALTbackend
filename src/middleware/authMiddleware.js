const { verifyToken } = require('../services/authService');

function authenticateToken(req, res, next) {
  try {
    const authHeader = req.headers.authorization || '';
    const [type, token] = authHeader.split(' ');

    if (type !== 'Bearer' || !token) {
      return res.status(401).json({ message: 'missing or invalid authorization token' });
    }

    const payload = verifyToken(token);
    req.authUserId = payload.sub;
    req.authUsername = payload.username;
    return next();
  } catch (error) {
    return res.status(401).json({ message: 'invalid or expired token' });
  }
}

module.exports = {
  authenticateToken,
};
