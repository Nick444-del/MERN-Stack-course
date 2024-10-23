import express from 'express'

import { getUsers, createUser, login, register } from '../controllers/users.controller.js'

const router = express.Router()

router.get('/getuser', getUsers);
router.post('/createuser', createUser);
router.post('/login', login);
router.post('/signup', register);

export default router