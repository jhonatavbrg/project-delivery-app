const { sale } = require('../../database/models');

const getAllSales = async () => sale.findAll();

const findSaleById = async (id) => {
  const saleById = await sale.findByPk(id);
  return saleById;
};

module.exports = {
  getAllSales,
  findSaleById,
};
