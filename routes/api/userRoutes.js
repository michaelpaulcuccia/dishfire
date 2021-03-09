import express from 'express';
export const router = express.Router();
import User from '../../models/User.js';
import expressAsyncHandler from 'express-async-handler';

//REGISTER USER
//ROUTE: /api/users/registeruser
const registerUser = expressAsyncHandler(async (req, res) => {

    const {
        name,
        picture,
        email,
        password,
        yearOfBirth,
        monthOfBirth,
        dayOfBirth,
        hometownCity,
        hometownState,
        hometownZip
    } = req.body;

    //make sure user doesn't already exists
    const userExists = await User.findOne({ email });

    if (userExists) {
        res.status(400);
        throw new Error('User Already Exists');
    }

    const user = await User.create({
        name,
        picture,
        email,
        password,
        yearOfBirth,
        monthOfBirth,
        dayOfBirth,
        hometownCity,
        hometownState,
        hometownZip
    });

    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            hometownZip: user.hometownZip
        })
    } else {
        res.status(400);
        throw new Error('Invalid User Data');
    }


})
router.route('/registeruser').post(registerUser);

//AUTH USER
//ROUTE: /api/users/authuser
const authUser = expressAsyncHandler(async (req, res) => {

    const { email, password } = req.body;

    const user = await User.findOne({ email });

    //user exists, and entered password matches db password
    if (user && password === user.password) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email
            //token TO DO
        })
    } else {
        res.status(401)
        throw new Error('Invalid Email or Password')
    }
})
router.route('/authuser').post(authUser);

export default router;