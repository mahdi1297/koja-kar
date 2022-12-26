/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

//https://sharmilas.medium.com/get-started-with-rabbitmq-in-node-js-1adb18d019d0

import * as express from 'express';
import * as path from 'path';
import * as bodyParser from 'body-parser';
import { Bootstrap } from './bootstrap';
import * as morgan from 'morgan';
import * as cors from 'cors';
import { environment } from './environments/environment.prod';

const port = process.env.port || 3333;

const app = express();

// connect mysql

if (environment.production) {
  app.use(morgan('tiny'));
}

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use(bodyParser.json());
app.use(cors());
app.use(new Bootstrap().baseRoutes);

const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});

server.on('error', console.error);
