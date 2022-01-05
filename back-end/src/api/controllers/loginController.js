const loginServices = require('../services/loginServices');

const login = async (req, res) => {
  const { email, password } = req.body;
  const token = await loginServices.login({ email, password });
  if (token) {
    res.status(200).json({ token });
  } else {
    res.status(404).json({
      status: 404,
      error: 'User not found',
    });
  }
};

module.exports = {
  login,
};
