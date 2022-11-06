const { Post } = require('../Model/Posts')

class PostControler {

  static async create(text, images) {
    await Post.create({
      author: "635e8de77363ad7d6636085e",
      content: {
        text
      },
    })
  }

  static async getAll() {
    return await Post.find({})
  }

  static async like(uid, postId) {
    const post = await Post.findOne({ _id: postId }).exec()
    let postLikes = post.likes
    let check = true
    for (let i = 0; i < postLikes.length; i++) {
      if (postLikes[i] === uid) {
        postLikes.splice(i)
        check = false
        break
      }
    }
    check === true ? postLikes.push(uid) : null
    await Post.updateOne({ _id: postId }, { likes: postLikes })
    return check
  }
}

module.exports = { PostControler }