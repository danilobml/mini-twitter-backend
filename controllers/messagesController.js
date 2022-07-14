const Message = require("../models/Messages");

const listMessages = async (req, res) => {
  try {
    const messages = await Message.find({});
    res.json(messages);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const createMessage = async (req, res) => {
  const message = req.body;

  try {
    const createdMessage = await Message.create(message);
    res.json(createdMessage);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const findMessage = async (req, res) => {
  const { id } = req.params;
  try {
    const message = await Message.findOne({ id }).populate("user");
    if (!message) return res.status(404).send("No team with such name");
    res.json(message);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
  listMessages,
  createMessage,
  findMessage,
};
