//CONTROLERS IMPORTS
const { UserControler } = require('/controller/UserControler')
const { DatabaseControler } = require('/controller/DatabaseControler')
const { usernameValidator } = require('/lib/validators/usernameValidator')
const { emailValidator } = require('/lib/validators/emailValidator')
const { passwordValidator } = require('/lib/validators/passwordValidator')
const { hash } = require("bcryptjs")
const { apiValidator } = require("/lib/validators/apiValidator.js")

const createUser = async (req, res) => {
  apiValidator(req.body.apiKey, res)
  DatabaseControler.connect()
  const data = req.body
  const usernameValidity = await usernameValidator(data.username)
  const emailValidity = await emailValidator(data.email)
  const passwordValidity = await passwordValidator(data.password)
  if (!usernameValidity || !emailValidity || !passwordValidity) {
    res.status(401).json({ message: "Some errors", status: 401, usernameValidity, emailValidity, passwordValidity }).end()
  } else {
    UserControler.create(data.username, data.email, await hash(data.password, 12))
    res.status(200).json({ message: "User Added", status: 200, usernameValidity, emailValidity, passwordValidity }).end()
  }
}

export default createUser