const { User } = require('/Model/User')

const whitelist = process.env.WHITELIST.split(',')
console.log(whitelist)

const emailValidator = async (email) => {
  // Vérifier si l'utilisateur est en whitelist

  email = email.toLowerCase()

  let validity = false

  whitelist.forEach(emailWhitelist => {
    console.log(emailWhitelist)
    email === emailWhitelist ? validity = true : false
  })

  return validity

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