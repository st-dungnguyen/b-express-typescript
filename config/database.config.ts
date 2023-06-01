import { join } from 'path';
import { DataSource } from 'typeorm';
import { entities } from '../src/entities';
import { appConfig } from './app.config';

export const mysql = new DataSource({
  type: 'mysql',
  host: appConfig.databases.mysql.host,
  port: appConfig.databases.mysql.port,
  username: appConfig.databases.mysql.user,
  password: appConfig.databases.mysql.password,
  database: appConfig.databases.mysql.database,
  synchronize: false,
  logging: true,
  entities,
  migrations: [join(__dirname, '../', 'db/migrations/*.ts')],
  subscribers: [],
});
