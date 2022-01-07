const { user } = require('../../database/models');

const getAllSellers = async () => {
  const sellers = await user.findAll({ where: { role: 'seller' } });
  return sellers;
};

module.exports = { 
  getAllSellers,
};