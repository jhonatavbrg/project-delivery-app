const md5 = require('md5');
const { user } = require('../../database/models');
const { createToken } = require('../../api/middlewares/auth');

const userLogin = async ({ email, password }) => {
  const loginUser = await user.findOne({ where: { email, password: md5(password)}});

  if(loginUser) {
    const token = createToken(loginUser);
    return token;
  }
}

module.exports = { 
  userLogin
}