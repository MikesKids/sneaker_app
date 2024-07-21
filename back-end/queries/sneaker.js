const db = require("../db/dbConfig");

const getAllSneakers = async () => {
  try {
    const allSneaks = await db.any("SELECT * FROM sneakers");
    return allSneaks;
  } catch (error) {
    return error;
  }
};

const getSneaker = async (id) => {
  try {
    const oneSneak = await db.one("SELECT * FROM sneakers WHERE id=$1", id);
    return oneSneak;
  } catch (error) {
    return error;
  }
};

const createSneaker = async (sneaker) => {
  try {
    const newSneaker = await db.one(
      "INSERT INTO sneakers (brand, model, price, category, color, is_favorite) VALUES ($1, $2, $3, $4, $5, $6) RETURNING * ",
      [
        sneaker.brand,
        sneaker.model,
        sneaker.price,
        sneaker.category,
        sneaker.color,
        sneaker.is_favorite,
      ]
    );
    return newSneaker;
  } catch (error) {
    return error;
  }
};

const deleteSneaker = async (id) => {
  try {
    const deletedSneaker = await db.one(
      "DELETE FROM sneakers WHERE id=$1 RETURNING *",
      id
    );
    return deletedSneaker;
  } catch (error) {
    return error;
  }
};

const updateSneaker = async (id, sneaker) => {
  try {
    const updatedSneaker = await db.one(
      "UPDATE sneakers SET brand=$1, model=$2, price=$3, category=$4, color=$5, is_favorite=$6 WHERE id=$7 RETURNING *",
      [
        sneaker.brand,
        sneaker.model,
        sneaker.price,
        sneaker.category,
        sneaker.color,
        sneaker.is_favorite,
        id,
      ]
    );
    return updatedSneaker;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllSneakers,
  getSneaker,
  createSneaker,
  deleteSneaker,
  updateSneaker,
};
