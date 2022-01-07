const userServices = require('../services/userServices');

const getAllSellers = async (req, res) => {
  userServices.getAllSellers().then((data) => res.status(200).json(data));
};

module.exports = {
  getAllSellers,
};