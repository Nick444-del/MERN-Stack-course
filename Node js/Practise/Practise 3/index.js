import express from "express";
import { aboutFn, contactFn } from "./function.js";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get("/about", aboutFn);
app.get("/contact", contactFn);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});