import mysql from "mysql2";

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "nodejs",
    port: 3307
}).promise();

export default pool;