const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const messageSchema = new Schema(
  {
    image: { type: String },
    user: { type: Schema.Types.ObjectId, ref: "User" },
    datePosted: { type: Date, required: true },
    text: { type: String, max: 280, required: true },
  },
  { timestamps: true }
);

const Message = mongoose.model("Message", messageSchema);

module.exports = Message;
