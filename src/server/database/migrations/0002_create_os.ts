import { Knex } from 'knex';

import { ETableNames } from '../ETableNames';


export async function up(knex: Knex) {
  return knex
    .schema
    .createTable(ETableNames.os, table => {
      table.bigIncrements('id').primary().index();
      table.string('model', 150).checkLength('<=', 150).index().notNullable();
      table.string('problem', 300).checkLength('<=', 300).index().notNullable();
      table.comment('Tabela usada para armazenar os do sistema.');
    })
    .then(() => {
      console.log(`# Created table ${ETableNames.os}`);
    });
}

export async function down(knex: Knex) {
  return knex
    .schema
    .dropTable(ETableNames.os)
    .then(() => {
      console.log(`# Dropped table ${ETableNames.os}`);
    });
}
