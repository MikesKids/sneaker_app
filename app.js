const cors = require("cors");
const express = require("express");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to Sneakers App Sucka");
});

const sneakersController = require("./back-end/controllers/sneakersController.js");
app.use("/sneakers", sneakersController);

app.get("*", (req, res) => {
  res.status(404).send("Page not found, do better");
});

module.exports = app;
