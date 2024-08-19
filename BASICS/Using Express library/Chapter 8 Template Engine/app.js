const express = require("express");
const morgan = require("morgan");

const app = express();

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  let post = {
    title: "Home Page Title ",
    body: "This is the Body of the first page",
    // published: false,
    published: true,
  };

  let posts = [
    { title: "1st Title", author: "Asad" },
    { title: "2nd Title", author: "Asad" },
    { title: "3rd Title", author: "Asad" },
    { title: "4th Title", author: "Asad" },
  ];
  let htitle = "HOME";

  res.render("pages/index", { title: "EJS HOME PAGE", post, posts, htitle });
});

app.get("/about", (req, res) => {
  let htitle = "ABOUT";
  res.render("pages/about", { title: "ABOUT PAGE", htitle });
});

app.get("/help", (req, res) => {
  let htitle = "HELP";
  res.render("pages/help", { title: "HELP PAGE", htitle });
});

app.get("/contact", (req, res) => {
  let htitle = "CONTACT";
  res.render("pages/contact", { title: "CONTACT PAGE", htitle });
});

app.get("*", (req, res) => {
  res.send("<h1>404 NOT FOUND</h1>");
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
