const { User } = require('../../Model/User.js')

const usernameValidator = async (username) => {
  const response = await User.findOne({ username: { $regex: new RegExp(username, "i") } }).exec()
  return response && response != null && response.username.toLocaleLowerCase() === username.toLocaleLowerCase() ? false : true
}

module.exports = { usernameValidator }