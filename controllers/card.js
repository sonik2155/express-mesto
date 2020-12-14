const Card = require("../models/card")

module.exports.getCard = (res, req) => {
  Card.find({})
  .then((cards) => res.status(200).send(cards))
  .catch((err) => res.status(500).send(err))
};

