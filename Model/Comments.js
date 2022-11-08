const mongoose = require("mongoose")
const Schema = mongoose.Schema

const Comment = mongoose.models.Comment || mongoose.model('Comment', new Schema({
  author: String,
  likes: Array,
  text: String,
  images: Array,
  comments: Array
}, { timestamps: true }))

module.exports = { Comment }