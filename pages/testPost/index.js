import React, { useState, useEffect } from 'react';
const { useRouter } = require("next/router");
import { useSession, signIn, signOut } from "next-auth/react";

const Testpost = () => {
  const [text, setText] = useState("");
  const [images, setImages] = useState([]);
  const [imagePreview, setImagePreview] = useState();
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!session && status != "loading") router.push('/login');
  }, [session, status]);

  return session
    ? <form onSubmit={async (e) => {
      e.preventDefault()
      const requestPost = await fetch('/api/post/create', {
        method: "POST",
        body: JSON.stringify({
          text: text,
          images: images
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        }
      })
      const requestPostJSON = requestPost.json()
      if (requestPostJSON.status === 200) {
        console.log("Post ajouté a la base de donées.")
      }
    }}>
      <input type="text" name="text" onChange={(e) => {
        setText(e.target.value)
        console.log(e.target.value)
      }} />
      {/* <input type="file" name="images" multiple="multiple" onChange={(e) => {
        // let images_loc = images
        // console.log(e.target.files);
        // Object.keys(e.target.files).forEach((key, index) => {
        //   if (e.target.files[key].type) images_loc.push(e.target.files[key])
        // });
        // setImages(images_loc)
        // console.log(images)
      }} /> */}
      <input type="submit" value="submit" />
      {imagePreview ? <img src={imagePreview} /> : null}
    </form>
    : null;
}

export default Testpost;