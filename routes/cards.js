const router = require("express").Router();
const path = require("path");
const readFile = require("../helpers/reader");

router.get("/cards", (req, res) => {
  readFile(path.join(__dirname, "..", "data", "cards.json"))
    .then((users) => res.status(200).send(users))
    .catch((err) => res.status(400).send(err));
});

module.exports = router;
