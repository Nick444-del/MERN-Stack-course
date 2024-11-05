import express from 'express';
import { addItem, getCart, removeItem, updateQuantity } from '../controllers/cart.controller';
import { auth } from '../middleware/auth.middleware';
const router = express.Router();

// router.use(auth)

router.get('/get-cart', auth,getCart);
router.post("/add-item",addItem);
router.put("/update-item/:item_id",updateQuantity);
router.delete("/delete-item/:item_id",removeItem);

export default router;
