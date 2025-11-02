import { spec } from '../../src/utils/client.js';
import { expect } from 'chai';
import { makeUser } from '../../src/data/users.factory.js';
import { listUsers, userById, commonMessage } from '../../src/schemas/user.schema.js';
import { expectJoi } from '../../src/utils/validators.js';

let createdId;
let createdUserPayload;

describe('Usuários - CRUD completo', () => {

    it('GET /usuarios — deve listar usuários (contrato OK)', async () => {
        // Arrange
        const s = spec();

        // Act
        const res = await s.get('/usuarios').toss();

        // Assert
        expect(res.statusCode).to.equal(200);
        expectJoi(res.body, listUsers, 'listUsers');
    });

    it('POST /usuarios — deve criar novo usuário', async () => {
        // Arrange
        createdUserPayload = makeUser();

        // Act
        const res = await spec().post('/usuarios').withJson(createdUserPayload).toss();

        // Assert
        expect(res.statusCode).to.equal(201);
        expectJoi(res.body, commonMessage, 'createUser');
        createdId = res.body._id;
    });

    it('GET /usuarios/:id — deve retornar o usuário criado', async () => {
        // Act
        const res = await spec().get(`/usuarios/${createdId}`).toss();

        // Assert
        expect(res.statusCode).to.equal(200);
        expectJoi(res.body, userById, 'userById');
    });

    it('PUT /usuarios/:id — deve atualizar o nome do usuário', async () => {
        // Arrange
        const updatePayload = {
            ...createdUserPayload, // mantém todos os campos
            nome: 'Usuário Atualizado'
        };
        // Act
        const res = await spec().put(`/usuarios/${createdId}`).withJson(updatePayload).toss();

        // Assert
        expect(res.statusCode).to.equal(200);
        expectJoi(res.body, commonMessage, 'updateUser');
    });

    it('DELETE /usuarios/:id — deve deletar o usuário criado', async () => {
        // Act
        const res = await spec().delete(`/usuarios/${createdId}`).toss();

        // Assert
        expect(res.statusCode).to.equal(200);
        expectJoi(res.body, commonMessage, 'deleteUser');
    });

});