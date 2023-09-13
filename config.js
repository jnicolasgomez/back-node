export default {
    api: {
        port: process.env.API_PORT || 3000,
    },
    jwt: {
        secret: process.env.JWT_SECRET || 'secret!',
    },
    mysql: {
        host: process.env.MYSQL_HOST || 'localhost',
        user: process.env.MYSQL_USER || 'root',
        password: process.env.MYSQL_PASS || 'password',
        database: process.env.MYSQL_DB || 'my_db',
    },
    mysqlService: {
        port: process.env.MYSQL_SRV_PORT || 3001,
        host: process.env.MYSQL_SRV_HOST || 'localhost',
    },
    post: {
        port: process.env.API_POST_PORT || 3002,
        host: process.env.API_POST_HOST || 'localhost'
    }
};