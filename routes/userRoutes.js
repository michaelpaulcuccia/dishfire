import express from 'express';
const router = express.Router();
import { authUser, registerUser } from '../controllers/userController.js';

// /api/users/login
router.route('/login').post(authUser);

// /api/users/register
router.route('/register').post(registerUser);

export default router;