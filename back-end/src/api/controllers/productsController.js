const rescue = require('express-rescue');
const { getProducts } = require('../services/productsServices');

const products = rescue(async (_req, res) => {
  const result = await getProducts();
  return res.status(200).json(result);
});

module.exports = {
  products,
};
