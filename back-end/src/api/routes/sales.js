const router = require('express').Router();
const { verifyAuth } = require('../middlewares/auth');
const { postSale } = require('../controllers/salesController');

router.post('/', verifyAuth, postSale);

module.exports = router;