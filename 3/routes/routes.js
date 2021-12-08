const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/home", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/home.html"));
});

router.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/login.html"));
});

router.get("/About%20Me", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/about.html"));
});

router.get("/contact-us", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/contact-us.html"));
});

router.get("/register", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/register.html"));
});

module.exports = router;
