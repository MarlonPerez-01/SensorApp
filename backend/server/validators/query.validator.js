const Joi = require('joi');

const idSchema = Joi.object({
  id: Joi.number().positive()
});

const intervaloSchema = Joi.object({
  desde: Joi.number().positive(),
  limite: Joi.number().positive()
});

module.exports = {
  idSchema,
  intervaloSchema
};
