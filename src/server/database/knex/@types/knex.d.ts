import { IOs, IUsers } from '../../models';


declare module 'knex/types/tables' {
  interface Tables {
    users: IUsers,
    os: IOs
    // pessoa: IPessoa
    // usuario: IUsuario
  }
}
