const { PostControler } = require('/controller/PostControler')
const { DatabaseControler } = require('/controller/DatabaseControler')
const { apiValidator } = require("/lib/validators/apiValidator.js")

const getPost = async (req, res) => {
  console.log("getOne");
  const data = JSON.parse(req.body)
  apiValidator(data.apiKey, res)
  DatabaseControler.connect()
  console.log(data.postId)

  const post = await PostControler.get(data.postId)
  res.json({ post: post, status: 200 })
  res.end()
}

export default getPost;