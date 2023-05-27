const mongoose = require("mongoose");

const twittSchema = mongoose.Schema({
  text: String,
  likes: [{ type: mongoose.SchemaTypes.ObjectId, ref: "User" }],
});

const Twitt = mongoose.model("Twitt", twittSchema);

module.exports = Twitt;
