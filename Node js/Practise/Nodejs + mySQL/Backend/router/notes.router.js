import express from "express";

import { getNotes, createNotes, deleteNotes, updateNotes } from "../controller/notes.controller.js";

const router = express.Router();

router.get("/getNotes", getNotes);
router.post("/createNotes", createNotes);
router.delete("/deleteNotes/:id", deleteNotes);
router.put("/updateNotes/:id", updateNotes);


export default router;