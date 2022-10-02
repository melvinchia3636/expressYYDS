const express = require("express");
const bodyParser = require("body-parser");
const moment = require("moment");

const playingAround = require("./routers/playingAround");
const nameList = require("./routers/nameList");

const app = express();
// use custom parser as middleware so we can process JSON bodies
app.use(bodyParser.json());

app.use((req, res, next) => {
  console.log(`[${moment().format("HH:MM:SS")}] ${req.method} ${req.path}`);
  next();
});

// now you can put the route you have splitted into your main app
app.use("/play", playingAround);
app.use("/namelist", nameList);

app.listen(3636, () => {
  console.log("Server started on port 3636");
});
