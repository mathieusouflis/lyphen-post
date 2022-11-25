//VALIDATORS IMPORTS
const { loginUserValidator } = require("/lib/validators/loginUserValidator")
const { sessionValidator } = require("/lib/validators/sessionValidator.js")

//CONTROLERS IMPORTS
const { DatabaseControler } = require("/controller/DatabaseControler")

const login = async (req, res) => {

  let data
  typeof req.body === "string" ? data = JSON.parse(req.body) : data = req.body

  await DatabaseControler.connect()

  await loginUserValidator(data.email, data.password) === true ? res.status(200).json({
    message: "Login Ok",
    status: 200
  }) : res.status(401).json({
    message: "Login Failed",
    status: 401
  })

  res.end()

}

export default login