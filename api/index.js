import express from 'express';
import config from '../config.js';
import user from './components/user/network.js'

const app = express();

// ROUTER

app.listen(config.api.port, () => {
    console.log(`Api listening on port ${config.api.port}`);
})