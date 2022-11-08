const { emailValidator } = require("../../../utils/validators/emailValidator")

const validator = async (req, res) => {
  const data = req.body
  await emailValidator(data.email) === true ? res.status(200).json({ message: "Email Valable", status: 200 }) : res.status(401).json({ message: "Email Unvalable", status: 401 })
  res.end()
}

export default validator