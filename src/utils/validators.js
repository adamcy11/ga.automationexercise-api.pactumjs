import Joi from 'joi';
import { expect } from 'chai';

export function expectJoi(body, schema, label = 'schema') {
  const { error } = schema.validate(body, { abortEarly: false, allowUnknown: true });
  if (error) expect.fail(`Violação de ${label}:\n${error}`);
}