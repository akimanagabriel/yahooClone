const express = require("express");
const route = require("./routes");
const app = express();

app.use(route);
app.set("view engine", "ejs");

const port = 5000;
app.listen(port, function () {
  console.log(`server running on http://localhost:${port}`);
});

