import {Router} from 'express';
import {success, error} from '../../../network/response.js'
import controller from './index.js'

const router = Router();

router.post('/login', (req, res) => {
    // res.send('It works');
    controller.login(req.body.username, req.body.password).then((token) => {
        success (req, res, token, 200);
    }).catch((err) => {
        console.error(err);
        error(req, res, "Información invalida", 400)
    });
    
});


export default router;