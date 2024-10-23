import express from "express";

import { createNote, getNotes } from "../controllers/notes.controller";
import { auth, isAdmin } from "../middleware/tokens";

const router = express.Router();

router.post("/createnote", auth, createNote);
router.get("/getallnotes", getNotes);

export default router;