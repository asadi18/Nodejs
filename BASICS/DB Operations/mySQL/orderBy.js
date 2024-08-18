const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "mydb",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("connected");

  let sql = "SELECT * FROM customer order by name DESC";

  connection.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
  });
});
