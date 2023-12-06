import { ETableNames } from '../../ETableNames';
import { IUsers } from '../../models';
import { Knex } from '../../knex';


export const updateById = async (id: number, users: Omit<IUsers, 'id'>): Promise<void | Error> => {
  try {
    const result = await Knex(ETableNames.users)
      .update(users)
      .where('id', '=', id)
      

      if (result > 0) return;

      return new Error('Erro ao consultar os registros');
    } catch (error) {
      console.log(error);
      return new Error('Erro ao consultar os registros');
    }
};
