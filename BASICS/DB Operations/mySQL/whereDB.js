const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "mydb",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("Connected");
let sql = "SELECT * from customer WHERE name = 'Susan'";
connection.query(sql, (err, result, field)=>{
if (err) throw err ; 
console.log(result)

})

});
