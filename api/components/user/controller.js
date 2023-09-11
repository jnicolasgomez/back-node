import { nanoid } from 'nanoid';
import * as store from '../../../store/dummy.js'
import auth from '../auth/index.js'

const TABLE = 'user';


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

    async function upsertUser(body) {
        const user = {
            name: body.name,
            username: body.username
        }

        if (body.id) {
            user.id = body.id
        } else {
            user.id = nanoid
        }

        if (body.password || body.username) {
            await auth.upsert({
                id: user.id,
                username: user.username,
                password: user.password
            })
        }

        return injectedStore.upsert(TABLE, user)
    }
    return { listUsers, getUserById , upsertUser}
}