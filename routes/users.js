const router = require("express").Router();
const {getUsers, getProfileUser, createUser} = require("../controllers/user");

router.get("/users", getUsers);
router.get("/users/:id", getProfileUser);
router.post("/users", createUser)

module.exports = router;
