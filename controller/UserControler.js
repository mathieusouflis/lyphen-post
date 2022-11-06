const { User } = require("../Model/User.js")

class UserControler {
  static async create(username, email, password) {
    await User.create({
      username: username,
      email: email,
      password: password,
    })
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