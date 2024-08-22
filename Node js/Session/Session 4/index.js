import express from "express";
import mongoose from "mongoose";
import userRouter from "./routers/user.router";
import categoryRouter from "./routers/category.router";

const app = express();

app.use(express.json());
const port = 3001;

app.get("/", (req, res) => {
    res.send("Home");
});

mongoose.connect("mongodb://127.0.0.1:27017/mydatabase").then(() => console.log("MongoDB Connected"))

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});

app.use(userRouter);
app.use(categoryRouter);