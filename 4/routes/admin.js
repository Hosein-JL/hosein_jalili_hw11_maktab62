const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/", (req, res) => res.send("admin page!!"));

router.get("/getAll%20Users", (req, res) => {
  res.sendFile(path.join(__dirname, "../json/data.json"));
});

module.exports = router;
