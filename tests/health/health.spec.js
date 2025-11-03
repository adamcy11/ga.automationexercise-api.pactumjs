import { spec } from '../../src/utils/client.js';
import { expect } from 'chai';

describe('Healthcheck', () => {
  it('GET / deve responder 200', async () => {
    const res = await spec().get('/').toss();
    expect(res.statusCode).to.equal(200);
  });
});