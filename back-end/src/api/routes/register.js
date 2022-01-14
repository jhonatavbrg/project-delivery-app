const express = require('express');

const { verifyAuth } = require('../middlewares/auth');

const router = express.Router();

const { register, registerADM } = require('../controllers/registerController');

router.post('/', register);

router.post('/registeradm', verifyAuth, registerADM);

module.exports = router;
