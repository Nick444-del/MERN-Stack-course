import express from 'express';

import { createProduct, getAllProduct, deletProduct, getProduct, updateProduct } from '../controllers/product.controller';

const router = express.Router();

router.post('/createproduct', createProduct);
router.get('/getallproduct', getAllProduct);
router.delete('/deletproduct/:id', deletProduct);
router.get('/getproduct/:id', getProduct);
router.put('/updateproduct/:id', updateProduct)

export default router;