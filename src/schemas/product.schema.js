import Joi from 'joi';

export const product = Joi.object({
  nome: Joi.string().required(),
  preco: Joi.number().required(),
  descricao: Joi.string().required(),
  quantidade: Joi.number().required(),
  _id: Joi.string().optional()
});

export const listProducts = Joi.object({
  quantidade: Joi.number().required(),
  produtos: Joi.array().items(product).required()
});