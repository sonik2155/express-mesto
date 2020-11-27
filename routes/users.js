const router = require("express").Router();
const path = require("path");
const readFile = require("../helpers/reader");

router.get("/users", (req, res) => {
  readFile(path.join(__dirname, "..", "data", "users.json"))
    .then((users) => res.status(200).send(users))
    .catch((err) => res.status(400).send(err));
});

router.get("/users/:id", (req, res) => {
  readFile(path.join(__dirname, "..", "data", "users.json"))
    .then((users) => users.find((user) => user._id === req.params.id))
    .then((user) => {
      if (!user) {
        return res.status(404).send({ message: "Нет пользователя с таким id" });
      }
      return res.status(200).send(user);
    })
    .catch((err) => res.status(400).send(err));
});

module.exports = router;
