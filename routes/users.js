const usersRouter = require("express").Router();

const {
  getUsers,
  getUser,
  createUser,
} = require("../controllers/users");

usersRouter.get("/", getUsers);
usersRouter.get("/:_id", createUser);
usersRouter.post("/", createUser);


module.exports = usersRouter;
