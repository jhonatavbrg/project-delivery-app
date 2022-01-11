const jwt = require('jsonwebtoken');
const userServices = require('../services/userServices');

const SECRET_KEY = 'secret_key';

const createToken = (user) => {
  const token = jwt.sign({
    id: user.id,
    name: user.name,
    role: user.role,
    email: user.email,
  }, SECRET_KEY, {
    expiresIn: '4h',
  });

  return token;
};

const verifyToken = (token) => {
  const decoded = jwt.verify(token, SECRET_KEY);
  return decoded;
};

const verifyAuth = async (req, res, next) => {
  const { authorization: token } = req.headers;
  const user = verifyToken(token);
  const databaseUser = await userServices.getUserByEmailAndName(user.name, user.email);

  if (databaseUser) {
    req.user = user;
    return next();
  }

  res.status(401).json({ message: 'Token malformed' });
};

module.exports = {
  createToken,
  verifyToken,
  verifyAuth,
};
