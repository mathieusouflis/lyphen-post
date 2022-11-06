//CONTROLERS IMPORTS
const { UserControler } = require('../../../controller/UserControler')
const { DatabaseControler } = require('../../../controller/DatabaseControler')

const createUser = async (req, res) => {
  DatabaseControler.connect()
  const data = req.body
  UserControler.createUser(data.username, data.email, data.password)
  res.status(200).json({ message: "User Added", status: 200 }).end()
}

export default createUser