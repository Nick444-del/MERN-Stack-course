// const http = require('http');

// http.createServer(function(req, res) {
//     console.log(req.url);
//     if(req.url == '/'){
//         res.write('Home page');
//     }else if(req.url == '/about'){
//         res.write('About page');
//     }else if(req.url == '/user'){
//         const user = {
//             name: 'John',
//             age: 30,
//             city: 'New York'
//         };
//         res.write(JSON.stringify(user));
//     }else if(res.url == '/write-data'){
//         const data = 'Hello, world';
//         res.writeFileSync(`Data.txt`, data);
//         console.log("test");
//         res.write('file created');
//     }

//     res.end();
// }).listen(8080);

import express from 'express';
// import { contactFn, testFn } from './function';

const app = express();
const port = 8080;

app.get('/', (req, res) => {
    res.send('Home page');
})

const about = (req, res) => {
    res.send('About page');
}

app.get('/about', about);
// app.get('/contact', contactFn);
// app.get('/test', testFn);

app.listen(port,() => {
    console.log('Server listening on port ' + port);
})