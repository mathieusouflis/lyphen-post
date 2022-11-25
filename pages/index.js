//LIB IMPORT
import { useState, useEffect } from "react";
import * as R from 'ramda';
import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react";
import classNames from 'classnames'

//COMPONENT IMPORT
import Post from "/components/Post";
import HeaderButtons from "/components/HeaderButtons";

//ASSETS IMPORT
import butterWhiteIcon from "/assets/icons/ButterLogoWhiteRounded.png";
import butterBlackIcon from "/assets/icons/ButterLogoBlackRounded.png";
import Link from "next/link";


const Home = () => {
  const { data: session, status } = useSession();
  const [posts, setPosts] = useState([]);
  const { useRouter } = require("next/router");
  const router = useRouter();

  const fetchdata = async () => {
    const request = await fetch('/api/post/getall', {
      method: "GET",
    });
    const responseJson = await request.json();

    setPosts(responseJson.posts);
  }

  useEffect(() => {
    if (session && status === "authenticated") {
      fetchdata();
    } else if (!session && status != "loading") router.push('/login');
  }, [session, status]);

  const classLink = classNames(
    "relative",
    "transition-all",
    "duration-300",
    "after:content-['']",
    "after:relative",
    "after:bottom-1",
    "after:block",
    "after:h-px",
    "after:w-0",
    "after:bg-zinc-900",
    "after:transition-all",
    "after:duration-300",
    "hover:after:w-full",
    "hover:color-yellow-500"
  )

  return session ? <>
    <div className="page flex flex-col">
      <div className="w-screen sticky top-0">
        <div className="header flex flex-row h-12 justify-between bg-zinc-100 dark:bg-zinc-600">
          <Image onClick={() => signOut()} src={butterWhiteIcon} alt="Butter Post Dark Icon" className="p-2 w-12 h-12 hidden dark:block" />
          <Image onClick={() => signOut()} src={butterBlackIcon} alt="Butter Post White Icon" className="p-2 block dark:hidden" />
          <div className="buttons flex flex-row gap-4 items-center">
            <Link href="/" className={classLink}>Home</Link>
            <Link href='/' className={classLink}>Search</Link>
            <Link href='/' className={classLink}>Message</Link>
          </div>
          <div className="h-12 w-12">
            <Link href='/profil'>
              <HeaderButtons afterName="Parameters" iconType="rouage" colorWhite="" colorDark="" />
            </Link>
          </div>
        </div>
      </div>
      <div className="page overflow-y-auto w-screen flex justify-center items-center ">
        <div className="posts border-x border-zinc-600 h-full w-1/2">
          {posts.length === 0 ? null : R.map((post) => {
            return <Post key={post._id} post={post} />
          }, posts)}
        </div>
      </div>
    </div>
  </> : null;
}



export default Home;