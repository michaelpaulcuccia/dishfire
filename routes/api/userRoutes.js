
import express from 'express';
export const router = express.Router();
import User from '../../models/User.js';
import expressAsyncHandler from 'express-async-handler';

//REGISTER USER
//ROUTE: /api/users/registeruser
const registerUser = expressAsyncHandler(async (req, res) => {

    const { name, email, password } = req.body;

    //make sure user doesn't already exists
    const userExists = await User.findOne({ email });

    if (userExists) {
        res.status(400);
        throw new Error('User Already Exists');
    }

    const user = await User.create({
        name,
        email,
        password
    });

    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
        })
    } else {
        res.status(400);
        throw new Error('Invalid User Data');
    }


})
router.route('/registeruser').post(registerUser);

export default router;