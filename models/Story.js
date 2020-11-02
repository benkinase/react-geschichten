const { Schema, model } = require("mongoose");
const { ObjectId } = Schema.Types;

const StorySchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  content: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: "public",
    enum: ["public", "private"],
  },
  likes: [{ type: ObjectId, ref: "User" }],
  comments: [
    {
      text: String,
      username: String,
      user: { type: ObjectId, ref: "User" },
    },
  ],

  user: {
    type: ObjectId,
    ref: "User",
    index: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = model("Story", StorySchema);
