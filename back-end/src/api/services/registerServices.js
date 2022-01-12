const md5 = require('md5');
const { user } = require('../../database/models');

const userRegister = async ({ name, email, password }) => {
  const register = await user.create({ name, email, password: md5(password) });
  return register;
};

module.exports = { 
  userRegister,
};