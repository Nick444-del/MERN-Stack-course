import express from 'express';

import { addBrand, getBrands } from '../controllers/brand.controller';

const router = express.Router();

router.post('/add-brand', addBrand);
router.get('/get-brands', getBrands);

export default router;