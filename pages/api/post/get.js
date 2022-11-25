//CONTROLERS IMPORTS
const { PostControler } = require('/controller/PostControler')
const { DatabaseControler } = require('/controller/DatabaseControler')

//VALIDATORS IMPORTS
const { apiValidator } = require("/lib/validators/apiValidator.js")

const getPost = async (req, res) => {

  const data = JSON.parse(req.body)
  apiValidator(data.apiKey, res)

  DatabaseControler.connect()

  const post = await PostControler.get(data.postId)

  res.json({
    post: post,
    status: 200
  })
  res.end()
}

export default getPost;