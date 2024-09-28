import dotenv from "dotenv";
dotenv.config();
import express from "express";
import mongoose from "mongoose";

import { userRouter, categoriesRouter, brandRouter, productRouter, cartRouter } from './router/exports';


const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

app.use('/static', express.static('uploads'));

mongoose.connect(process.env.DATABASE).then(() => console.log("DB Connected"));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})

app.use(userRouter);
app.use(categoriesRouter);
app.use(brandRouter);
app.use(productRouter);
app.use(cartRouter);