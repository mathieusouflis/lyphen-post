import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const PostPage = () => {
  const { data: session, status } = useSession()
  const [curentPost, setCurentPost] = useState([])
  const router = useRouter()
  const { postId } = router.query

  const fetchPost = async () => {
    console.log(typeof postId)
    const request = await fetch('/api/post/get', {
      method: "POST",
      body: JSON.stringify({
        apiKey: process.env.API_KEY,
        postId: postId
      })
    });
    const requestJson = await request.json()
    console.log(requestJson)
    setCurentPost(requestJson.post)
  }

  useEffect(() => {
    console.log(`Session : ${session}\nStatus : ${status}`)
    if (session && status === "authenticated") {
      fetchPost()
    } else if (!session && status != "loading") router.push('/login');
  }, [session, status]);


  // return session ? <>
  //   {/* {curentPost.length === 0 ? null : R.map((post) => {
  //     return <>
  //       <h1>{post._id}</h1>
  //     </>
  //   }, curentPost)} */}
  //   <div>
  //     <h1>{postId}</h1>
  //   </div>
  // </> : null

  return <p>{curentPost._id}</p>
}

export default PostPage