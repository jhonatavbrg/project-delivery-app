const { createSale, createSaleProduct } = require('../services/saleServices');


const postSale = async (req, res) => {
  const { user } = req;
  const { sales, seller, address } = req.body;

  const sale = await createSale({ sales, seller, user, address });
  console.log(sale.id);
  try{
    await Promise.all(sales.map(async ({ id, quantity }) => {
      await createSaleProduct({ productId: id, quantity, saleId: sale.id });
      return null;
    }));
   // const saveSaleId = JSON.parse(localStorage.setItem('saleId', sale.id))
    return res.status(201).json(sale.id);
  }catch(e) {
    return res.status(400).json(e);
  }
};

module.exports = {
  postSale,
};