import express from 'express';

import { addProduct, getProducts, deleteProduct, updateProduct, getProductAggr } from '../controllers/product.controller';

const router = express.Router();

router.post('/add-product', addProduct);
router.get('/get-products', getProducts);
router.delete('/delete-product/:product_id', deleteProduct);
router.put('/update-product/:product_id', updateProduct);
router.get('/get-products-aggr', getProductAggr);

export default router