const rescue = require('express-rescue');
const { getSellerById } = require('../services/userServices');
const { getAllSales, findSaleById } = require('../services/salesServices');
const { getSalesProductsBySaleId } = require('../services/salesProducts');

const getSales = rescue(async (_req, res) => {
  const result = await getAllSales();
  return res.status(200).json(result);
});

const salesById = rescue(async (req, res) => {
  const { id } = req.params;
  const result = await findSaleById(id);
  const seller = await getSellerById(result.seller_id);
  const salesDetails = await getSalesProductsBySaleId(id);
  const productsDetail = { sellerName: seller.name, ...result, saleProduct: { ...salesDetails } };
  console.log(productsDetail);
  if (!result) return res.status(404).json({ message: 'Venda não encontrada' });
  return res.status(200).json(productsDetail);
});

module.exports = {
  getSales,
  salesById,
};
