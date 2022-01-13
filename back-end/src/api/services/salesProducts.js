const { salesProduct, product } = require('../../database/models');

const getSalesProductsBySaleId = async (saleId) => {
  const sales = await salesProduct.findAll({ where: { sale_id: saleId } });
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
