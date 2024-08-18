const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "mydb",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("connected");

  let sql = "DROP TABLE customers";

  //Also we can use as
  //let sql = "DROP TABLE IF EXISTS customers";

  connection.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
  });
});
