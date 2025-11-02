import Joi from 'joi';

export const loginResponse = Joi.object({
  message: Joi.string().required(),
  authorization: Joi.string().required()
});