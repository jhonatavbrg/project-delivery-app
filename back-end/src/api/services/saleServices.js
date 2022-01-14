const { sale, salesProduct } = require('../../database/models');

const userId = 'user_id';
const sellerId = 'seller_id';
const totalprice = 'total_price';
const deliveryAddress = 'delivery_address';
const deliveryNumber = 'delivery_number';
const productid = 'product_id';
const saleid = 'sale_id';
const createSale = async ({ sales, seller, user, address }) => {
  const totalPrice = sales.reduce(
    (acc, { price, quantity }) => acc + (Number(price) * quantity), 0,
  ).toFixed(2);

  const createdSale = await sale.create({ 
    [userId]: user.id,
    [sellerId]: seller,
    [totalprice]: totalPrice,
    [deliveryAddress]: address.address,
    [deliveryNumber]: address.number,
    status: 'Pendente' });
  return createdSale;
};

const createSaleProduct = async ({ productId, saleId, quantity }) => {
  await salesProduct.create({ 
    [productid]: productId,
    quantity,
    [saleid]: saleId });
};

const getAllSales = async () => sale.findAll();

const findSaleById = async (id) => {
  const { dataValues: saleById } = await sale.findByPk(id);
  return saleById;
};

const changeStatus = ({ status, id }) => sale.update({ status }, { where: { id } });

module.exports = {
  getAllSales,
  findSaleById,
  createSale,
  createSaleProduct,
  changeStatus,
};
