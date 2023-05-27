const User = require("../models/User.model");

module.exports.userController = {
  createUser: async (req, res) => {
    const createdUser = await User.create({
      name: req.body.name,
    });
    res.json(createdUser);
  },
  savedTwitt: async (req, res) => {
    const savedTwitt = await User.findByIdAndUpdate(req.params.id, {
      $push: { saves: req.params.twittId },
    });
    res.json(savedTwitt);
  },
  deleteSavedTwitt: async (req, res) => {
    const deleteSavedTwitt = await User.findByIdAndUpdate(req.params.id, {
      $pull: { saves: req.params.twittId },
    });
    res.json(deleteSavedTwitt);
  },
  deleteUser: async (req, res) => {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    res.json(deletedUser);
  },
};
