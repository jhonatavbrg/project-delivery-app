const router = require('express').Router();

const userController = require('../controllers/userController');

router.get('/sellers', userController.getAllSellers);

router.get('/users', userController.getAllUsers);

router.delete('/', userController.deleteUser);

module.exports = router;
