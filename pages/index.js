//LIB IMPORT
import { useState, useEffect } from "react"
import * as R from 'ramda'
import Image from "next/image"

//COMPONENT IMPORT
import Post from "/components/Post"
import HeaderButtons from "/components/HeaderButtons"

//ASSETS IMPORT
import butterWhiteIcon from "/assets/icons/ButterLogoWhiteRounded.png"
import butterBlackIcon from "/assets/icons/ButterLogoBlackRounded.png"

const Home = () => {

  const [posts, setPosts] = useState([])

  // const fetchdata = async () => {
  //   const request = await fetch('/api/post/getAll')
  //   const responseJson = await request.json()

  //   setPosts(responseJson.posts)
  // }

  // useEffect(() => {
  //   fetchdata()
  // }, [])

  return (
    <>
      <div className="page flex flex-row h-screen w-screen">
        <div className="header flex flex-col justify-between align-middle w-12 bg-zinc-100 dark:bg-zinc-600">
          <Image src={butterWhiteIcon} alt="Butter Post Dark Icon" className="p-2 hidden dark:block" />
          <Image src={butterBlackIcon} alt="Butter Post White Icon" className="p-2 block dark:hidden" />
          <div className="buttons flex flex-col gap-4">
            <HeaderButtons afterName="Home" iconType="maison" />
            <HeaderButtons afterName="Search" iconType="loupe" />
            <HeaderButtons afterName="Messages" iconType="enveloppe" />
            <HeaderButtons afterName="Profil" iconType="personRonded" />
          </div>
          <HeaderButtons afterName="Parameters" iconType="rouage" colorWhite="" colorDark="" />
        </div>
        <div className="page bg-emerald-500">
          {/* {posts.length === 0 ? null : R.map((post) => {
            return <Post key={post._id} post={post} />
          }, posts)} */}
        </div>
      </div>
    </>
  )
}

export default Home