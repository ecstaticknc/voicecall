const mysql = require("mysql");
require("dotenv").config();
const connection = mysql.createPool({
  connectionLimit: 10,
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,

  // port: process.env.SQL_PORT,
});

// connection.con((err) => {
//   if (err) {
//     throw ("mysqlerror is:", err);
//   } else {
//     console.log("Mysql Connected");
//   }
// });

module.exports = connection;
