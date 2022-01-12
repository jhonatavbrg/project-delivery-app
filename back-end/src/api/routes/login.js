const router = require('express').Router();
const { validateLoginPayload } = require('../middlewares/validators');

const loginController = require('../controllers/loginController');

router.post('/', validateLoginPayload, loginController.login);

module.exports = router;
