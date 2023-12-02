import { StatusCodes } from 'http-status-codes';
import { testServer } from '../jest.setup';



describe('Users - create', () => {



    it('Create', async () => {

        const res1 = await testServer.post('/users')
            .send({
                name: 'Gabriel',
                sobrenome: 'Silva',
                email: 'gabriel@email.com',
                cpf: '12345678910'
            });
        expect(res1.statusCode).toEqual(StatusCodes.CREATED);
        expect(typeof res1.body).toEqual('number');

    });

    it('CPF incompleto', async () => {

        const res1 = await testServer.post('/users')
            .send({
                name: 'Gabriel',
                sobrenome: 'Silva',
                email: 'gabriel@email.com',
                cpf: '1234567891'
            });
        expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST);
        expect(typeof res1.body).toHaveProperty('errors.body.name');
        expect(typeof res1.body).toHaveProperty('errors.body.sobrenome');
        expect(typeof res1.body).toHaveProperty('errors.body.email');
        expect(typeof res1.body).toHaveProperty('errors.body.cpf');

    });

    it('O campo nome não pode estar vazio', async () => {

        const res1 = await testServer.post('/users')
            .send({
                name: '',
                sobrenome: 'Silva',
                email: 'gabriel@email.com',
                cpf: '1234567891'
            });
        expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST);
        expect(typeof res1.body).toHaveProperty('errors.body.name');
        expect(typeof res1.body).toHaveProperty('errors.body.sobrenome');
        expect(typeof res1.body).toHaveProperty('errors.body.email');
        expect(typeof res1.body).toHaveProperty('errors.body.cpf');

    });

    it('O campo sobrenome não pode estar vazio', async () => {

        const res1 = await testServer.post('/users')
            .send({
                name: 'Gabriel',
                sobrenome: '',
                email: 'gabriel@email.com',
                cpf: '1234567891'
            });
        expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST);
        expect(typeof res1.body).toHaveProperty('errors.body.name');
        expect(typeof res1.body).toHaveProperty('errors.body.sobrenome');
        expect(typeof res1.body).toHaveProperty('errors.body.email');
        expect(typeof res1.body).toHaveProperty('errors.body.cpf');

    });

    it('O campo email não pode estar vazio', async () => {

        const res1 = await testServer.post('/users')
            .send({
                name: 'Gabriel',
                sobrenome: 'Silva',
                email: '',
                cpf: '1234567891'
            });
        expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST);
        expect(typeof res1.body).toHaveProperty('errors.body.name');
        expect(typeof res1.body).toHaveProperty('errors.body.sobrenome');
        expect(typeof res1.body).toHaveProperty('errors.body.email');
        expect(typeof res1.body).toHaveProperty('errors.body.cpf');

    });

    it('O campo CPF não pode estar vazio', async () => {

        const res1 = await testServer.post('/users')
            .send({
                name: 'Gabriel',
                sobrenome: 'Silva',
                email: 'gabriel@email.com',
                cpf: ''
            });
        expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST);
        expect(typeof res1.body).toHaveProperty('errors.body.name');
        expect(typeof res1.body).toHaveProperty('errors.body.sobrenome');
        expect(typeof res1.body).toHaveProperty('errors.body.email');
        expect(typeof res1.body).toHaveProperty('errors.body.cpf');

    });

}); 
