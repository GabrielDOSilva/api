import { Knex } from 'knex';
import { ETablelNames } from '../ETablesNames';


export async function up(knex: Knex) {
    return knex.schema.createTable(ETablelNames.users, table => {
        table.bigIncrements('id').primary().index();
        table.string('nome', 150).index().notNullable();
        table.string('email', 150).index().notNullable();
        table.string('senha', 150).index().notNullable();
    }).then(() => {
        console.log('Criada tabela users')
    });
}


export async function down(knex: Knex) {
    return knex.schema.dropTable('users');
}
