//LIB IMPORTS
const { hash } = require("bcryptjs")

//CONTROLERS IMPORTS
const { UserControler } = require('/controller/UserControler')
const { DatabaseControler } = require('/controller/DatabaseControler')

//VALIDATORS IMPORTS
const { passwordValidator } = require("/lib/validators/passwordValidator")
const { sessionValidator } = require("/lib/validators/sessionValidator.js")

const changePassword = async (req, res) => {

  if (!await sessionValidator(req, res)) {
    res.send("Unauthorised")
    res.end()
  }

  let data
  typeof req.body === "string" ? data = JSON.parse(req.body) : data = req.body
  if (await passwordValidator(data.password) === true) {

    DatabaseControler.connect()

    await UserControler.changePassword(data.userId, await hash(data.password, 12))

    res.status(200).json({
      message: "Password Changed",
      status: 200
    })

  } else {

    res.status(401).json({
      message: "Password Unvalable",
      status: 401
    })

  }

  res.end()

}

export default changePassword