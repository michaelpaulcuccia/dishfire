import jwt from 'jsonwebtoken';
import config from '../config.js';

const generateToken = (id) => {
    //user id is payload in token
    return jwt.sign({ id }, config.JWT_SECRET, { expiresIn: '24h' });
};

export default generateToken;