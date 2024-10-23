import express from "express";
import mysql from "mysql2";
import dotenv from "dotenv";
import todosPool from "./config/db.config";
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

todosPool.query("SELECT * FROM todos", (err, results) => {
    if (err) {
        console.log(err);
    } else {
        console.log(results);
    }
})

app.get("/", (req, res) => {
    res.send("Hello World!");
})