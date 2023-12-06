import { StatusCodes } from 'http-status-codes';

import { testServer } from '../jest.setup';


describe('/clients - UpdateById', () => {

  it('Atualiza registro', async () => {

    const res1 = await testServer
      .post('/clients')
      .send({
        name: 'Gabriel',
        sobrenome: 'Silva',
        email: 'gabriel@email.com',
      });

    expect(res1.statusCode).toEqual(StatusCodes.CREATED);

    const resAtualizada = await testServer
      .put(`/clients/${res1.body}`)
      .send({
        name: 'Gabriel',
        sobrenome: 'Silva',
        email: 'gabrielsilva@email.com',
      });

    expect(resAtualizada.statusCode).toEqual(StatusCodes.NO_CONTENT);
  });
});
