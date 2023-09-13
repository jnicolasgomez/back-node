import express from 'express';
import config from '../config.js';
import bodyParser from 'body-parser';
import errors from '../network/errors.js';
import router from './routes.js';

const app = express();

app.use(bodyParser.json());

app.use('/', router);

app.use(errors);

app.listen(config.mysqlService.port, () => {
    console.log(`MySQLService listening on port ${config.mysqlService.port}`);
});