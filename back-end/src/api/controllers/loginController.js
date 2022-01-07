const loginServices = require('../services/loginServices');

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await loginServices.login({ email, password });
  if (user) {
    res.status(200).json({ user });
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
