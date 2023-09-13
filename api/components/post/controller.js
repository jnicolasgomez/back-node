import * as store from '../../../store/dummy.js'
import { nanoid } from 'nanoid';

const TABLE = 'post';


export default function(injectedStore) {
    if (!injectedStore) {
        injectedStore = store;
    }
    function listPosts() {
        return injectedStore.list(TABLE);
    }

    async function insertPost(body) {
        const post = {
            text: body.text,
            user: body.user
        }
        if (body.id) {
            post.id = body.id
        } else {
            post.id = nanoid()
        }

        return injectedStore.insert(TABLE, post)
    }
    return { listPosts, insertPost }
}