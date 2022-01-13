const { salesProduct, product } = require('../../database/models');

const SALE_ID = 'sale_id';

const getSalesProductsBySaleId = async (saleId) => {
  const sales = await salesProduct.findAll({ where: { [SALE_ID]: saleId } });
  const newListProducts = [];
  await Promise.all(sales.map(async ({ product_id: productId, quantity }) => {
    const products = await product.findByPk(productId);
    newListProducts.push({
      productId: products.id,
      productName: products.name,
      productPrice: products.price,
      quantity,
    });
    return null;
  }));
  return newListProducts;
};

module.exports = {
  getSalesProductsBySaleId,
};
