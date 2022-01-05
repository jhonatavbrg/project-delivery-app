const md5 = require('md5');
const { user } = require('../../database/models');

const userLogin = async ({email, password}) => {
  const loginUser = await user.findOne({ where: { email, password: md5(password)}});
  return loginUser;
}

module.exports = { 
  userLogin
}
