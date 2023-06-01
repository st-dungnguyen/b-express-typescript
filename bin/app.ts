import bodyParser from 'body-parser';
import cors from 'cors';
import express, { Express } from 'express';
// @ts-ignore
import helmet from 'helmet';
import morgan from 'morgan';
import { appConfig } from '../config/app.config';
import { mysql } from '../config/database.config';
import { errorHandler } from '../src/middleware/handler.middleware';
import { routers } from '../src/routes';

// connecting to database
mysql
  .initialize()
  .then((output) => {
    console.log('Initialized');

    return output;
  })
  .catch((err) => {
    console.log(err);
  });

const app: Express = express();

// adding Helmet to enhance your API's security
app.use(helmet());

// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());

// enabling CORS for all requests
app.use(cors());

// adding morgan to log HTTP requests
app.use(morgan('combined'));

// defining endpoint APIs
routers.map((router: { path: string; route: any }) => {
  app.use(router.path, router.route);
});

app.use(errorHandler);

// starting the server
app.listen(appConfig.port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${appConfig.port}`);
});
