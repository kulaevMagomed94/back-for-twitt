const Comment = require("../models/Comment.model");

module.exports.commentsController = {
  getComments: async (req, res) => {
    const comments = await Comment.find();
    res.send(comments);
  },

  addComment: async (req, res) => {
    const addComment = await Comment.create({
      nameCommentator: req.body.name,
      textComment: req.body.text,
      twittID: req.body.twitt,
    });
    res.send(addComment);
  },

  deleteComment: async (req, res) => {
    const deletedComment = await Comment.findByIdAndDelete(req.params.id);
    res.send(deletedComment);
  },
};
