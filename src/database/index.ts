import knexConfig from 'knex';

export const knex = knexConfig({
  client: "pg",
  connection: 'postgres://postgres:postgres@localhost:5432/express-docker',
})