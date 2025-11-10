# Teste de Automação de API – Automation Exercise
<br>
<br>

## Tecnologias Utilizadas  

- [Node.js](https://nodejs.org/) (v18 ou superior)  
- [PactumJS](https://pactumjs.github.io/)  
- [Mocha](https://mochajs.org/)  
- [Chai](https://www.chaijs.com/)  
- [Joi](https://joi.dev/)  
- [Mochawesome](https://www.npmjs.com/package/mochawesome)  
- [GitHub Actions](https://github.com/features/actions) (para CI/CD)
- [Java](https://www.oracle.com/java/technologies/downloads/#jdk21-windows)

<br>
<br>

## Pré-requisitos  

Antes de iniciar, verifique se você possui instalado:  

- **Node.js** (versão 18 ou superior)  
- **npm** (gerenciador de pacotes do Node)  
- **Git** configurado
  
<br>
<br>

## Instalação  

1. **Clone o repositório**

```bash
git clone https://github.com/adamcy11/qa.automationexercise-api.pactumjs.git
```

2. **Acesse a pasta do projeto:**

```bash
cd qa.automationexercise-api.pactumjs
```

3. **Instale as dependências:**

```bash
npm install
```

## Executando os Testes

1. **Rodar todos os testes:**

```bash
npm test
```

<br>
<br>

2. **Executar uma suíte específica**

- Executa verificações de health check da API:

```bash
npm run test:health
```

 - Valida contratos e schemas Joi dos endpoints (login, usuários, produtos):

```bash
npm run test:contract
```

 - Executa o CRUD completo de usuários:

```bash
npm run test:users
```

 - Executa o CRUD completo de produtos autenticados:

```bash
npm run test:products
```

<br>
<br>

## Relatórios

- Localmente executar com múltiplos repórteres (JUnit + Mochawesome):

```bash
npm run test:ci
```

- Abrir o relatório HTML (Mochawesome):

 **Caminho:** mochawesome-report/mochawesome.html

- Arquivo JUnit XML (para integrações):

**Caminho:** reports/test-results.xml
