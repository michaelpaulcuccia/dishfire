import express from 'express';
const router = express.Router();
import { authUser, registerUser, getUserProfile } from '../controllers/userController.js';
import { protect } from '../middleware/authMiddleware.js';

//  /api/users/login
router.route('/login').post(authUser);

//  /api/users/register
router.route('/register').post(registerUser);

//  /api/users/profile
router.route('/profile').get(protect, getUserProfile)

export default router;