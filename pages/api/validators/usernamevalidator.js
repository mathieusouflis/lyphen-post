//CONTROLERS IMPORTS
const { usernameValidator } = require('../../../utils/validators/UserControler')

const validator = async (req, res) => {
  const data = req.body
  await usernameValidator(data.username) === true ? res.status(200).json({ message: "Username Valable", status: 200 }) : res.status(400).json({ message: "Username Valable", code: 400 })
  res.end()
}

export default validator