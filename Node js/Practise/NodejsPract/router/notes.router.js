import express from 'express';

import { getNotes, createNote } from '../controller/notes.controller.js';

const router = express.Router();

router.get("/getnotes", getNotes);
router.post("/createnote", createNote);

export default router;