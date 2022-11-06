const User = require('../../Model/User')

const loginUserValidator = async (email, password) => {
  const response = await User.findOne({ email: { $regex: new RegExp(email, "i") }, password: password })
  return response && response != null && email.toLocaleLowerCase() === response.email.toLocaleLowerCase() ? true : false
}

module.exports = { loginUserValidator }