import express from 'express';
import { contactFn, testFn, userFn, adduserFn } from './function';

const app = express();
const port = 8080;

app.use(express.json()); //to read body data

app.get('/', (req, res) => { // Internal
    res.send('Home page');
})

const about = (req, res) => {   // Inline
    res.send('About page');
}

app.get('/about', about);
app.get('/contact', contactFn); // External
app.get('/test', testFn);   // External
app.get('/user', userFn);   // External
app.post('/adduser', adduserFn);    // External

app.listen(port,() => {
    console.log('Server listening on port ' + port);
})