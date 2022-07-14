const express = require("express");
const router = express.Router();

const { listUsers, createUser, findUser, updateUser, deleteUser } = require("../controllers/usersController");

router.route("/").get(listUsers).post(createUser);

router.route("/:id").get(findUser).patch(updateUser).delete(deleteUser);

module.exports = router;
