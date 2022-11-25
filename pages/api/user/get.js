//CONTROLERS IMPORTS
const { UserControler } = require('/controller/UserControler')
const { DatabaseControler } = require('/controller/DatabaseControler')

//VALIDATORS IMPORTS
const { sessionValidator } = require("/lib/validators/sessionValidator.js")

const getUser = async (req, res) => {

  if (!await sessionValidator(req, res)) {
    res.send("Unauthorised")
    res.end()
  }

  let data
  typeof req.body === "string" ? data = JSON.parse(req.body) : data = req.body

  DatabaseControler.connect()

  const user = await UserControler.get(data.userId)

  res.status(200).json({
    message: "User Found",
    status: 200,
    user
  })
  res.end()

}

export default getUser