import express from 'express';
export const router = express.Router();
import expressAsyncHandler from 'express-async-handler';
import generateToken from '../../utils/generateToken.js';
import { protect } from '../../middleware/authMiddleware.js';
import User from '../../models/User.js';

//REGISTER USER
//ROUTE: /api/users/registeruser
const registerUser = expressAsyncHandler(async (req, res) => {

    /**NOTE: MUST RETURN ALL REQUIRED FIELDS - SEE /model/User.js */

    const {
        name,
        // picture,
        email,
        password,
        // yearOfBirth,
        // monthOfBirth,
        // dayOfBirth,
        // hometownCity,
        // hometownState,
        // hometownZip
    } = req.body;

    //make sure user doesn't already exists
    const userExists = await User.findOne({ email });

    if (userExists) {
        res.status(400);
        throw new Error('User Already Exists');
    }

    const user = await User.create({
        name,
        // picture,
        email,
        password,
        // yearOfBirth,
        // monthOfBirth,
        // dayOfBirth,
        // hometownCity,
        // hometownState,
        // hometownZip
    });

    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email
            //...
        })
    } else {
        res.status(400);
        throw new Error('Invalid User Data');
    }


})
router.route('/registeruser').post(registerUser);

//AUTH USER
//ROUTE: /api/users/login
const authUser = expressAsyncHandler(async (req, res) => {

    const { email, password } = req.body;

    const user = await User.findOne({ email });

    //user exists, and entered password matches db password
    if (user && password === user.password) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
        })
    } else {
        res.status(401);
        throw new Error('Invalid Email or Password');
    }
})
router.route('/login').post(authUser);

//GET USER PROFILE **PROTECTED**
//ROUTE: /api/users/profile
const getUserProfile = expressAsyncHandler(async (req, res) => {

    //current logged in user
    const user = await User.findById(req.user._id)

    if (user) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email
        })
    } else {
        res.status(404);
        throw new Error("User not found");
    }

})
router.route('/profile').get(protect, getUserProfile);

export default router;