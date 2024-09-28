import express from 'express';

import { addUser, signUp, login, getUsers, getUser, forgetPassword } from '../controllers/user.controller';
import { auth, admin } from '../middleware/auth.middleware';

const router = express.Router();
router.post('/add-user', addUser);
router.post('/sign-up', signUp);
router.post('/login', login);
router.get('/get-users', getUsers);
router.get('/get-user/:user_id', getUser);
router.put('/forget-password/userEmail', forgetPassword);


export default router;