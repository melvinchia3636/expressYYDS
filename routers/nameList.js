const express = require("express");
const router = express.Router();

let nameList = ["Liming", "Mok", "Daniel", "Zhikin"];

router.get("/list", (req, res) => {
  res.send(nameList);
});

router.post("/add", (req, res) => {
  const { name } = req.body;

  if (name === undefined) {
    res.statusCode = 400;
    res.send({
      success: false,
      error: "'name' must be presented in request payload",
    });
  }

  nameList.push(name);

  res.send({
    success: true,
  });
});

router.delete("/delete/:index", (req, res) => {
  const index = parseInt(req.params.index, 10);
  console.log(index);

  if (!index && index !== 0) {
    res.statusCode = 400;
    res.send({
      success: false,
      error: "The params 'index' must be a valid number",
    });

    return;
  }

  if (index >= nameList.length) {
    res.statusCode = 400;
    res.send({
      success: false,
      error: "Index must not be larger than the nameList length - 1",
    });

    return;
  }

  nameList = nameList.filter((_, i) => i !== index);

  res.send({
    success: true,
  });
});

module.exports = router;
