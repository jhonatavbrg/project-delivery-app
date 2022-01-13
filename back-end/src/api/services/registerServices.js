const md5 = require('md5');
const { user } = require('../../database/models');

const userRegister = async ({ name, email, password }) => {
  const register = await user.create({ name, email, password: md5(password) });
  return register;
};

const userRegisterADM = async ({name, email, password, role }) => {
  const registerADM = await user.create({ name, email, password: md5(password), role });
  return registerADM;
};

module.exports = { 
  userRegister,
  userRegisterADM
};