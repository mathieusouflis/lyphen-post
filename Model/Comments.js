const mongoose = require("mongoose")
const Schema = mongoose.Schema

const Comment = mongoose.models.Comment || mongoose.model('Comment', new Schema({
  author: String, // L'ID de l'auteur du commentaire
  likes: Array, // L'id des gens ayant like le post
  content: {
    text: String, // Le contenu du commentaire
    images: Array, // Les images du commentaire
  },
  comments: Array // La liste des id des commentaires au commentaire
}, { timestamps: true }))

module.exports = { Comment }