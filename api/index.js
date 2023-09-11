import express from 'express';
import config from '../config.js';
import user from './components/user/routes.js'
import bodyParser from 'body-parser'
import auth from './components/auth/routes.js'

const app = express();

app.use(bodyParser.json())
// ROUTER
app.use('/api/user', user);
app.use('/api/auth', auth)

app.listen(config.api.port, () => {
    console.log(`Api listening on port ${config.api.port}`);
})