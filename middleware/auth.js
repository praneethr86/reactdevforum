const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function(req, res, next) {
  //1. Get Token from the header
  const token = req.header('x-auth-token');

  //2. Check if no token
  if (!token) {
    return res.status(401).json({ msg: 'No Token. Authorization Denied' });
  }

  //3. Verify token
  try {
    const decoded = jwt.verify(token, config.get('jwtSecret'));
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token Is Not Valid' });
  }
};
