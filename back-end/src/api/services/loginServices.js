const md5 = require('md5');
const { user } = require('../../database/models');
const { createToken } = require('../../api/middlewares/auth');

const login = async ({ email, password }) => {
  const encodedPassword = md5(password);
  const loginUser = await user.findOne({ where: { email, password: encodedPassword}});

  if(loginUser) {
    const token = createToken(loginUser);
    return token;
  }
}

module.exports = { 
  login
}