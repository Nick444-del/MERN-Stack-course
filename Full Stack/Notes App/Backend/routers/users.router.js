import express from 'express'

import { getUsers, createUser, login, register, deleteUser } from '../controllers/users.controller.js'

const router = express.Router()

router.get('/getuser', getUsers);
router.post('/createuser', createUser);
router.post('/login', login);
router.post('/signup', register);
router.delete('/deleteuser/:id', deleteUser);

export default router