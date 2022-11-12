const { PostControler } = require('/controller/PostControler')
const { DatabaseControler } = require('/controller/DatabaseControler')

const getAllPosts = async (req, res) => {
  DatabaseControler.connect()
  const posts = await PostControler.getAll()
  console.log(posts)
  res.json({ posts: posts, status: 200 })
  res.end()
}

export default getAllPosts