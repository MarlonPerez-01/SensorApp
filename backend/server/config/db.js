require('dotenv').config();

const mysql = require('mysql2');

const pool = mysql.createPool({
  host: process.env.HOST,
  user: process.env.USER_DB,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  connectionLimit: 10
});

const promisePool = pool.promise();

const connectDB = pool.getConnection((err, connection) => {
  if (err) throw err;
  //TODO: capturar los errores más comunes

  promisePool.getConnection();

  console.log('Database connection established');
  return;
});

module.exports = {
  pool,
  promisePool,
  connectDB
};
