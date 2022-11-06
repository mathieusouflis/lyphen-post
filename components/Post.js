const Post = ({ post }) => {
  console.log(post._id)
  const likePost = async () => {
    const request = await fetch("/api/post/like", {
      method: "POST",
      body: JSON.stringify({
        userId: "635e8de77363ad7d6636085e",
        postId: post._id
      }),
      headers: {
        'Content-Type': 'application/json; charset=UTF-8'
      }
    })

    const requestJson = await request.json()
    alert(requestJson.message)
  }
  return (
    <div>
      <p>{post.content.text}</p>
      <p>Likes : {post.likes.length}</p>
      <button onClick={(e) => {
        console.log("Test")
        likePost()
      }}>Like</button>
    </div>
  )
}

export default Post