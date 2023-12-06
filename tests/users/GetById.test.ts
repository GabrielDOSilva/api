import { StatusCodes } from 'http-status-codes';

import { testServer } from '../jest.setup';


describe('/users - GetById', () => {

  it('Busca registro por id', async () => {

    const res1 = await testServer
      .post('/users')
      .send({ 
        name: 'Gabriel',
        sobrenome: 'Silva',
        email: 'gabriel@email.com',
        senha: 'gabriel123101010'
      });

    expect(res1.statusCode).toEqual(StatusCodes.CREATED);

    const resBuscada = await testServer
      .get(`/users/${res1.body}`)
      .send();

    expect(resBuscada.statusCode).toEqual(StatusCodes.OK);
    expect(resBuscada.body).toHaveProperty('name');
  });
});
