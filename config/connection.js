"use strict";
const mysql = require("mysql");
const dbConn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "12abcd@#",
  database: "node_mysql_crud_db",
});

dbConn.connect((err) => {
  if (err) {
    console.log("error connecting");
  } else {
    console.log("Connected to database");
  }
});

module.exports = dbConn;
