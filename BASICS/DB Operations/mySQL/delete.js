const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "mydb",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("connected");

  let sql = "DELETE FROM customer WHERE address = 'Mountain 21 ' ";

  connection.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
  });
});
