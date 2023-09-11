import { nanoid } from 'nanoid';
import * as store from '../../../store/dummy.js'

const TABLE = 'auth';


export default function(injectedStore) {
    if (!injectedStore) {
        injectedStore = store;
    }
    function listUsers() {
        return injectedStore.list(TABLE);
    }

    function getUserById(id) {
        return injectedStore.get(TABLE, id);
    }

    function upsert(body) {
        const authData = {
            id: body.id
        }

        if (body.username ) {
            authData.username = body.username;
        }

        if (body.password) {
            authData.password = body.password;
        }

        return injectedStore.upsert(TABLE, authData)
    }
    return { listUsers, getUserById , upsert}
}