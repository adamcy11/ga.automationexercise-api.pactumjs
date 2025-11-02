export function makeUser(overrides = {}) {
  const rand = Math.random().toString(36).slice(2, 8); // gera string aleatória
  return {
    nome: `User ${rand}`,
    email: `user_${rand}@test.com`,
    password: 'secret',
    administrador: 'true',
    ...overrides
  };
}