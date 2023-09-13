import {Router} from 'express';
import {success, error} from '../../../network/response.js'
import controller from './index.js'
import checkAuth from './middleware.js'

const router = Router();

router.get('/', (req, res, next) => {
    controller.listUsers().then((users) => {
        success (req, res, users, 200);
    }).catch(next);
    
});

router.get('/:id', (req, res, next) => {
    controller.getUserById(req.params.id).then(user => {
        success(req, res, user, 200)
    }).catch(next);
});

router.get('/:id/following', (req, res, next) => {
    controller.getFollowing(req.params.id).then(user => {
        success(req, res, user, 200)
    }).catch(next);
});

router.post('/' ,(req, res, next) => {
    controller.upsertUser(req.body).then(user => {
        success(req, res, user, 201)
    }).catch(next);
});

router.put('/', checkAuth('update') ,(req, res, next) => {
    controller.upsertUser(req.body).then(user => {
        success(req, res, user, 200)
    }).catch(next);
});

router.post('/follow/:id', checkAuth('follow'),(req, res, next) => {
    controller.follow(req.user.id, req.params.id).then(user => {
        success(req, res, user, 201)
    }).catch(next);
});

export default router;