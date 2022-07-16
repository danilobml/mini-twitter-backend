const express = require("express");
const router = express.Router();

const { listUsers, createUser, findUser, updateUser, deleteUser, findLoggedUser } = require("../controllers/usersController");

router.route("/").get(listUsers).post(createUser);

router.route("/profile/me").get(findLoggedUser);

router.route("/:id").get(findUser).patch(updateUser).delete(deleteUser);

module.exports = router;
