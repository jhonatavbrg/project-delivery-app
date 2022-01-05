const rescue = require('express-rescue');
const { user } = require('../../database/models');
const { userRegister } = require('../services/registerServices');

const register = rescue(async (req, res) => {
  const { name, email, password } = req.body;
  await userRegister({ name, email, password });

  return res.status(201).json({ message: 'Usuário criado com sucesso!' });
});

module.exports = {
  register,
};
