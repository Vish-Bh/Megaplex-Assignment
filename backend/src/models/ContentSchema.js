const mongoose = require("mongoose");

const ContentSchema = new mongoose.Schema({
  data: Object, // store full website content
}, { timestamps: true });

module.exports = mongoose.model("Content", ContentSchema);