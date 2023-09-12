import jwt from 'jsonwebtoken';
import config from '../config.js'
import error from '../utils/error.js'

const secret = config.jwt.secret;

function sign(data) {
    return jwt.sign(data, secret);
}

function verify(token) {
    return jwt.verify(token, secret);
}

const check = {
    own: function(req, owner) {
        //
        const decoded = decodeHeader(req);

        if (decoded.id !== owner) {
            throw error('No permissions', 401);
        }
    }
}

function getToken(auth) {
    if (!auth) {
        throw new Error('No token found');
    }
    if (auth.indexOf('Bearer ') === -1 ) {
        throw new Error('Invalid Format');
    }
    let token = auth.replace('Bearer ', '');

    return token;
}

function decodeHeader(req) {
    const authorization = req.headers.authorization || '';
    const token = getToken(authorization);
    const decoded = verify(token);

    req.user = decoded;

    return decoded;
}


export {sign, check};