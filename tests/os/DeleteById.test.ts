import { StatusCodes } from 'http-status-codes';

import { testServer } from '../jest.setup';


describe('Os - DeleteById', () => {

  it('Apaga registro', async () => {

    const res1 = await testServer
      .post('/os')
      .send({ 
          model: "Este campo é obrigatório",
          problem: "Cliente reclama de seu aparelho não estar conectando a wifi e bateria não segurar carga"
        });

    expect(res1.statusCode).toEqual(StatusCodes.CREATED);

    const resApagada = await testServer
      .delete(`/os/${res1.body}`)
      .send();

    expect(resApagada.statusCode).toEqual(StatusCodes.NO_CONTENT);
  });
});
