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

const getAllUsers = async () => {
  const Allusers = await user.findAll();
  return Allusers;
};

const deleteUser = async (id) => {
  const deletedUser = await user.destroy({ where: { id } });
  return deletedUser;
};

module.exports = { 
  getAllSellers,
  getSellerById,
  getUserByEmailAndName,
  getAllUsers,
  deleteUser,
};
