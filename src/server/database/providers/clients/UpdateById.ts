import { ETableNames } from '../../ETableNames';
import { IClients } from '../../models';
import { Knex } from '../../knex';


export const updateById = async (id: number, clients: Omit<IClients, 'id'>): Promise<void | Error> => {
  try {
    const result = await Knex(ETableNames.clients)
      .update(clients)
      .where('id', '=', id)
      

      if (result > 0) return;

      return new Error('Erro ao consultar os registros');
    } catch (error) {
      console.log(error);
      return new Error('Erro ao consultar os registros');
    }
};
