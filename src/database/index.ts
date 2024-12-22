import 'dotenv/config';
import knexConfig from 'knex';

export const knex = knexConfig({
  client: "pg",
  connection: 'postgres://postgres:postgres@database:5432/express-docker',
})