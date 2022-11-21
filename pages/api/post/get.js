const { PostControler } = require('/controller/PostControler')
const { DatabaseControler } = require('/controller/DatabaseControler')
const { apiValidator } = require("/lib/validators/apiValidator.js")

const getPost = async (req, res) => {
  apiValidator(req.body.apiKey, res)
  DatabaseControler.connect()
  console.log(req.body.postId)
  const post = await PostControler.get(req.body.postId)
  res.json({ post: post, status: 200 })
  res.end()
}

export default getPost;