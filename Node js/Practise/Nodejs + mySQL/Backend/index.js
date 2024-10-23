import express from "express";

import notesRouter from "./router/notes.router.js";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

app.use(notesRouter);