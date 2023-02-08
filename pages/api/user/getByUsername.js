//CONTROLERS IMPORTS
const { UserControler } = require('/controller/UserControler')
const { DatabaseControler } = require('/controller/DatabaseControler')

//VALIDATORS IMPORTS
const { sessionValidator } = require("/lib/validators/sessionValidator.js")

const getByUsername = async (req, res) => {
  console.log("---------------------------------------------")

  if (!await sessionValidator(req, res)) {
    res.send("Unauthorised")
    res.end()
  }

  let data
  typeof req.body === "string" ? data = JSON.parse(req.body) : data = req.body

  DatabaseControler.connect()

  const user = await UserControler.getByUsername(data.username)
  console.log(user)
  res.status(200).json({
    message: "User Found",
    status: 200,
    user
  })
  res.end()

}

export default getByUsername