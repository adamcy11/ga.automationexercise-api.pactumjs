import { spec } from '../utils/client.js';

before(async () => {
  console.log('Iniciando ambiente');
  const res = await spec().get('/').toss();
  if (res.statusCode >= 500) {
    throw new Error(`Healthcheck falhou: status ${res.statusCode}`);
  }
});

after(() => {
  console.log('Testes Executados');
});