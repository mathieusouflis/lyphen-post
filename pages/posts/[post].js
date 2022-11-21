
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const PostPage = async () => {
  const { data: session, status } = useSession()
  const [curentPost, setCurentPost] = useState([])
  const router = useRouter()
  const { post } = router.query

  const fetchPost = async () => {
    const request = await fetch('/api/post/get', {
      method: "GET",
      body: {
        apiKey: process.env.API_KEY,
        postId: post
      }
    });
    const requestJson = await request.json()
    setCurentPost(requestJson.post)
  }

  useEffect(() => {
    if (session && status === "authenticated") {
      fetchPost()
    } else if (!session && status != "loading") router.push('/login');
  }, [session, status]);

  useEffect(() => {
    if (!session && status != "loading") router.push('/login');
  }, [session, status]);


  return session ? <>
    {curentPost.length === 0 ? null : R.map((post) => {
      return <>
        <h1>{post._id}</h1>
      </>
    }, curentPost)}
    <div>
      <h1>Hey !</h1>
    </div>
  </> : null
}

export default PostPage