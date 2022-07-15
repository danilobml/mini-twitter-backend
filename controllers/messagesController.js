const Message = require("../models/Messages");

const listMessages = async (req, res) => {
  try {
    const messages = await Message.find({}).populate("user");
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

// const findMessage = async (req, res) => {
//   const { id } = req.params;
//   try {
//     const message = await Message.findOne({ id }).populate("user");
//     if (!message) return res.status(404).send("No message with such name");
//     res.json(message);
//   } catch (error) {
//     res.status(500).send(error.message);
//   }
// };
const findMessage = async (req, res) => {
  const { id } = req.params;
  try {
    const message = await Message.findById(id).populate("user");
    if (!message) return res.status(404).send("No message with such name");
    res.json(message);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const findAllUserMessages = async (req, res) => {
  const { id } = req.params;
  try {
    const message = await Message.find({ id }).populate("user");
    if (!message) return res.status(404).send("No message with such name");
    res.json(message);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const updateMessage = async (req, res) => {
  const { id } = req.params;
  const { key, value } = req.body;
  try {
    const { modifiedCount } = await Message.updateOne({ _id: id }, { [key]: value });
    if (!modifiedCount) return res.status(404).send("User not found");
    res.send("The message was updated successfully");
    // console.log(response);
  } catch (error) {
    console.log(error.message);
  }
};

const deleteMessage = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedMessage = await Message.findOneAndDelete({ _id: id });
    if (!deletedMessage) return res.status(404).send("Message not found");
    res.json(deletedMessage);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  listMessages,
  createMessage,
  findMessage,
  updateMessage,
  deleteMessage,
  findAllUserMessages,
};
