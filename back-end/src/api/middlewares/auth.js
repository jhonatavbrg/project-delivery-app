const jwt = require('jsonwebtoken');

const SECRET_KEY = 'secret_key';

const createToken = (user) => {
  const token = jwt.sign({
   name: user.name,
    role: user.role,
  }, SECRET_KEY, {
    expiresIn: '4h',
  });

  return token;
};

const verifyToken = (token) => {
  const decoded = jwt.verify(token, SECRET_KEY);
  return decoded;
};

module.exports = {
  createToken,
  verifyToken,
};
