const express = require("express");
const router = express.Router();

const { listUsers, createUser, findUser } = require("../controllers/usersController");

router.route("/").get(listUsers);

router.route("/:id").get(findUser).post(createUser);

module.exports = router;
