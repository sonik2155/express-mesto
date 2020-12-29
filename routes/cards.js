const cardsRouter = require("express").Router();

const {
  getCards,
  createCard,
  deleteCard,
 
} = require("../controllers/cards");

cardsRouter.get("/", getCards);
cardsRouter.post("/", createCard);
cardsRouter.delete("/:_id", deleteCard);

module.exports = cardsRouter;
