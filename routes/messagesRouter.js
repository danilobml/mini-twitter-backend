const express = require("express");
const router = express.Router();

const { listMessages, createMessage, findMessage, updateMessage, deleteMessage, findAllUserMessages } = require("../controllers/messagesController");

router.route("/").get(listMessages).post(createMessage);

router.route("/:id").get(findMessage).patch(updateMessage).delete(deleteMessage);

router.route("/author/:id").get(findAllUserMessages);

module.exports = router;
