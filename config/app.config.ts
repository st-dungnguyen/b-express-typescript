import dotenv from 'dotenv';
dotenv.config();

export interface AppConfig {
  env: string;
  port: number;
  databases: {
    mysql: {
      host: string;
      port: number;
      user: string;
      password: string;
      database: string;
    };
  };
}

export const appConfig: AppConfig = {
  env: process.env.NODE_ENV || 'dev',
  port: parseInt(process.env.PORT || '3000'),
  databases: {
    mysql: {
      host: process.env.MYSQL_HOST || '127.0.0.1',
      port: parseInt(process.env.MYSQL_PORT || '3306'),
      user: process.env.MYSQL_USER || 'root',
      password: process.env.MYSQL_PASSWORD || 'Abcd1234',
      database: process.env.MYSQL_DATABASE || 'example',
    },
  },
};
