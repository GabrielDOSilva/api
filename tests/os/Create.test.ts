import { StatusCodes } from 'http-status-codes';

import { testServer } from '../jest.setup';


describe('Os - Create', () => {

  it('Cria registro', async () => {

    const res1 = await testServer
      .post('/os')
      .send({ 
        model: "Este campo é obrigatório",
		    problem: "Cliente reclama de seu aparelho não estar conectando a wifi e bateria não segurar carga"
      });

    expect(res1.statusCode).toEqual(StatusCodes.CREATED);
    expect(typeof res1.body).toEqual('number');
  });
});

