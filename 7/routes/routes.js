const express = require("express");
const router = express.Router();
const path = require("path");
const bodyParser = require("body-parser");
const fs = require("fs");

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

var json = fs.readFileSync("7/json/data.json", "utf8");
json = JSON.parse(json);

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/login.html"));
});

router.post("/login", (req, res) => {
  let user = json.find(
    (user) =>
      user.uid === Number(req.body.uid) && user.firstName === req.body.firstName
  );
  if (!user) {
    res.status(404).send(`کاربری با این مشخصات وجود ندارد.`);
  } else {
    res.status(200).send("ورود موفقیت آمیز");
  }
});

module.exports = router;
