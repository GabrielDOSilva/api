import { StatusCodes } from 'http-status-codes';

import { testServer } from '../jest.setup';


describe('/users - DeleteById', () => {

  it('Apaga registro', async () => {

    const res1 = await testServer
      .post('/users')
      .send({ 
        name: 'Gabriel',
        sobrenome: 'Silva',
        email: 'gabriel@email.com',
        senha: 'gabriel123101010'
        });

    expect(res1.statusCode).toEqual(StatusCodes.CREATED);

    const resApagada = await testServer
      .delete(`/users/${res1.body}`)
      .send();

    expect(resApagada.statusCode).toEqual(StatusCodes.NO_CONTENT);
  });
});
