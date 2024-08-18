const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "mydb",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("Connected");

  let sql = "SELECT * FROM customer ";
  connection.query(sql, (err, result, fields) => {
    if (err) throw err;
    // console.log(result[2].name && result[2].address);
    console.log(result);
    // console.log(fields);
  });
});
