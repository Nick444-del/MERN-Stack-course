import express from 'express';
import mongoose from 'mongoose';

import userRouter from './routers/user.router';

const app = express();
app.use(express.json());
const port = 3002;

app.use('/static', express.static('./uploads'));

mongoose.connect("mongodb://127.0.0.1:27017/mydatabase").then(() => console.log("DB Connected"));

app.listen(port, ()=> {
    console.log(`Listening on port ${port}`);
})

app.use(userRouter);