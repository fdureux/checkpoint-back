const dotenv = require("dotenv");
const mysql = require("mysql2/promise");

dotenv.config();

const pool = mysql.createPool({
  connectionLimit: 10,
  host: process.env.NODE_HOST,
  database: process.env.NODE_NAME,
  user: process.env.NODE_USER,
  password: process.env.NODE_PASSWORD,
});

module.exports = pool;
