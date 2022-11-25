const { User } = require('/Model/User.js')

const usernameValidator = async (username) => {
  const response = await User.findOne({ username: { $regex: new RegExp(username, "i") } }).exec() ? false : true
  return response ? false : true
}

module.exports = { usernameValidator }