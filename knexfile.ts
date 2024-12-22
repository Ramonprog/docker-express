import 'dotenv/config';
import { Knex } from "knex";
import path from 'node:path';

const condig: Knex.Config = {
  client: "postgresql",
  connection: process.env.DB_CONN_STRING,
  migrations: {
    tableName: "knex_migrations",
    directory: path.join(__dirname, 'src', 'database', 'migrations'),
  }
};

export default condig;