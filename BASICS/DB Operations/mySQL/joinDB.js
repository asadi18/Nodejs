const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "mydb",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("connected");

  //Join is needed more attention

  //   let sql = "SELECT * FROM customer LIMIT 5";
  //   let sql =
  //     "SELECT customer.name AS customer, customer.name AS favorite FROM customer JOIN name ON customer.favorite_product = customer.id";
  connection.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
  });
});
