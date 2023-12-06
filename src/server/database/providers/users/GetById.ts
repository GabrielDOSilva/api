import { ETableNames } from '../../ETableNames';
import { IUsers } from '../../models';
import { Knex } from '../../knex';


export const getById = async (id: number): Promise<IUsers | Error> => {
  try {
    const result = await Knex(ETableNames.users)
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
