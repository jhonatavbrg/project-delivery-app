// const { salesProduct, product } = require('../../database/models');

// const getSalesProductsBySaleId = async (saleId) => {
//   const sales = await salesProduct.findAll({ where: saleId }).toArray();
//   const newListProducts = [];
//   for (let index = 0; index < sales.length; index += 1) {
//     const products = await product.findByPk(sales[index].product_id);
//     newListProducts.push({
//       productName: products.name,
//       productPrice: products.price,
//       quantity: sales[index].quantity,
//     });
//   }
//   return newListProducts;
// };

// module.exports = {
//   getSalesProductsBySaleId,
// };

// sales = {
//   [
//     {
//       sale_id: 1,
//       product_id: 1,
//       quantity: 2,
//     },
//     {
//       sale_id: 1,
//       product_id: 2,
//       quantity: 1,
//     },
//     {
//       sale_id: 1,
//       product_id: 5,
//       quantity: 2,
//     },
//   ],
// };