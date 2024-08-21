const http = require('http');
const fs = require('fs');
const url = require('url');

const port = 3000;

const myServer = http.createServer((req, res) => {
    if(req.url === "/favicon.ico") return res.end();
    const log = `${Date.now()}: ${req.url} New Request Received\n`;
    const myUrl = url.parse(req.url, true);
    console.log(myUrl);
    fs.appendFile("log.txt", log, (err, data) => {
        switch(myUrl.pathname){
            case "/":
                res.end("Home Page");
                break;
            case "/about":
                const username = myUrl.query.username;
                const age = myUrl.query.age;
                res.end(`Hi, ${username} and your age is ${age}`);
                break;
            case "/contact":
                res.end("Contact Page");
                break;
            default:
                res.end("Page Not Found");
        }
    })
});


myServer.listen(port, () => console.log("Server is running on port 3000"));