import {Router} from 'express';
import {success, error} from '../network/response.js'
import * as store from '../store/mysql.js'

const router = Router();


router.get('/:table', list);
router.get('/:table/:id', get);
router.post('/:table', insert);
router.put('/:table', upsert);


async function list(req, res, next) {
    const data = await store.list(req.params.table);
    success(req, res, data, 200)
    
};

async function get(req, res, next) {
    const data = await store.get(req.params.table, req.params.id);
    success(req, res, data, 200)
    
};

async function insert(req, res, next) {
    const data = await store.insert(req.params.table, req.body);
    success(req, res, data, 200)
};

async function upsert(req, res, next) {
    const data = await store.upsert(req.params.table, req.body);
    success(req, res, data, 200)
};

export default router;