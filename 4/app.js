const express = require("express");
const app = express();
const path = require("path/posix");
const port = 3000;
const routerAdmin = require("./routes/admin");
const routerUser = require("./routes/user");
const errPage = "Not found...!";

app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", routerAdmin);
app.use("/user", routerUser);

// https://stackoverflow.com/questions/6528876/how-to-redirect-404-errors-to-a-page-in-expressjs

//Error Handling 404

app.use(function (req, res) {
  res.status(404);
  // respond with html page
  if (req.accepts("html")) {
    res.send(`${errPage} (error 404)`);
    return;
  }
  // respond with json
  if (req.accepts("json")) {
    res.send({ error: "Not found" });
    return;
  }
  // default to plain-text. send()
  res.type("txt").send("Not found");
});

//Error Handling 500

routerAdmin.use((error, req, res, next) => {
  console.error(error.stack);
  res.status(500).send(errPage);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
