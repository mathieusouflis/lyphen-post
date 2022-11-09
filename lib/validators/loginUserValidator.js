const { User } = require('../../Model/User')

const loginUserValidator = async (email, password) => {
  const response = await User.findOne({ email, password }).exec()
  console.log(response)
  return response && response != null
}

module.exports = { loginUserValidator }