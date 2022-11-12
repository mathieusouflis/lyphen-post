//LIB IMPORT
import { useState, useEffect } from "react";
import * as R from 'ramda';
import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react";

//COMPONENT IMPORT
import Post from "/components/Post";
import HeaderButtons from "/components/HeaderButtons";

//ASSETS IMPORT
import butterWhiteIcon from "/assets/icons/ButterLogoWhiteRounded.png";
import butterBlackIcon from "/assets/icons/ButterLogoBlackRounded.png";
const { useRouter } = require("next/router");

const Home = () => {
  const { data: session, status } = useSession();
  const [posts, setPosts] = useState([]);
  const [isSession, setIsSession] = useState();
  const router = useRouter();

  const fetchdata = async () => {
    const request = await fetch('/api/post/getall');
    const responseJson = await request.json();

    setPosts(responseJson.posts);
  }

  useEffect(() => {
    fetchdata();
  }, []);

  useEffect(() => {
    if (!session && status != "loading") router.push('/login');
  }, [session, status]);

  return session ? <>
    <div className="page flex flex-row h-screen w-screen overflow-hidden">
      <div>
        <div onClick={() => signOut()} className="header flex flex-col h-screen justify-between align-middle w-12 bg-zinc-100 dark:bg-zinc-600">
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
      </div>
      <div className="page overflow-y-auto w-screen flex justify-center items-center ">
        <div className="posts h-full w-1/2">
          {posts.length === 0 ? null : R.map((post) => {
            return <Post key={post._id} post={post} />
          }, posts)}
        </div>
      </div>
    </div>
  </> : null;
}

export default Home;