const mongoose = require("mongoose")
const Schema = mongoose.Schema

const User = mongoose.models.User || mongoose.model('User', new Schema({
  username: String,
  email: String,
  password: String,
  avatar: { type: String, default: "https://i.imgur.com/WReVJjX.png" },
  description: { type: String, default: "" },
  abonements: Array,
  abones: Array,
  postLiked: Array,
  posts: Array,
  comments: Array,
  messages: Array,
}, { timestamps: true }))

module.exports = { User }