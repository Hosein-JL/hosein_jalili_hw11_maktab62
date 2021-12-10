const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/home", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/home.html"));
});

router.get("/About", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/about.html"));
});

router.get("/contact-us", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/contact-us.html"));
});

module.exports = router;
