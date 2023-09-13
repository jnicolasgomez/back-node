import {Router} from 'express';
import {success, error} from '../../../network/response.js'
import controller from './index.js'

const router = Router();

router.get('/', (req, res, next) => {
    controller.listPosts().then((posts) => {
        success (req, res, posts, 200);
    }).catch(next);
    
});

router.post('/' ,(req, res, next) => {
    controller.insertPost(req.body).then(post => {
        success(req, res, post, 201)
    }).catch(next);
});

export default router;