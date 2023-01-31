const mongoose = require("mongoose");

const blogSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, "please provide title"],
  },
  desc: {
    type: String,
    required: [true, "please provide Description"],
  },
  image: {
    type: String,
    required: [true, "please provide Image Url"],
  },
  publish: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("blog", blogSchema);
