import Joi = require('joi');

export const VALIDATE_ID = Joi.object().keys({
  id: Joi.string().guid({ version: 'uuidv4' }).required(),
});
