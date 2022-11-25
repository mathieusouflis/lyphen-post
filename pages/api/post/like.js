//CONTROLERS IMPORTS
const { PostControler } = require('/controller/PostControler')
const { DatabaseControler } = require('/controller/DatabaseControler')

//VALIDATORS IMPORTS
const { sessionValidator } = require("/lib/validators/sessionValidator.js")

const likePost = async (req, res) => {

  if (!await sessionValidator(req, res)) {
    res.send("Unauthorised")
    res.end()
  }

  let data
  typeof req.body === "string" ? data = JSON.parse(req.body) : data = req.body

  DatabaseControler.connect()

  await PostControler.like(data.userId, data.postId) === true ? res.json({
    message: "Like ajouté !",
    status: 200
  }) : res.json({
    message: "Like retiré !",
    status: 200
  })
  res.end()

}

export default likePost