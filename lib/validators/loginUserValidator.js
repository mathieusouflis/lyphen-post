const { User } = require('../../Model/User')
const { DatabaseControler } = require('../../controller/DatabaseControler')

const loginUserValidator = async (email, password) => {
  await DatabaseControler.connect()
  const response = await User.find({})
  console.log(response)
  return response && response != null ? true : false
}

module.exports = { loginUserValidator }