import knexConfig from 'knex';

export const knex = knexConfig({
  client: "pg",
  connection: process.env.DB_CONN_STRING,
})