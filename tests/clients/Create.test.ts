import { StatusCodes } from 'http-status-codes';
import { testServer } from '../jest.setup';



describe('Clients - create', () => {



    it('Create', async () => {

        const res1 = await testServer.post('/clients')
            .send({
                name: 'Gabriel',
                sobrenome: 'Silva',
                email: 'gabriel@email.com',
            });
        expect(res1.statusCode).toEqual(StatusCodes.CREATED);
        expect(typeof res1.body).toEqual('number');

    });

}); 

