const cors = require("cors");
const express = require("express");


const app = express();


app.use(cors());
app.use(express.json());


app.get("/", (req, res) => {
  res.send("Welcome to Sneakers App Sucka");
});


module.exports = app;