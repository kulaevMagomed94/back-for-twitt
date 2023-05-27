const Twitt = require("../models/Twitt.model");

module.exports.twittsControllers = {
  getTwitts: async (req, res) => {
    const twitt = await Twitt.find();
    res.send(twitt);
  },
  addTwitt: async (req, res) => {
    const addTwitt = await Twitt.create({ text: req.body.text });
    res.send(addTwitt);
  },
  likeTwitt: async (req, res) => {
    const changeTwitt = await Twitt.findByIdAndUpdate(req.params.id, {
      $push: { likes: req.params.userid },
    });
    res.send(changeTwitt);
  },
  deleteLikeTwitt: async (req, res) => {
    const deleteLikeTwitt = await Twitt.findByIdAndUpdate(req.params.id, {
      $pull: { saves: req.params.twittId },
    });
    res.send(deleteLikeTwitt);
  },
  deleteTwitt: async (req, res) => {
    const deletedTwitt = await Twitt.findByIdAndDelete(req.params.id);
    res.send(deletedTwitt);
  },
};
