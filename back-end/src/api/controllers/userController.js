const userServices = require('../services/userServices');

const getAllSellers = async (req, res) => {
  userServices.getAllSellers().then((data) => res.status(200).json(data));
};

const getAllUsers = async (req, res) => {
  userServices.getAllUsers().then((data) => res.status(200).json(data));
}

const deleteUser = async (req, res) => {
  userServices.deleteUser().then((data) => res.status(200).json(data));
}

module.exports = {
  getAllSellers,
  getAllUsers,
  deleteUser
};