const express = require("express");
const morgan = require("morgan");

const contactRoute = require("./contactRouter");

const app = express();
app.use(morgan('dev'))
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use("/contacts", contactRoute);

app.get("*", (req, res) => {
  res.send("<h1>Please Use Correct URL</h1>");
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
