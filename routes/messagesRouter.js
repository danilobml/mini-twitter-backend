const express = require("express");
const router = express.Router();

const { listMessages, createMessage, findMessage } = require("../controllers/messagesController");

router.route("/").get(listMessages);

router.route("/:id").get(findMessage).post(createMessage);

module.exports = router;
