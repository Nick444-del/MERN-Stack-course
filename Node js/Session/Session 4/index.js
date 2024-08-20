import express from "express";
import { aboutFn, userFn, addUser, getUser } from "./function";

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hello World");
})

app.get('/about', aboutFn);
app.get('/user', userFn);
app.post('/adduser', addUser);
app.get('/user/:id', getUser);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})