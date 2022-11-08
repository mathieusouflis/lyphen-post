const mongoose = require("mongoose")
const Schema = mongoose.Schema

const Post = mongoose.models.Post || mongoose.model('Post', new Schema({
  author: String,
  likes: Array,
  vue: Array,
  shared: Array,
  content: {
    text: String,
    images: Array,
  },
  comments: Array
}, { timestamps: true }))

module.exports = { Post }