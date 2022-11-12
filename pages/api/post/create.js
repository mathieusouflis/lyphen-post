const { PostControler } = require('/controller/PostControler')
const { DatabaseControler } = require('/controller/DatabaseControler')

const createPost = async (req, res) => {
  DatabaseControler.connect()
  const body = req.body
  await PostControler.create(body.text, body.images)
  res.json({ message: "Post Added", status: 200 })
  res.end()
}

export default createPost