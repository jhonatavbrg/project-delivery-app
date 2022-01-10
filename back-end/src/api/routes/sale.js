const express = require('express');

const router = express.Router();

const { getSales, salesById } = require('../controllers/saleController');

router.get('/', getSales);

router.get('/:id', salesById);

module.exports = router;
