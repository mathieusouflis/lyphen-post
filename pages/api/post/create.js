//CONTROLERS IMPORTS
const { PostControler } = require('/controller/PostControler')
const { DatabaseControler } = require('/controller/DatabaseControler')

//VALIDATORS IMPORTS
const { sessionValidator } = require("/lib/validators/sessionValidator.js")


const createPost = async (req, res) => {

  if (!await sessionValidator(req, res)) {
    res.send("Unauthorised")
    res.end()
  }

  let data
  typeof req.body === "string" ? data = JSON.parse(req.body) : data = req.body
  DatabaseControler.connect()

  await PostControler.create(session.id, data.text, data.images)

  res.json({
    message: "Post Added",
    status: 200
  })
  res.end()

}

export default createPost