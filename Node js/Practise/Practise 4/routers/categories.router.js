import express from 'express';
import { createCategories, getCategories } from '../controllers/categories.controller.js';

const router = express.Router();

router.post('/create-category', createCategories);
router.get('/get-categories', getCategories);

export default router;