//CONTROLERS IMPORTS
const { PostControler } = require('/controller/PostControler')
const { DatabaseControler } = require('/controller/DatabaseControler')

//VALIDATORS IMPORTS
const { sessionValidator } = require("/lib/validators/sessionValidator.js")

const getAllPosts = async (req, res) => {

  if (!await sessionValidator(req, res)) {
    res.send("Unauthorised")
    res.end()
  }

  DatabaseControler.connect()

  const posts = await PostControler.getAll()

  res.json({
    posts: posts,
    status: 200
  })
  res.end()

}

export default getAllPosts;