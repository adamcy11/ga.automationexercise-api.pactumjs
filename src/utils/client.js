import pactum from 'pactum';
import { config } from 'dotenv';

// carregar variáveis
config();

// base da API 
pactum.request.setBaseUrl(process.env.BASE_URL || 'https://serverest.dev');
pactum.request.setDefaultTimeout(20000);

// exporta o spec 
export const spec = pactum.spec;
export default pactum;