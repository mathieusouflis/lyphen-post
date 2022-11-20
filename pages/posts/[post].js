
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

// COMPONENT IMPORT
import Post from "/components/Post";

const Posts = async () => {
  const { data: session, status } = useSession()
  const [posts, setPosts] = useState([])
  const router = useRouter()
  const { post } = router.query

  const fetchPost = async () => {
    const request = await fetch('/api/post/getId', {
      method: "GET",
      body: {
        apiKey: process.env.API_KEY,
        postId: post._id
      }
    });
    const requestJson = await request.json()
    console.log(requestJson.post)
    setPosts(requestJson.post)
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
    {posts.length === 0 ? null : R.map((post) => {
      return <Post key={post._id} post={post} />
    }, posts)}
  </> : null
}

export default Posts