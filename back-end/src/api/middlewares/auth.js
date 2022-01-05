require('dotenv').config();
const jwt = require('jsonwebtoken');

const createToken = (user) => {
  const token = jwt.sign({
    id: user.id,
    role: user.role,
  }, process.env.JWT_SECRET, {
    expiresIn: '4h',
  });

  return token;
}

const verifyToken = (token) => {
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  return decoded;
}

module.exports = {
  createToken,
  verifyToken,
};
