import { spec } from '../../../src/utils/client.js';
import { expect } from 'chai';
import { makeProduct } from '../../../src/data/products.factory.js';
import { listProducts, product as productSchema } from '../../../src/schemas/product.schema.js';
import { expectJoi } from '../../../src/utils/validators.js';

let authToken;
let productId;
let createdProductPayload;

describe('Produtos - CRUD completo', () => {
    
    before(async () => {
        // Arrange
        const payload = { email: process.env.ADMIN_EMAIL, password: process.env.ADMIN_PASSWORD };
        // Act
        const res = await spec().post('/login').withJson(payload).toss();
        // Assert
        expect(res.statusCode).to.equal(200);
        authToken = res.body.authorization; 
    });

    it('GET /produtos — deve listar produtos (contrato OK)', async () => {
        // Act
        const res = await spec().get('/produtos').toss();
        // Assert
        expect(res.statusCode).to.equal(200);
        expectJoi(res.body, listProducts, 'listProducts');
    });

    it('POST /produtos — deve criar novo produto', async () => {
        // Arrange
        createdProductPayload = makeProduct();
        // Act
        const res = await spec()
            .post('/produtos')
            .withHeaders('Authorization', authToken)
            .withJson(createdProductPayload)
            .toss();
        // Assert
        if (res.statusCode !== 201) {
            console.log(' POST /produtos falhou:', res.statusCode, res.body);
        }

        expect(res.statusCode).to.equal(201);
     
        productId = res.body._id;
        expect(productId).to.be.a('string').and.not.empty;
    });

    it('GET /produtos/:id — deve retornar o produto criado', async () => {
        // Act
        const res = await spec().get(`/produtos/${productId}`).toss();
        // Assert
        expect(res.statusCode).to.equal(200);
        expectJoi(res.body, productSchema, 'productById');
    });

    it('PUT /produtos/:id — deve atualizar o preço do produto', async () => {
        // Arrange
        const updatePayload = {
            ...createdProductPayload, // mantém todos os campos exigidos pelo PUT
            preco: 199
        };
       // Act
        const res = await spec()
            .put(`/produtos/${productId}`)
            .withHeaders('Authorization', authToken)
            .withJson(updatePayload)
            .toss();
        // Assert
        expect(res.statusCode).to.equal(200);
       
    });

    it('DELETE /produtos/:id — deve deletar o produto criado', async () => {
        // Act
        const res = await spec()
            .delete(`/produtos/${productId}`)
            .withHeaders('Authorization', authToken)
            .toss();
        // Assert
        expect(res.statusCode).to.equal(200);

    });
});