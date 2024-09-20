import express from 'express';

import { addCategories, getCategories } from '../controllers/categories.controller';

const router = express.Router();

router.post('/add-categories', addCategories);
router.get('/get-categories', getCategories);

export default router;