const router = require("express").Router();
const {getCard} = require("../controllers/card");

router.get("/cards", getCard);

module.exports = router;
