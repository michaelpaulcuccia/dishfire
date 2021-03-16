import jwt from 'jsonwebtoken';
import expressAsyncHandler from 'express-async-handler';
import User from '../models/User.js';
import config from '../config.js';

const protect = expressAsyncHandler(async (req, res, next) => {

    let token;

    //check for auth token, ensure it starts with 'Bearer'
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {

        try {

            //assign token to variable, remove 'Bearer'
            token = req.headers.authorization.split(' ')[1];

            const decoded = jwt.verify(token, config.JWT_SECRET);

            //set user, remove password
            req.user = await User.findById(decoded.id).select('-password');

            next()

        } catch (error) {
            console.error(error);
            res.status(401);
            throw new Error('Not Authorized. Token Failed.');
        }
    }

    if (!token) {
        res.status(401);
        throw new Error('Not Authorized. No Token.');
    }

})

export { protect }