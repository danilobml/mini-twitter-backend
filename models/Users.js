const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    first_name: { type: String, min: 2, max: 50, required: true },
    last_name: { type: String, min: 2, max: 50, required: true },
    handle: { type: String, min: 3, max: 10, required: true },
    email: { type: String, required: true },
    age: { type: Number, min: 0, max: 130, required: true },
    profile_picture: { type: String, required: true },
    background_picture: { type: String, required: true },
    bio: { type: String, max: 140 },
    location: { type: String },
    followers: { type: Number },
    following: { type: Number },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
