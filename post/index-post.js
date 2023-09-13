import express from 'express';
import config from '../config.js';
import bodyParser from 'body-parser'
import post from './components/post/routes.js'

const app = express();

app.use(bodyParser.json())
// ROUTER
app.use('/api/post', post);

app.listen(config.post.port, () => {
    console.log(`Posts Api listening on port ${config.post.port}`);
});