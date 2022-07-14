const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const messageSchema = new Schema(
  {
    post_image: { type: String },
    user: { type: Schema.Types.ObjectId, ref: "User" },
    text: { type: String, max: 280, required: true },
    likes: { type: Number },
  },
  { timestamps: true }
);

const Message = mongoose.model("Message", messageSchema);

module.exports = Message;
