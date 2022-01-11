const { user } = require('../../database/models');

const getAllSellers = async () => {
  const sellers = await user.findAll({ where: { role: 'seller' } });
  return sellers;
};

const getSellerById = async (id) => {
  const seller = await user.findByPk(id);
  return seller;
};

module.exports = { 
  getAllSellers,
  getSellerById,
};