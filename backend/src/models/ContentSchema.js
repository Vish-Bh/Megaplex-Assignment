const mongoose = require("mongoose");

const ContentSchema = new mongoose.Schema({
  _id: String,
  data: Object,
});
module.exports = mongoose.model("Content", ContentSchema);