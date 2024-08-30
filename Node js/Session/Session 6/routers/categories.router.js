import express from 'express';
import { createCategories, deleteCategory, getCategories, getCategory, updateCategory } from '../controllers/categories.controller.js';

const router = express.Router();

router.post('/create-category', createCategories);
router.get('/get-categories', getCategories);
router.get('/get-category/:cat_Id', getCategory);
router.put('/update-category/:cat_Id', updateCategory);
router.delete('/delete-category/:cat_Id', deleteCategory);

export default router;