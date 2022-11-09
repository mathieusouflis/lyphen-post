const { User } = require('../../Model/User')

const emailValidator = async (email) => {
  // eslint-disable-next-line
  const validRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  if (validRegex.test(email)) {
    const response = await User.findOne({ email: { $regex: new RegExp(email, "i") } }).exec()
    return response && response != undefined ? false : true
  } else {
    return false
  }
}

module.exports = { emailValidator }