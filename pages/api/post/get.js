//CONTROLERS IMPORTS
const { PostControler } = require('/controller/PostControler')
const { DatabaseControler } = require('/controller/DatabaseControler')

//VALIDATORS IMPORTS
const { sessionValidator } = require("/lib/validators/sessionValidator.js")

const getPost = async (req, res) => {

  if (!await sessionValidator(req, res)) {
    res.send("Unauthorised")
    res.end()
  }

  let data
  typeof req.body === "string" ? data = JSON.parse(req.body) : data = req.body

  DatabaseControler.connect()

  const post = await PostControler.get(data.postId)

  res.json({
    post: post,
    status: 200
  })
  res.end()
}

export default getPost;