import express from 'express';

import { signUp, login, forgetPassword, changePassword, deleteUser, updateUser, getAllUsers } from '../controllers/user.controller';
import { auth, isAdmin } from '../middleware/auth.middleware';

const router = express.Router();

router.post('/signup', signUp);
router.post('/login', login);

router.put('/forget-password', forgetPassword);
router.put('/change-password', auth,changePassword);
router.delete('/delete-user', auth, deleteUser);
router.put('/update-user', auth, updateUser);
router.get('/all-users',  auth, isAdmin, getAllUsers);

export default router;