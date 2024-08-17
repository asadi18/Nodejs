const express = require("express");
// console.log(express)
const app = express();

const userRouter = require("./userrouter");
const postRouter = require("./postroute");
//Router Using before other middlewares
app.use("/user", userRouter);
app.use("/post", postRouter);

//Dynamic url ID based
app.get("/product/:pid/reviews/:rid", (req, res) => {
  // res.send("I am a Product ")
  console.log(req.params);
  res.send(
    "This is the id of Product : " +
      req.params.pid +
      "    " +
      "This is the id of Reviews : " +
      req.params.rid
  );
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
