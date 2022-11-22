const { PostControler } = require('/controller/PostControler')
const { DatabaseControler } = require('/controller/DatabaseControler')
const { apiValidator } = require("/lib/validators/apiValidator.js")

const createPost = async (req, res) => {
  const data = JSON.parse(req.body)
  apiValidator(data.apiKey, res)
  DatabaseControler.connect()
  await PostControler.create(data.text, data.images)
  res.json({ message: "Post Added", status: 200 })
  res.end()
}

export default createPost