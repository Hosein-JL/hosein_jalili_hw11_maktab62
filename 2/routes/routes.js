const express = require("express");
const router = express.Router();
const path = require("path");

router.use((req, res) => {
  res.sendFile(path.join(__dirname, "../views/login.html"));
});

module.exports = router;
