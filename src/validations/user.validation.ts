import Joi = require('joi');

export const CREATE_USER = Joi.object().keys({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  age: Joi.number().min(18).required(),
});
