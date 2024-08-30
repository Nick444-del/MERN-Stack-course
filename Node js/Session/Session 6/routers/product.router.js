import express from 'express';
import { createProduct, getProducts, getProduct, updateProduct, deleteProduct } from '../controllers/product.controller.js';

const router = express.Router();

router.post('/create-product', createProduct);
router.get('/get-products', getProducts);
router.get('/get-product/:product_Id', getProduct);
router.put('/update-product/:product_Id', updateProduct);
router.delete('/delete-product/:product_Id', deleteProduct);

export default router;