import {Router} from 'express';
import {success, error} from '../../../network/response.js'
import controller from './index.js'
import checkAuth from './middleware.js'

const router = Router();

router.get('/', (req, res, next) => {
    // res.send('It works');
    controller.listUsers().then((users) => {
        success (req, res, users, 200);
    }).catch(next);
    
});

router.get('/:id', (req, res, next) => {
    controller.getUserById(req.params.id).then(user => {
        success(req, res, user, 200)
    }).catch(next);
    // success(req, res, userList, 200);
});

router.post('/' ,(req, res, next) => {
    controller.upsertUser(req.body).then(user => {
        success(req, res, user, 200)
    }).catch(next);
    // success(req, res, userList, 200);
});

router.put('/', checkAuth('update') ,(req, res, next) => {
    controller.upsertUser(req.body).then(user => {
        success(req, res, user, 200)
    }).catch(next);
    // success(req, res, userList, 200);
});

export default router;