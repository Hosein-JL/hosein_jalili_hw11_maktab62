const express = require("express");
const port = 3000;

const app = express();

app.use((req, res) => res.send("Hello World!"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
