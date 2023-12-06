import { StatusCodes } from 'http-status-codes';

import { testServer } from '../jest.setup';


describe('Os - GetById', () => {

  it('Busca registro por id', async () => {

    const res1 = await testServer
      .post('/os')
      .send({ 
        model: "Este campo é obrigatório",
		    problem: "Cliente reclama de seu aparelho não estar conectando a wifi e bateria não segurar carga"
      });

    expect(res1.statusCode).toEqual(StatusCodes.CREATED);

    const resBuscada = await testServer
      .get(`/os/${res1.body}`)
      .send();

    expect(resBuscada.statusCode).toEqual(StatusCodes.OK);
    expect(resBuscada.body).toHaveProperty('model');
  });
});
