const Joi = require('joi');

const validateLoginPayload = async (req, res, next) => {
  const { error } = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  }).validate(req.body);

  if(error) {
    return res.status(400).json({
      status: 400,
      error: error.details[0].message,
    });
  }

  return next();
}

module.exports = {
  validateLoginPayload
};
