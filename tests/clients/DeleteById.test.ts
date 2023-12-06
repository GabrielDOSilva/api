import { StatusCodes } from 'http-status-codes';

import { testServer } from '../jest.setup';


describe('/clients - DeleteById', () => {

  it('Apaga registro', async () => {

    const res1 = await testServer
      .post('/clients')
      .send({ 
        name: 'Gabriel',
        sobrenome: 'Silva',
        email: 'gabriel@email.com',
        });

    expect(res1.statusCode).toEqual(StatusCodes.CREATED);

    const resApagada = await testServer
      .delete(`/clients/${res1.body}`)
      .send();

    expect(resApagada.statusCode).toEqual(StatusCodes.NO_CONTENT);
  });
});
