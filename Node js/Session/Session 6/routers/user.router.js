import express from 'express';
import { createUser, getUsers, getUser, updateUser, deleteUser } from '../controllers/user.controller.js';

const router = express.Router();

router.post('/create-user', createUser);
router.get('/get-users', getUsers);
router.get('/get-user/:user_Id', getUser);
router.put('/update-user/:user_Id', updateUser);
router.delete('/delete-user/:user_Id', deleteUser);

export default router;