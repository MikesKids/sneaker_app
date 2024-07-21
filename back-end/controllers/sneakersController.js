const express = require("express");
const sneakers = express.Router();

sneakers.get("/", (req, res) => {
  res.json({ status: "ok" });
});

module.exports = sneakers;
