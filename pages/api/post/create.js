//AUTH IMPORTS
import { unstable_getServerSession } from "next-auth"
import { authOptions } from "./auth/[...nextauth]"

//CONTROLERS IMPORTS
const { PostControler } = require('/controller/PostControler')
const { DatabaseControler } = require('/controller/DatabaseControler')

//VALIDATORS IMPORTS
const { apiValidator } = require("/lib/validators/apiValidator.js")


const createPost = async (req, res) => {

  const data = JSON.parse(req.body)
  apiValidator(data.apiKey, res)

  DatabaseControler.connect()

  const session = await unstable_getServerSession(req, res, authOptions)
  await PostControler.create(session.id, data.text, data.images)

  res.json({
    message: "Post Added",
    status: 200
  })
  res.end()

}

export default createPost