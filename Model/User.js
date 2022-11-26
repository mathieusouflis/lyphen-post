const mongoose = require("mongoose")
const Schema = mongoose.Schema

const User = mongoose.models.User || mongoose.model('User', new Schema({
  username: String, // Le nom de l'utilisateur.
  email: String, // L'email du compte (..)
  password: String, // Le mot de pass du compte (CHIFFRE)
  status: { type: String, default: "Open" }, // Open, Closed, Private, Locked, Banned
  role: { type: String, default: "User" }, // Owner, Admin, Mod, User
  avatar: { type: String, default: "https://i.imgur.com/WReVJjX.png" }, // D'autres liers vers des images
  description: { type: String, default: "" }, // La description du compte
  abonements: Array, // La liste de ses abonement
  followers: Array, // La liste de ses abonnés
  postLiked: Array, // La liste des ID des postes like
  posts: Array, // La liste des ID de ses posts
  comments: Array, // La liste des ID de ses commentaires
  messages: Array, // .... ?
}, { timestamps: true }))

module.exports = { User }