const express = require("express");
const router = express.Router();

const { listMessages, createMessage, findMessage, updateMessage, deleteMessage } = require("../controllers/messagesController");

router.route("/").get(listMessages).post(createMessage);

router.route("/:id").get(findMessage).patch(updateMessage).delete(deleteMessage);

module.exports = router;
