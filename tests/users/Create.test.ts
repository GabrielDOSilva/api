import { StatusCodes } from 'http-status-codes';
import { testServer } from '../jest.setup';



describe('Users - create', () => {



    it('Create', async () => {

        const res1 = await testServer.post('/users')
            .send({
                name: 'Gabriel',
                sobrenome: 'Silva',
                email: 'gabriel@email.com',
                senha: 'gabriel123101010'
            });
        expect(res1.statusCode).toEqual(StatusCodes.CREATED);
        expect(typeof res1.body).toEqual('number');

    });

}); 

