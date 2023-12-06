import { StatusCodes } from 'http-status-codes';

import { testServer } from '../jest.setup';


describe('/users - UpdateById', () => {

  it('Atualiza registro', async () => {

    const res1 = await testServer
      .post('/users')
      .send({
        name: 'Gabriel',
        sobrenome: 'Silva',
        email: 'gabriel@email.com',
        senha: 'gabriel123101010'
      });

    expect(res1.statusCode).toEqual(StatusCodes.CREATED);

    const resAtualizada = await testServer
      .put(`/users/${res1.body}`)
      .send({
        name: 'Gabriel',
        sobrenome: 'Silva',
        email: 'gabrielsilva@email.com',
        senha: 'gabriel99999999'
      });

    expect(resAtualizada.statusCode).toEqual(StatusCodes.NO_CONTENT);
  });
});
