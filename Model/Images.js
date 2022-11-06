const mongoose = require("mongoose")
const Schema = mongoose.Schema

const Image = mongoose.model('Image', new Schema({
  link: String,
  desc: { type: String, default: "" },
  spoiler: { type: Boolean, default: false }
}))

module.exports = { Image }