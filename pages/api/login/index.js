//UTILS IMPORT
const { loginUserValidator } = require("../../../utils/validators/loginUserValidator")
const { DatabaseControler } = require('../../../controller/DatabaseControler')

const login = async (req, res) => {
  DatabaseControler.connect()
  const data = req.body
  console.log(loginUserValidator(data.email, data.password))
  await loginUserValidator(data.email, data.password) === true ? res.status(200).json({ message: "Login Ok", status: 200 }) : res.status(400).json({ message: "Login Failed", status: 400 })
  res.end()
}

export default login