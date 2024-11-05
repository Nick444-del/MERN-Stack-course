import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

import categoriesRouter from "./routers/categories.router.js";
import productRouter from "./routers/product.router.js";
import userRouter from "./routers/user.router.js";
import cartRouter from "./routers/cart.router.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World!");
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

mongoose.connect(process.env.MONGODB_URL).then(() => {
    console.log("Database connected!");
})

app.use(categoriesRouter);
app.use(productRouter);
app.use(userRouter);
app.use(cartRouter);