const express = require("express");
const sneakers = express.Router();
const {
  getSneaker,
  getAllSneakers,
  createSneaker,
  updateSneaker,
  deleteSneaker,
} = require("../queries/sneaker");
const {
  checkBoolean,
  checkModel,
} = require("../../validations/checkSneakers.js");

sneakers.get("/", async (req, res) => {
  const allSneakers = await getAllSneakers();
  if (allSneakers[0]) {
    res.status(200).json(allSneakers);
  } else {
    res.status(404).json({ error: "server error" });
  }
});

sneakers.get("/:id", async (req, res) => {
  const { id } = req.params;
  const sneaker = await getSneaker(id);
  if (sneaker) {
    res.json(sneaker);
  } else {
    res.status(404).json({ error: "not found" });
  }
});

sneakers.post("/", checkBoolean, checkModel, async (req, res) => {
  const sneaker = await createSneaker(req.body);
  res.json(sneaker);
});

sneakers.put("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const updatedSneaker = await updateSneaker(id, req.body);
    res.status(200).json(updatedSneaker);
  } catch (error) {
    res.status(404).json({ error: `No sneaker with the id ${id} exists` });
  }
});

sneakers.delete("/:id", async (req, res) => {
  const { id } = req.params;
  console.log(req.params);
  const deletedSneaker = await deleteSneaker(id);
  if (deletedSneaker.id) {
    res.status(200).json(deletedSneaker);
  } else {
    res.status(404).json("Sneaker not found");
  }
});

module.exports = sneakers;
