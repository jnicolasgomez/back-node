import * as store from '../../../store/dummy.js'
import * as auth from '../../../auth/index.js'
import bcrypt from 'bcrypt'

const TABLE = 'auth';


export default function(injectedStore) {
    if (!injectedStore) {
        injectedStore = store;
    }
    
    async function login(username, password) {
        const data = await injectedStore.query(TABLE, { username: username});
        return bcrypt.compare(password, data.password).then( sonIguales => {
            if (sonIguales) {
                return auth.sign(data);
            } else {
                throw new Error('Información inválida');
            }
        })
    }

    async function upsert(body) {
        const authData = {
            id: body.id
        }

        if (body.username ) {
            authData.username = body.username;
        }

        if (body.password) {
            authData.password = await bcrypt.hash(body.password, 5);
        }

        return injectedStore.upsert(TABLE, authData)
    }
    return { login, upsert}
}