import mysql from "mysql2/promise";

const connection = await mysql.createPool({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "nodejs",
    waitForConnections: true,
    connectionLimit: 5,
    queueLimit: 0
});

export default connection;

