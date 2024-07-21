const express = require("express");
const sneakers = express.Router();
const { getSneaker, getAllSneakers,createSneaker } = require("../queries/sneaker");

sneakers.get("/", async (req, res) => {
    const allSneakers = await getAllSneakers();
    if (allSneakers[0]) {
       res.status(200).json(allSneakers);
    } else {
        res.status(404).json({ error: "server error" })
    }
 
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

sneakers.post("/", async (req, res) => {
    const sneaker = await createSneaker(req.body);
    res.json(sneaker);
});

module.exports = sneakers;

