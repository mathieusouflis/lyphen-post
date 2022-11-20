const { PostControler } = require('/controller/PostControler')
const { DatabaseControler } = require('/controller/DatabaseControler')
const { apiValidator } = require("/lib/validators/apiValidator.js")

const likePost = async (req, res) => {
  apiValidator(req.body.apiKey, res)
  DatabaseControler.connect()
  const body = req.body
  await PostControler.like(body.userId, body.postId) === true ? res.json({ message: "Like ajouté !", status: 200 }) : res.json({ message: "Like retiré !", status: 200 })
  res.end()
}

export default likePost