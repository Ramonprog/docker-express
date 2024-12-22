import { Knex } from "knex";
import path from 'node:path';

const condig: Knex.Config = {
  client: "postgresql",
  connection: 'postgres://postgres:postgres@localhost:5432/express-docker',
  migrations: {
    tableName: "knex_migrations",
    directory: path.join(__dirname, 'src', 'database', 'migrations'),
  }
};

export default condig;