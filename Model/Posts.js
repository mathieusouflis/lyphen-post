const mongoose = require("mongoose")
const Schema = mongoose.Schema

const Post = mongoose.models.Post || mongoose.model('Post', new Schema({
  author: String, // L'ID de l'auteur
  likes: Array, // La listes des id des gens qui ont like
  vue: Array, // La liste des id des gens qui ont vue (SOON)
  shared: Array, // La liste des id des gens qui ont partagés
  content: {
    text: String, // Le contenue text du post
    images: Array, // La listes des images du post (max4)
  },
  comments: Array // La liste des id des commentaires
}, { timestamps: true }))

module.exports = { Post }