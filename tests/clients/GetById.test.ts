import { StatusCodes } from 'http-status-codes';

import { testServer } from '../jest.setup';


describe('/clients - GetById', () => {

  it('Busca registro por id', async () => {

    const res1 = await testServer
      .post('/clients')
      .send({ 
        name: 'Gabriel',
        sobrenome: 'Silva',
        email: 'gabriel@email.com',
      });

    expect(res1.statusCode).toEqual(StatusCodes.CREATED);

    const resBuscada = await testServer
      .get(`/clients/${res1.body}`)
      .send();

    expect(resBuscada.statusCode).toEqual(StatusCodes.OK);
    expect(resBuscada.body).toHaveProperty('name');
  });
});
