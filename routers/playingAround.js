const express = require("express");

// if you have too much routes, you can split them into dirrerent routers
// and put them inside different files
const router = express.Router();

// you can have multiple steps of callback functions
router.get(
  "/sus",
  (req, res, next) => {
    console.log("First step");
    next();
  },
  (req, res, next) => {
    console.log("Second step");
    next();
  },
  (req, res) => {
    res.send("Third step");
  }
);

// you can send json with res.json() but this can only send json but not other stuff
router.get("/json", (req, res) => {
  res.json({
    name: "MRGA",
    symbol: ";-;",
  });
});

// you can redirect client to other place
router.get("/portfolio", (req, res) => {
  res.redirect("https://thecodeblog.net");
});

// you can send file
router.get("/file", (req, res) => {
  // __dirname keywords return the location where this source code file is located
  res.sendFile(__dirname + "/mrgayyds.html");
});

router.get("/status/:code", (req, res) => {
  const code = parseInt(req.params.code);
  res.sendStatus(code);
});

// you can chain a route with different methods in one expression
router
  .route("/getorpost")
  .get((req, res) => {
    res.send("You're using GET method");
  })
  .post((req, res) => {
    res.send("You're using POST method");
  });

router.all("/anymethod", (req, res) => {
  res.send(`You're using ${req.method} method to request this route`);
});

// this is how you export stuff in common js
module.exports = router;
