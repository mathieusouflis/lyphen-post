const { User } = require("/Model/User.js")

class UserControler {

  //CREATION
  static async create(username, email, password) {
    await User.create({
      username: username,
      email: email.toLowerCase(),
      password: password,
    })
  }

  //GET
  static async get(id) {
    return await User.findById(id).exec()
  }

  ////USERNAME GET
  static async getByUsername(username) {
    return await User.findOne({ username: username }).exec();
  }

  //ACTIONS

  //// Status actions
  static async open(uid, reason = "") {
    await User.updateOne({ _id: uid }, { status: "Open" })
  }

  static async Close(uid, reason = "") {
    await User.updateOne({ _id: uid }, { status: "Closed" })
  }

  static async private(uid, reason = "") {
    await User.updateOne({ _id: uid }, { status: "Private" })
  }

  static async lock(uid, reason = "") {
    await User.updateOne({ _id: uid }, { status: "Locked" })
  }

  static async ban(uid, reason = "") {
    await User.updateOne({ _id: uid }, { status: "Banned" })
  }

  ////Roles Actions
  static async setOwner(uid) {
    await User.updateOne({ _id: uid }, { role: "Owner" })
  }

  static async setAdmin(uid) {
    await User.updateOne({ _id: uid }, { role: "Admin" })
  }

  static async setMod(uid) {
    await User.updateOne({ _id: uid }, { role: "Mod" })
  }

  static async setUser(uid) {
    await User.updateOne({ _id: uid }, { role: "User" })
  }

  //// User Profil Actions
  static async changeUsername(uid, newUsername) {
    await User.updateOne({ _id: uid }, { username: newUsername })
  }

  static async changePassword(uid, newPassword) {
    await User.updateOne({ _id: uid }, { password: newPassword })
  }

  static async changeEmail(uid, newEmail) {
    await User.updateOne({ _id: uid }, { email: newEmail })
  }

  static async changeAvatar(uid, newAvatar) {
    await User.updateOne({ _id: uid }, { avatar: newAvatar })
  }

  //// User Activity
  static async addAbonement(uid, abonementId) {
    let user = await User.findById(uid).exec()
    user.abonements.push(abonementId)
    await User.updateOne({ _id: uid }, { abonnements: user.abonements })
  }

  static async addFollow(uid, followId) {
    let user = await User.findById(uid).exec()
    user.followers.push(followId)
    await User.updateOne({ _id: uid }, { abonnements: user.followers })
  }

  static async addPostLike(uid, postId) {
    let user = await User.findById(uid).exec()
    user.postLiked.push(postId)
    await User.updateOne({ _id: uid }, { postLiked: user.postLiked })
  }

  static async addPost(uid, postId) {
    let user = await User.findById(uid).exec()
    user.posts.push(postId)
    await User.updateOne({ _id: uid }, { postLiked: user.posts })
  }

  static async addComment(uid, commentId) {
    let user = await User.findById(uid).exec()
    user.comments.push(commentId)
    await User.updateOne({ _id: uid }, { postLiked: user.comments })
  }

  // static async addMessages(uid, ...) {
  //   let user = await User.findById(uid).exec()
  //   user.postLiked.push(postId)
  //   await User.updateOne({ _id: uid }, { postLiked: user.postLiked })
  // }
}

module.exports = { UserControler }