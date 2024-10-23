import mysql2 from "mysql2/promise";

const todosPool = mysql2.createPool({
    host: "localhost",
    user: "root",
    database: "todos",
    password: "",
})

export default todosPool