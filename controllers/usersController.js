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

const updateUser = async (req, res) => {
  const { id } = req.params;
  const { key, value } = req.body;
  try {
    const { modifiedCount } = await User.updateOne({ _id: id }, { [key]: value });
    if (!modifiedCount) return res.status(404).send("User not found");
    res.send("The user was updated successfully");
    // console.log(response);
  } catch (error) {
    console.log(error.message);
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedUser = await User.findOneAndDelete({ _id: id });
    if (!deletedUser) return res.status(404).send("User not found");
    res.json(deletedUser);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  listUsers,
  createUser,
  findUser,
  updateUser,
  deleteUser,
};
