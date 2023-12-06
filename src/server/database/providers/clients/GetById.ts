import { ETableNames } from '../../ETableNames';
import { IClients } from '../../models';
import { Knex } from '../../knex';


export const getById = async (id: number): Promise<IClients | Error> => {
  try {
    const result = await Knex(ETableNames.clients)
    .select('*')
    .where('id', '=', id)
    .first();

    if (result) return result;

    return new Error('Erro ao consultar os registros');
  } catch (error) {
    console.log(error);
    return new Error('Erro ao consultar os registros');
  }
};
