const router = require('express').Router();
const { verifyAuth } = require('../middlewares/auth');
const { getSales, salesById, postSale } = require('../controllers/saleController');

router.post('/', verifyAuth, postSale);

router.get('/', getSales);

router.get('/:id', salesById);

module.exports = router;
