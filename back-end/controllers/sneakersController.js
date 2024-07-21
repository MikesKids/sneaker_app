const express = require("express");
const sneakers = express.Router();

sneakers.get("/", (req, res) => {
  res.json({ status: "ok" });
});

sneakers.get("/:id", async (req, res) => {
    const { id } = req.params;
    const sneaker = await getSneaker(id);
    if(sneaker) {
        res.json(sneaker);
    } else {
        res.status(404).json({ error: "not found" });
    }
})

module.exports = sneakers;

