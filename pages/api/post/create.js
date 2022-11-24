import { unstable_getServerSession } from "next-auth/next"
import { authOptions } from "../auth/[...nextauth]"

const { PostControler } = require('/controller/PostControler')
const { DatabaseControler } = require('/controller/DatabaseControler')
const { apiValidator } = require("/lib/validators/apiValidator.js")

const createPost = async (req, res) => {
  console.log(await unstable_getServerSession(req, res, authOptions))
  // const data = JSON.parse(req.body)
  // apiValidator(data.apiKey, res)
  // DatabaseControler.connect()
  // await PostControler.create(data.text, data.images)
  // res.json({ message: "Post Added", status: 200 })
  // res.end()
}

export default createPost