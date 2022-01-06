const rescue = require('express-rescue');
const { user } = require('../../database/models');
const { userRegister } = require('../services/registerServices');

const register = rescue(async (req, res) => {
  const { name, email, password, role } = req.body;

  const checkUser = await user.findOne({ where: { name, email } });

  if (checkUser) return res.status(409).json({ message: 'Usuário já existe.' });
  
  await userRegister({ name, email, password, role });

  return res.status(201).json({ message: 'Usuário criado com sucesso!' });
});

module.exports = {
  register,
};
