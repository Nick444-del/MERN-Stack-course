import express from "express";

import { createBrand, getAllBrand } from "../controllers/brand.controller";
import { auth, isAdmin } from "../middleware/auth.middleware";

const router = express.Router();

router.post("/add-brand", auth, isAdmin, createBrand);
router.get("/all-brand", auth, isAdmin, getAllBrand);

export default router;