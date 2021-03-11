import expressAsyncHandler from 'express-async-handler';
import User from '../models/User.js';
import generateToken from '../utils/generateToken.js';

// Authorize User and get Token
// POST /api/users/login
const authUser = expressAsyncHandler(async (req, res) => {

    const { email, password } = req.body;

    console.log(`Email: ${email}, Password: ${password}`)

    const user = await User.findOne({ email });

    console.log(user)

    const test = await user.matchPassword(password)

    console.log(`Test: ${test}`)

    if (user && (await user.matchPassword(password))) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
        })
    } else {
        res.status(401);
        throw new Error('Invalid Email or Password')
    }

})

/*
{
    "name": "Bruno",
    "email": "bruno@mail.com",
    "password": "123456",
    "plan": "standardpackage"
}
*/

// POST /api/users/register
const registerUser = expressAsyncHandler(async (req, res) => {

    const { name, email, password, plan } = req.body;

    //make sure user doesn't already exists
    const userExists = await User.findOne({ email });

    if (userExists) {
        res.status(400);
        throw new Error('User Already Exists');
    }

    const user = await User.create({
        name, email, password, plan
    })

    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            plan: user.plan
            //token
        })
    } else {
        res.status(400);
        throw new Error('Invalid User Data');
    }

})

export {
    authUser, registerUser
}