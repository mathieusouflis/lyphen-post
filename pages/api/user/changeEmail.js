//CONTROLERS IMPORTS
const { UserControler } = require('/controller/UserControler')
const { DatabaseControler } = require('/controller/DatabaseControler')

//VALIDATORS IMPORTS
const { emailValidator } = require("/lib/validators/emailValidator")
const { sessionValidator } = require("/lib/validators/sessionValidator.js")

const changeEmail = async (req, res) => {

  if (!await sessionValidator(req, res)) {
    res.send("Unauthorised")
    res.end()
  }

  let data
  typeof req.body === "string" ? data = JSON.parse(req.body) : data = req.body
  if (await emailValidator(data.email) === true) {

    DatabaseControler.connect()

    await UserControler.changeEmail(data.userId, data.email)

    res.status(200).json({
      message: "Email Changed",
      status: 200
    })

  } else {

    res.status(401).json({
      message: "Email Unvalable",
      status: 401
    })

  }

  res.end()

}

export default changeEmail