const { Op } = require('sequelize'); 
const rescue = require('express-rescue');
const { user } = require('../../database/models');
const { userRegister, userRegisterADM } = require('../services/registerServices');
const { SECRET_KEY } = require('../middlewares/validators');
const { verifyToken } = require('../middlewares/auth');

const register = rescue(async (req, res) => {
  const { name, email, password, role } = req.body;

  const checkUser = await user.findOne({ where: { [Op.or]: [{ name }, { email }] } });

  if (checkUser) return res.status(409).json({ message: 'Usuário já existe.' });
  
  await userRegister({ name, email, password, role });

  return res.status(201).json({ message: 'Usuário criado com sucesso!' });
});

const registerADM = rescue(async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    const { user } = req; 

    const checkUser = await user.findOne({ where: { [Op.or]: [{ name }, { email }] } });

    if (checkUser) return res.status(409).json({ message: 'Usuário já existe.' });

    if (user.role === 'administrator') {
        const newUserADM = await userRegisterADM({ name, email, password, role });
        return res.status(201).json(newUserADM);
    }
  } catch (e) {
        return res.status(401).json({ message: 'Acess denied' });
    }
  });

module.exports = {
  register,
  registerADM,
};
