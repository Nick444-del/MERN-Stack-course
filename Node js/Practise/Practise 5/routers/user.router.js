import express from 'express';

import { addUser, getUsers, getUser, updateUser, deleteUser } from '../controllers/user.controller';

const router = express.Router();

router.get('/get-users', getUsers);
router.post('/add-user', addUser);
router.get('/get-user/:userId', getUser);
router.put('/update-user/:userId', updateUser);
router.delete('/delete-user/:userId', deleteUser);

export default router;