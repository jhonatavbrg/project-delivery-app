const { createSale, createSaleProduct, getIdSale } = require('../services/saleServices');

const postSale = async (req, res) => {
  const { user } = req;
  const { sales, seller, address } = req.body;

  const sale = await createSale({ sales, seller, user, address });

  await Promise.all(sales.map(async ({ id, quantity }) => {
    await createSaleProduct({ productId: id, quantity, saleId: sale.id });
    return null;
  }));
  
  return res.status(201).json(sale);
};

module.exports = {
  postSale,
};