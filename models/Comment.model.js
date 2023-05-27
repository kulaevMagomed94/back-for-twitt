const mongoose = require("mongoose");

const commentSchema = mongoose.Schema({
  nameCommentator: String,
  textComment: String,
  twittID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Twitt",
  },
  text: String,
});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
