const { User } = require("/Model/User.js")

class UserControler {
  static async create(username, email, password) {

    //CREATION
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

  //CHANGEMENTS
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

  // static async delete(uid) {
  //   await User.deleteOne({ _id: utils.decToHex(uid) });
  // }

  // static async update(uid, changes) {
  //   User.findByIdAndUpdate(uid, { changes })
  // }

  // static getId = async (uid) => {
  //   return User.findById(utils.decToHex(uid), (err, user) => {
  //     return user
  //   })
  // }
}

module.exports = { UserControler }