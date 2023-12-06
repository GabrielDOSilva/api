import { ETableNames } from '../../ETableNames';
import { IOs } from '../../models';
import { Knex } from '../../knex';


export const create = async (os: Omit<IOs, 'id'>): Promise<number | Error> => {
  try {
    const [result] = await Knex(ETableNames.os).insert([os]).returning('id');

    if (typeof result === 'object') {
      return result.id;
    } else if (typeof result === 'number') {
      return result;
    }

    return new Error('Erro ao cadastrar o registro');
  } catch (error) {
    console.log(error);
    return new Error('Erro ao cadastrar o registro');
  }
};
