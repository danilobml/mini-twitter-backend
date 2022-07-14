const User = require("../models/Users");

const listUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const createUser = async (req, res) => {
  const user = req.body;

  try {
    const createdUser = await User.create(user);
    res.json(createdUser);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const findUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findOne({ id });
    if (!user) return res.status(404).send("No team with such name");
    res.json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
  listUsers,
  createUser,
  findUser,
};
