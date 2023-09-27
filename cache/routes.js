import {Router} from 'express';
import {success, error} from '../network/response.js'
import * as store from '../store/redis.js'

const router = Router();


router.get('/:table', list);
router.get('/:table/:id', get);
router.put('/:table', upsert);


async function list(req, res, next) {
    try {
        console.log('entered list route')
        store.list(req.params.table).then(data => {
            console.log(data);
            success(req, res, data, 200)
        });
    } catch(err) {
        console.error(err);
    }
    
    
};

async function get(req, res, next) {
    const data = await store.get(req.params.table, req.params.id);
    success(req, res, data, 200)
    
};

async function upsert(req, res, next) {
    const data = await store.upsert(req.params.table, req.body);
    success(req, res, data, 200)
};

export default router;