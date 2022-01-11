const rescue = require('express-rescue');
const { getAllSales, findSaleById } = require('../services/salesServices');

const getSales = rescue(async (_req, res) => {
  const result = await getAllSales();
  return res.status(200).json(result);
});

const salesById = rescue(async (req, res) => {
  const { id } = req.params;
  const result = await findSaleById(id);
  if (!result) return res.status(404).json({ message: 'Venda não encontrada' });
  return res.status(200).json(result);
});

module.exports = {
  getSales,
  salesById,
};
