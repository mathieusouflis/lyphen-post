const mongoose = require("mongoose")
const Schema = mongoose.Schema

const Image = mongoose.models.Image || mongoose.model('Image', new Schema({
  link: String, // Lel iens vers l'image
  desc: { type: String, default: "" }, // La description de l'image
  spoiler: { type: Boolean, default: false } // Est ce que l'image est spoiler
}))

module.exports = { Image }