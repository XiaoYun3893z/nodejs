import mysql from "mysql2";

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "nodejs"
});

export default connection;

// createConnection 較適合單機開發的時候連線