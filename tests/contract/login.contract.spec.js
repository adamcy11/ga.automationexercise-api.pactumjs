import { spec } from '../../src/utils/client.js';
import { expect } from 'chai';
import { loginResponse } from '../../src/schemas/login.schema.js';
import { expectJoi } from '../../src/utils/validators.js';

describe('Login - contrato', () => {
  it('POST /login deve retornar 200 e obedecer o schema', async () => {
    const payload = {
      email: process.env.ADMIN_EMAIL,
      password: process.env.ADMIN_PASSWORD
    };

    const res = await spec().post('/login').withJson(payload).toss();

    expect(res.statusCode).to.equal(200);
    expectJoi(res.body, loginResponse, 'loginResponse');
  });
});