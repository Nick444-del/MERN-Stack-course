import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import locationRouter from './routers/location.router';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
})

mongoose.connect(process.env.DB).then(() => { console.log('DB Connected') }).catch((err) => { console.log(err) });

app.use(locationRouter);