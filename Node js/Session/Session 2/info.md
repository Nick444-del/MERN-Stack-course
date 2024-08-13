# Q & A
1. What is Express JS? 
    - 

2. Babel installation
    1. Installation Command
        * > npm i @babel/node @babel/core @babel/cli @babel/preset-env 
    2. Update script in package.json
        * > nodemon --exec babel-node index.js
    3. Update package.json file
        * > "babel":{
            "presets": ["@babel/preset-env"]
        }
    4. Import packages in index.js as ES6 JavaScript

3. Status Code
    * 400 Bad Request
    * 404 Not Found
    * 200 Connection OK
    * 500 Internal Server Error