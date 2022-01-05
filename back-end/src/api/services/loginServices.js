const md5 = require('md5');
const { user } = require('../../database/models');
const { createToken } = require('../middlewares/auth');

<<<<<<< HEAD
const userLogin = async ({ email, password }) => {
  const loginUser = await user.findOne({ where: { email, password: md5(password) } });
  return loginUser;
};

module.exports = { 
  userLogin,
=======
const login = async ({ email, password }) => {
  const encodedPassword = md5(password);
  const loginUser = await user.findOne({ where: { email, password: encodedPassword } });

  if (loginUser) {
    const token = createToken(loginUser);
    return token;
  }
};

module.exports = { 
  login,
>>>>>>> de03ea968784e493bfe92e3aa689c7e1c6faea3e
};
