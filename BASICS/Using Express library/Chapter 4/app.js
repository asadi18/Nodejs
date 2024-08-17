const express = require("express");

// console.log(express)
const app = express();

app.get("/about", (req, res) => {
  res.send("<h1>Server is Listening in About Page</h1>");
});

app.get("/json", (req, res) => {
  res.json({
    message: "I am a json file use for API",
    data: "i have data",
  });
});

app.get("/", (req, res) => {
  res.send("<h1>Server is Listening in Home Page</h1>");
});

app.get("*", (req, res) => {
  res.send("<h1>404 NOT FOUND</h1>");
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`server has started at port ${PORT}`);
});
