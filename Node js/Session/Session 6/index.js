import express from 'express';
import mongoose from 'mongoose';
import categoriesRouter from './routers/categories.router.js';
import productRouter from './routers/product.router.js';
import userRouter from './routers/user.router.js';
import brandRouter from './routers/brand.router.js';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World');
});

mongoose.connect('mongodb://127.0.0.1:27017/mydatabase').then (() => {
    console.log('Connected to MongoDB');
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
});

app.use(categoriesRouter);
app.use(productRouter);
app.use(userRouter);
app.use(brandRouter);