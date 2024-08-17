const router = require("express").Router();

router.get("/login", (req, res) => {
  res.send("I am login ");
});

router.get("/signup", (req, res) => {
  res.send("I am Signup");
});

router.get("/logout", (req, res) => {
  res.send("I am Logout");
});

module.exports = router;
