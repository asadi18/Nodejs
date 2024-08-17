const express = require("express");
// console.log(express)
const app = express();

//Custom Middleware (our own middleware)

function custommiddleWare(req, res, next) {
  // console.log("I am Logged in", req.url);
  // next();
  if (req.url == "/json") {
    res.send("<h1>This has been blocked by admin</h1>");
  }
  next();
}

function tinylogger() {
  return (req, res, next) => {
    console.log(`${req.method} - ${req.url}`);
    next();
  };
}

const middleWare = [custommiddleWare, tinylogger()];
app.use(middleWare);

//Middleware 3rd party
const morgan = require("morgan");
// app.use(morgan("dev"));      // It will work for all the pages. will get some request

//Another way for middle ware is to use specificly like we will use only on about page now after url put as many middleware as needed one after another serially

app.get("/about", morgan("dev"), (req, res) => {
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
