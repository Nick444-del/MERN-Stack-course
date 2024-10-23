import express from "express";

import { addCategory, getAllCategory } from "../controllers/category.controller";
import { auth, isAdmin } from "../middleware/auth.middleware";

const router = express.Router();

router.post("/add-category", auth, isAdmin, addCategory);
router.get("/all-category", auth, isAdmin, getAllCategory);

export default router;