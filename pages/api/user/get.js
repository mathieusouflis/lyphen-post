//CONTROLERS IMPORTS
const { UserControler } = require('/controller/UserControler')
const { DatabaseControler } = require('/controller/DatabaseControler')
const { apiValidator } = require("/lib/validators/apiValidator.js")

const getUser = async (req, res) => {
  const data = JSON.parse(req.body)
  apiValidator(data.apiKey, res)
  DatabaseControler.connect()
  const user = await UserControler.get(data.userId)
  res.status(200).json({ message: "User Found", status: 200, user })
  res.end()
}

export default getUser