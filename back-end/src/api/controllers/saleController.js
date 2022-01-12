const rescue = require('express-rescue');
const { getSellerById } = require('../services/userServices');
const {  getAllSales, findSaleById, createSale,
  createSaleProduct } = require('../services/saleServices');
const { getSalesProductsBySaleId } = require('../services/salesProducts');

const getSales = rescue(async (_req, res) => {
  const result = await getAllSales();
  return res.status(200).json(result);
});

const postSale = async (req, res) => {
  const { user } = req;
  const { sales, seller, address } = req.body;

  const sale = await createSale({ sales, seller, user, address });
  console.log(sale.id);
  try {
    await Promise.all(sales.map(async ({ id, quantity }) => {
      await createSaleProduct({ productId: id, quantity, saleId: sale.id });
      return null;
    }));
   // const saveSaleId = JSON.parse(localStorage.setItem('saleId', sale.id))
    return res.status(201).json(sale.id);
  } catch (e) {
    return res.status(400).json(e);
  }
};

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
  postSale,
};
