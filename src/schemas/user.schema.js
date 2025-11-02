import Joi from 'joi';

export const listUsers = Joi.object({
  quantidade: Joi.number().required(),
  usuarios: Joi.array().items(Joi.object({
  nome: Joi.string().required(),
  email: Joi.string().required(),
  _id: Joi.string().required()
  })).required()
});

export const userById = Joi.object({
  nome: Joi.string().required(),
  email: Joi.string().required(),
  _id: Joi.string().required()
});

export const commonMessage = Joi.object({
  message: Joi.string().required(),
  _id: Joi.string().optional()
});