import express from "express";

import { createCategories, getAllCategories, getCategorie, updateCategory, deleteCategory } from "../controllers/categories.controller";

const router = express.Router();

router.post("/createcategory", createCategories);
router.get("/createallcategory", getAllCategories);
router.get("/getcategory/:id", getCategorie);
router.put("/updatecategory/:id", updateCategory);
router.delete("/deletecategory/:id", deleteCategory);

export default router;