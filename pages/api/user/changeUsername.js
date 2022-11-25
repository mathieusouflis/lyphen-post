//CONTROLERS IMPORTS
const { UserControler } = require('/controller/UserControler')
const { DatabaseControler } = require('/controller/DatabaseControler')

//VALIDATORS IMPORTS
const { usernameValidator } = require("/lib/validators/usernameValidator")
const { sessionValidator } = require("/lib/validators/sessionValidator.js")

const changeUsername = async (req, res) => {

  if (!await sessionValidator(req, res)) {
    res.send("Unauthorised")
    res.end()
  }

  let data
  typeof req.body === "string" ? data = JSON.parse(req.body) : data = req.body
  if (await usernameValidator(data.username) === true) {

    DatabaseControler.connect()

    await UserControler.changeUsername(data.userId, data.username)

    res.status(200).json({
      message: "Username Changed",
      status: 200
    })

  } else {

    res.status(401).json({
      message: "Username Unvalable",
      status: 401
    })

  }

  res.end()

}

export default changeUsername