import { ETableNames } from '../../ETableNames';
import { IOs } from '../../models';
import { Knex } from '../../knex';


export const updateById = async (id: number, os: Omit<IOs, 'id'>): Promise<void | Error> => {
  try {
    const result = await Knex(ETableNames.os)
      .update(os)
      .where('id', '=', id)
      

      if (result > 0) return;

      return new Error('Erro ao consultar os registros');
    } catch (error) {
      console.log(error);
      return new Error('Erro ao consultar os registros');
    }
};
