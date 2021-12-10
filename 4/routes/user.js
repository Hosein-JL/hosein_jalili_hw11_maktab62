const express = require("express");
const router = express.Router();
const path = require("path");
const fs = require("fs");
// const bodyParser = require("body-parser");

router.use(express.urlencoded({ extended: true }));
router.use(express.json());

var json = fs.readFileSync("4/json/data.json", "utf8");
json = JSON.parse(json);

router.get("/", (req, res) => res.send("user page!!"));

router.get("/getUser", (req, res) => {
  res.send("user Page!");
});

router.post("/getUser", (req, res) => {
  let user = json.find((user) => user.uid === Number(req.body.uid));
  if (!user) {
    res.status(404).send(`not found...!`);
  } else {
    res.status(200).send({ status: "success", data: user });
  }
});

module.exports = router;

//https://stackoverflow.com/questions/32327858/how-to-send-a-post-request-from-node-js-express
