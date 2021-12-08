const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/:id", (req, res) => {
  console.log(req.params.id);
  res.sendFile(path.join(__dirname, `../views/${req.params.id}.html`));
});

module.exports = router;
