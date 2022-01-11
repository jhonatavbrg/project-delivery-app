const { sale, salesProduct } = require('../../database/models');

const createSale = async ({ sales, seller, user, address }) => {
  const totalPrice = sales.reduce(
    (acc, { price, quantity }) => acc + (Number(price) * quantity), 0,
  ).toFixed(2);
  console.log(seller);

  const createdSale = await sale.create({ 
    user_id: user.id,
    seller_id: seller,
    total_price: totalPrice,
    delivery_address: address.address,
    delivery_number: address.number,
    status: 'Pendente' });

  return createdSale;
};

// const getIdSale = async (user_id, seller_id) => {
//   const idSale = await sale.findOne({ where: { user_id, seller_id } });
//   return idSale;
// };

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