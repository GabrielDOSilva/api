import { StatusCodes } from 'http-status-codes';

import { testServer } from '../jest.setup';


describe('Os - GetAll', () => {

  it('Buscar todos os registros', async () => {

    const res1 = await testServer
      .post('/os')
      .send({ 
        model: "Este campo é obrigatório",
		    problem: "Cliente reclama de seu aparelho não estar conectando a wifi e bateria não segurar carga"
      });

    expect(res1.statusCode).toEqual(StatusCodes.CREATED);

    const resBuscada = await testServer
      .get('/os')
      .send();

    expect(Number(resBuscada.header['x-total-count'])).toBeGreaterThan(0);
    expect(resBuscada.statusCode).toEqual(StatusCodes.OK);
    expect(resBuscada.body.length).toBeGreaterThan(0);
  });
});
