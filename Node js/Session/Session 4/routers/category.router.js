import express from 'express';
import { addCategory, getCategory } from '../controllers/category.controller';

const router = express.Router();

router.post('/add-category', addCategory);
router.get('/get-category', getCategory);

export default router;