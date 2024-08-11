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

import http from 'http';