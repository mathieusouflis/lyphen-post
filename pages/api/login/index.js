//UTILS IMPORT
const { loginUserValidator } = require("/lib/validators/loginUserValidator")
const { DatabaseControler } = require("/controller/DatabaseControler")
const login = async (req, res) => {
  const data = req.body
  await DatabaseControler.connect()
  await loginUserValidator(data.email, data.password) === true ? res.status(200).json({ message: "Login Ok", status: 200 }) : res.status(401).json({ message: "Login Failed", status: 401 })
  res.end()
}

export default login