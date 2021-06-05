const Joi = require('joi');

const luzSchema = Joi.object({
  luz: Joi.number().min(0).max(100).required()
});

module.exports = {
  luzSchema
};
