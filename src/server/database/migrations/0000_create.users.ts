import { Knex } from 'knex';
import { ETableNames } from '../ETableNames';


export async function up(Knex: Knex) {
    return Knex.schema.createTable(ETableNames.users, table => {
        table.bigIncrements('id').primary().index();
        table.string('name', 1).checkLength('<=', 150).index().notNullable();
        table.string('sobrenome', 1).checkLength('<=', 150).index().notNullable();
        table.string('email', 10).checkLength('<=', 150).index().notNullable();
        table.string('senha', 10).checkLength('<=', 150).index().notNullable();
    }).then(() => {
        console.log(`# Criada tabela ${ETableNames.users}`)
    });
}


export async function down(knex: Knex) {
    return knex.schema.dropTable(ETableNames.users).then(() => {
        console.log(`# Dropped table ${ETableNames.users}`);
      });
}
