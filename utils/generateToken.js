import jwt from 'jsonwebtoken';
import config from '../config.js'

//takes in user id, gets added to payload
const generateToken = (id) => {
    return jwt.sign({ id }, config.JWT_SECRET, {
        expiresIn: '24h'
    })
}

export default generateToken;