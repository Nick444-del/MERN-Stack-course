import express from "express";
import { aboutFn, contactFn, dataFn, abc } from "./function.js";

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Home");
});

app.get("/about", aboutFn);
app.get("/contact", contactFn);
app.get("/data", dataFn);
app.post("/abc", abc);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});