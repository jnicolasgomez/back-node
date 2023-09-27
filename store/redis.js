import redis from 'redis';
import config from '../config.js'

const client = redis.createClient({
    host: config.redis.host,
    port: config.redis.port,
    password: config.redis.password
})



client.on('connect', () => {
    console.log('Connected to Redis');
  });

client.on('error', (err) => {
    console.error('Redis Error:', err);
});

await client.connect();

function list(table) {
    return new Promise(async (resolve, reject) => {
        console.log(table);
        try {
            const res = await client.get(table)
            /**client.get(table, (err, data) => {
                console.log('ENETERD LIST');
                // console.log(client.connect);
                console.log(err);
                if (err) {
                    console.log('AAAAAAAAAAA');
                    return reject(err);
                }
                let res = data || null;
                if(data) {
                    res = JSON.stringify(data);
                }
                resolve(res);
            })**/
            resolve(res)
        }catch( err) {
            console.log('error has occured');
            console.log(err);
            reject(err)
        }
    })
}

function get(table, id) {

}

async function upsert(table, data) {
    let key = table;
    if (data && data.id) {
        key = key + '_' + data.id;
    }

    client.setEx(key, 10, JSON.stringify(data));
    return true;
}

export {list, get, upsert}