const http = require('http');

// http://localhost:8080
http.createServer(function(req, res) {
    console.log(req.url);

    if(req.url == '/'){
        res.write('Home page');
    }else if(req.url == '/about'){
        res.write('About page');
    }else if(req.url == '/user'){
        const user = {
            name: "abc",
            age: 24
        }
        res.write(JSON.stringify(user));
    }else{
        res.write('User page not found');
    }

    // res.write('Hello World');
    res.end();
}).listen(8080);