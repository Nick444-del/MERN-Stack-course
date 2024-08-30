import express from 'express';
import { addBrand, getBrands, getBrand, updateBrand, deleteBrand } from '../controllers/brand.controller';

const router = express.Router();

router.post('/create-brand', addBrand);
router.get('/get-brands', getBrands);
router.get('/get-brand/:brand_Id', getBrand);
router.put('/update-brand/:brand_Id', updateBrand);
router.delete('/delete-brand/:brand_Id', deleteBrand);

export default router;