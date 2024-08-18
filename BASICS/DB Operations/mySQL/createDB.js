const mysql = require("mysql");

let connection = mysql.createConnection({
  host: "localhost",
  user: "root",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("Connected");

  connection.query("CREATE DATABASE mydb", function (err, result) {
    if (err) throw err;
    console.log("Database Created");
  });
});
