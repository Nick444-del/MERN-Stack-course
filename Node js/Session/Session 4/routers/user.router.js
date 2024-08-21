import express from 'express';
import { addUser, getUser } from '../controllers/user.controller';

const router = express.Router();

router.post('/add-user', addUser);
router.get('/get-user', getUser);

export default router;