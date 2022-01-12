const { user } = require('../../database/models');

const getAllSellers = async () => {
  const sellers = await user.findAll({ where: { role: 'seller' } });
  return sellers;
};

const getSellerById = async (id) => {
  const seller = await user.findByPk(id);
  return seller;
};

const getUserByEmailAndName = async (name, email) => {
  const usr = await user.findOne({ where: { name, email } });
  return usr;
};

module.exports = { 
  getAllSellers,
  getSellerById,
  getUserByEmailAndName,
};
