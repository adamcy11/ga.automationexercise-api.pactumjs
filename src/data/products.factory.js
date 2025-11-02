export function makeProduct(overrides = {}) {
  const rand = Math.random().toString(36).slice(2, 8);
  return {
    nome: `Produto ${rand}`,
    preco: 150,
    descricao: 'Item de teste gerado automaticamente',
    quantidade: 5,
    ...overrides
  };
}