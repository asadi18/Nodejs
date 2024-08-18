const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "mydb",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("connected");

  let sql = "UPDATE customer SET name = 'DAYAN' WHERE address = 'Valley 345' ";

  connection.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
  });
});
