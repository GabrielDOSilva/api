import { StatusCodes } from 'http-status-codes';

import { testServer } from '../jest.setup';


describe('/clients - GetAll', () => {

  it('Buscar todos os registros', async () => {

    const res1 = await testServer
      .post('/clients')
      .send({ 
        name: 'Gabriel',
        sobrenome: 'Silva',
        email: 'gabriel@email.com',
      });

    expect(res1.statusCode).toEqual(StatusCodes.CREATED);

    const resBuscada = await testServer
      .get('/clients')
      .send();

    expect(Number(resBuscada.header['x-total-count'])).toBeGreaterThan(0);
    expect(resBuscada.statusCode).toEqual(StatusCodes.OK);
    expect(resBuscada.body.length).toBeGreaterThan(0);
  });
});
