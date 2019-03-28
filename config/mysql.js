/**
 * Bruger mysql's createPool til at skabe og opretholde connections med
 */
const dotenv = require('dotenv');
dotenv.config();

module.exports = (function() {
  const mysql = require("mysql");
    return () => 
      mysql.createPool({
        connectionLimit: 10,
        host: "localhost",
        user: "root",
        password: "",
        database: "onlinesound",
        port: 3306
      });
  })();
  