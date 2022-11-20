const { PostControler } = require('/controller/PostControler')
const { DatabaseControler } = require('/controller/DatabaseControler')
const { apiValidator } = require("/lib/validators/apiValidator.js")
const getAllPosts = async (req, res) => {
  apiValidator(req.body.apiKey, res)
  DatabaseControler.connect()
  const posts = await PostControler.getAll()
  res.json({ posts: posts, status: 200 })
  res.end()
}

export default getAllPosts;