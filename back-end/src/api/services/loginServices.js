const md5 = require('md5');
const { user } = require('../../database/models');
const { createToken } = require('../middlewares/auth');

const login = async ({ email, password }) => {
  const encodedPassword = md5(password);
  const loginUser = await user.findOne({ where: { email, password: encodedPassword } });

  if (loginUser) {
    const token = createToken(loginUser);
    const userInfo = { token, name: loginUser.name, email: loginUser.email, role: loginUser.role };
    return userInfo;
  }
};

module.exports = { 
  login,
};
