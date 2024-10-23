import mysql from "mysql2";
import dotenv from 'dotenv';
dotenv.config();

const pool = mysql.createPool({
    host: process.env.HOST || '127.0.0.1:3307',
    user: process.env.USER || 'root',
    password: process.env.PASSWORD || '',
    database: process.env.DATABASE || 'nodejs',
}).promise();

// const result = await pool.query("SELECT * FROM notes");
// console.log(result[0]);

export default pool