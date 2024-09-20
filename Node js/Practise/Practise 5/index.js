import express from 'express';
import mongoose from 'mongoose';
import userRouter from './routers/user.router';

const app = express();
const port = 3001;

app.use(express.json());

app.use('/static', express.static('./uploads'))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

mongoose.connect('mongodb://127.0.0.1:27017/mydatabase').then(()=> {
    console.log('Connected to Database');
})

app.listen(port, ()=> {
    console.log(`listening on ${port}`);
})

app.use(userRouter);