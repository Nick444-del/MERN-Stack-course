import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

import userRouter from "./routers/user.router";
import categoryRouter from "./routers/category.router";
import brandRouter from "./routers/brand.router";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
})

mongoose.connect(process.env.DB).then(() => console.log("Database connected successfully"))

app.use(userRouter);
app.use(categoryRouter);
app.use(brandRouter);