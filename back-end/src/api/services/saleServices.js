const { sale, salesProduct } = require('../../database/models');

const createSale = async ({ sales, seller, user, address }) => {
  const totalPrice = sales.reduce(
    (acc, { price, quantity }) => acc + (Number(price) * quantity), 0,
  ).toFixed(2);

  const createdSale = await sale.create({ 
    user_id: user.id,
    seller_id: seller,
    total_price: totalPrice,
    delivery_address: address.address,
    delivery_number: address.number,
    status: 'Pendente' });
    //console.log(createdSale);
  return createdSale;
};


const createSaleProduct = async ({ productId, saleId, quantity }) => {
  await salesProduct.create({ 
    product_id: productId,
    quantity,
    sale_id: saleId });
}; 

module.exports = {
  createSale,
  createSaleProduct,
};