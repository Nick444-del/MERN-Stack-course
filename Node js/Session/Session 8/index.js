import express from 'express';
import mongoose from 'mongoose';

const app = express();

app.use(express.json());

const port = 3001;

mongoose.connect('mongodb://localhost:27017/mydatabase').then(() => {
    console.log('Connected to MongoDB');
})

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
})