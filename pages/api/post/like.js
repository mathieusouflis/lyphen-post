const { PostControler } = require('/controller/PostControler')
const { DatabaseControler } = require('/controller/DatabaseControler')
const { apiValidator } = require("/lib/validators/apiValidator.js")

const likePost = async (req, res) => {
  const data = JSON.parse(req.body)
  apiValidator(data.apiKey, res)
  DatabaseControler.connect()
  await PostControler.like(data.userId, data.postId) === true ? res.json({ message: "Like ajouté !", status: 200 }) : res.json({ message: "Like retiré !", status: 200 })
  res.end()
}

export default likePost