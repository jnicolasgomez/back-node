const db = {
    'user': [
        {id: '1', name: 'Carlos'}
    ]
};

async function list(table) {
    return db[table];
}
async function get(table, id) {
    let col = await list(table);
    return col.filter( item => item.id === id)[0] || null;
}

async function upsert(table, data) {
    if (!db[table]) {
        db[table] = [];
    }
    let user = await get(table, data.id)
    // TODO: add modified data
    if (user) {
        user = data
    } else {
        db[table].push(data);
    }
}

function remove(table, id) {

}

async function query(table, q) {
    let col = await list(table);
    let keys = Object.keys(q);
    let key = keys[0]
    return col.filter( item => item[keys] === q[key])[0] || null;
}

export { list, get, upsert, remove, query }