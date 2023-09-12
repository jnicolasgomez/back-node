import mysql from 'mysql';

import config from '../config.js'

const dbconf = {
    host: config.mysql.host,
    user: config.mysql.user,
    password: config.mysql.password,
    database: config.mysql.database
}

let connection;

function handleConn() {
    connection = mysql.createConnection(dbconf);

    connection.connect((err) => {
        if (err) {
            console.error('[db error]', err);
            setTimeout(handleConn, 10000);
        } else {
            console.log('DB COnnected');
        }
        
    });

    connection.on('error' , err => {
        console.error('[db error]' , err);
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            handleConn();
        } else {
            throw err;
        }
    })
}

handleConn();