import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Image from "next/image";
import { useState, useEffect } from "react";
import Icons from "/components/Icons";
import ButterPostLogo from "/assets/icons/ButterLogoWhiteRounded.png"


const NavEllement = ({ name, icon, notif = false }) => {
  return (
    <div className="flex flex-row gap-4">
      <span className="profilImg w-6 h-6">
        <Icons type={icon} color="#CCCC" size="w-6 h-6" />
      </span>
      <p className="font-bold text-[#CCCCCC]">{name}</p>
      {notif ? <div className="flex flex-row"><div className="blur-[1.5px] bg-[#DE4040] rounded-full drop-shadow-[0px_4px_4px_rgba(222,64,64,0.25)] w-6 h-6"></div><p className="notifCount text-[#CCCCCC]  text-center relative right-1/2">5</p></div> : null}
    </div>
  )
}

const UserSuggestions = ({ name, followers, icon }) => {
  return (
    <div className="userSuggestion flex flex-row gap-[7px]">
      <span className="userProfilImage ">
        <img src={icon} alt="UserIcon" className="w-[45px] h-[45px] rounded-full" />
      </span>
      <div>
        <p className="font-bold text-[14px] text-white">{name}</p>
        <p className="font-bold text-[14px] text-[#CCCCCC]">{followers} Followers</p>
      </div>
    </div>
  )
}

const HtagSuggestions = ({ name }) => {
  return (
    <div className="hTag flex flex-row bg-[#16374C] w-fit p-[9.5px] items-center align-center rounded-lg shadow-[0px_0px_51px_rgba(0,0,0,0.5)] gap-[5px]">
      <span className="hTagIcon">
        <Icons type="htag" color="#CCCC" size="w-[20px] h-[20px]" />
      </span>
      <p className="text-[#CCCCCC] text-[14px] font-bold">{name}</p>
    </div>
  )
}

const ShowMoreButton = () => {
  return (
    <div className="flex justify-center rounded-lg py-[7.62px] px-[16.62px] bg-[#16374C] shadow-[0px_0px_50px_rgba(0,0,0,0.51)]">
      <p className="text-[#CCCCCC]">Show More</p>
    </div>
  )
}

const PostPage = () => {
  const { data: session, status } = useSession()
  const [curentUser, setCurentUser] = useState({})
  const router = useRouter()
  const { accountName } = router.query

  const fetchUser = async () => {
    const request = await fetch('/api/user/getByUsername', {
      method: "POST",
      body: JSON.stringify({
        username: accountName
      })
    })

    const requestJSON = await request.json()
    setCurentUser(requestJSON.user)
  }

  useEffect(() => {
    if (session && status === "authenticated") {
      fetchUser()
    } else if (!session && status != "loading") {
      router.push('/login');
    }
  }, [session, status]);

  return session ? <>
    <div className="h-screen w-screen">
      <div className="fullPage flex flex-row justify-between">
        <div className="navBar flex flex-col gap-[32px] mt-[20px] ml-[86px]">
          <div className="flex flex-row gap-4">
            <span className="profilImg w-6 h-6">
              <img src={curentUser.avatar ? curentUser.avatar : null} alt="IconImage" className="rounded-full w-6 h-6 object-cover object-center" />
            </span>
            <p className="font-bold text-[#FDA406] text-[16px]">{curentUser.username ? curentUser.username : "Loading..."}</p>
          </div>
          <NavEllement name="Notification" icon="bell" notif={true} />
          <NavEllement name="Trending" icon="flame" />
          <NavEllement name="Explore" icon="htag" />
          <NavEllement name="Settings" icon="settings" />
          <div className="newPost flex flex-row gap-[18px] justify-center items-center w-[200px] h-[39px] bg-[linear-gradient(91.86deg,#FDA406_1.29%,rgba(230,171,66,0.62)_98.35%)]  rounded-lg">
            <span className="icon">
              <Icons type="pensilQuote" color="#FFFF" size="w-6 h-6" />
            </span>
            <p className="text-white font-bold text-[16px]">New Post</p>
          </div>
        </div>
        <div className="main">
          <div className="LyphenIcon flex justify-center mt-4 mb-4">
            <span>
              <Image src={ButterPostLogo} className="w-6 h-6" />
            </span>
          </div>
          <div className="profilDesc">
            <span className="banner">
              <img src={curentUser.banner ? curentUser.banner : "Loading"} alt="userBanner" className="w-[640px] h-[160px] object-cover rounded-lg" />
            </span>
            <div className="userInteractions flex flex-row justify-between">
              <span className="icon">
                <img src={curentUser.avatar ? curentUser.avatar : "Loading..."} alt="userAvatar" className="relative bottom-[50px] left-[45px] object-contain rounded-full w-[100px] h-[100px] p-1 bg-[#D9D9D9]" />
              </span>
              <div className="flex flex-row gap-[15px] items-center">
                <div className="...">
                  <span className="...Icon w-6 h-6"><Icons type="ellipsis" color="#CCCC" /></span>
                </div>
                <div className="Message">
                  <span className="MessageIcon"><Icons type="letter" color="#FDA406" /></span>
                </div>
                <div className="followButton py-[4.5px] px-[15px] border-[1px] border-[#FDA406] rounded-lg ">
                  <p className="text-[#CCCCCC] text-[16px]">Follow</p>
                </div>
              </div>
            </div>
            <div className="userNames flex flex-col">
              <div className="customProfil flex flex-row">
                <p className="text-white font-bold">{curentUser.username ? curentUser.username : "Loading..."}</p>
                <span className="certif"><Icons type="verified" color="#FDA506" /></span>
              </div>
              <div className="username">
                <p className="text-[#CCCCCC]">@{curentUser.username ? curentUser.username : "Loading..."}</p>
              </div>
            </div>
            <div className="userInformations mt-[16.5px]">
              <div className="flex flex-col">
                <div className="PFF flex flex-row gap-[14px]">
                  <div className="posts flex flex-row gap-[3px]">
                    <p className="number text-white">{curentUser.posts ? curentUser.posts.length : "Loading..."}</p>
                    <p className="text-[#CCCCCC]">Posts</p>
                  </div>
                  <div className="Followers flex flex-row gap-[3px]">
                    <p className="number text-white">{curentUser.followers ? curentUser.followers.length : "Loading..."}</p>
                    <p className="text-[#CCCCCC]">Followers</p>
                  </div>
                  <div className="Following flex flex-row gap-[3px]">
                    <p className="number text-white">{curentUser.abonements ? curentUser.abonements.length : "Loading..."}</p>
                    <p className="text-[#CCCCCC]">Following</p>
                  </div>
                </div>
                <div className="description mt-[15px]">
                  <p className="text-[#CCCCCC]">{curentUser.description ? curentUser.description : ""}</p>
                </div>
                <div className="mt-[20px] flex flex-row justify-between">
                  <div className="Localisation flex flex-row">
                    <span className="earthIcon"><Icons type="glob" color="#CCCC" /></span>
                    <div>
                      <p className="text-[#CCCCCC]">Pays</p>
                    </div>
                  </div>
                  <div className="dateRejoin flex flex-row">
                    <span className="personIcon"><Icons type="userCircle" color="#CCCC" /></span>
                    <p className="text-[#CCCCCC]">Member since Month Year</p> {/* CHANGER LE user.createdAt en timestamp et prendre le mois et l'année*/}
                  </div>
                </div>
              </div>
              <div className="amisCommuns mt-[10px]">
                <p className="text-[#CCCCCC]">Has <span className="text-white font-bold">0</span> followers you know</p> {/**NE PAS OUBLIER DE FAIRE ! */}
                <div className="flex flex-row">
                  <div className="1">{/* Clique : Tp vers page du profil, HOVER : Montre le nom du profil */}
                    <span className="userIcon">
                      <img src={curentUser.avatar ? curentUser.avatar : "Loading..."} alt="UserAvatar" className="w-[45px] h-[45px] rounded-full" />
                    </span>
                  </div>
                  <div className="2">
                    <span className="userIcon relative right-1/4">
                      <img src={curentUser.avatar ? curentUser.avatar : "Loading..."} alt="UserAvatar" className="w-[45px] h-[45px] rounded-full" />
                    </span>
                  </div>
                </div> {/*MAX 3*/}
              </div>
            </div>
            <div className="profilNavBar mt-[14px] flex flex-row justify-between">
              <div className="Posts flex flex-row py-[5px] px-[25px] bg-[#16374C] rounded-lg" >
                <span className="iconpost"><Icons type="newsPaper" color="#FFFF" /></span>
                <p className="text-[#CCCCCC]">Posts</p>
              </div>
              <div className="Media flex flex-row py-[5px] px-[25px] border-2 border-[#16374C] rounded-lg">
                <span className="iconMedia"><Icons type="photo" color="#FFFF" /></span>
                <p className="text-[#CCCCCC]">Média</p>
              </div>
              <div className="Likes flex flex-row py-[5px] px-[25px] border-2 border-[#16374C] rounded-lg">
                <span className="iconLikes"><Icons type="heart" color="#FFFF" /></span>
                <p className="text-[#CCCCCC]">Likes</p>
              </div>
            </div>
          </div>
          <div className="filActu">
            {/* LISTE DE POSTES */}
          </div>
        </div>
        <div className="searchBar mr-[70px] mt-[13px] flex flex-col gap-[20px]">
          <div className="searchBar flex flex-row gap-3 rounded-lg py-[7.62px] px-[16.62px] bg-[#16374C] shadow-[0px_0px_50px_rgba(0,0,0,0.51)]">
            <label htmlFor="searchBar">
              <span className="searchIcon w-6 h-6">
                <Icons type="loupe" color="#CCCC" size="w-6 h-6" />
              </span>
            </label>
            <input type="text" name="searchBar" id="searchBar" placeholder="Search..." className="bg-[rgba(0,0,0,0)] text-[#CCCC] focus:outline-none" />
          </div>
          <section className="flex flex-col gap-[20px]">
            <h1 className="text-white font-bold text-[16px]">Suggestions</h1>
            <div className="flex flex-col gap-[20px]">
              <UserSuggestions name={"Discord"} followers={0} icon={curentUser.avatar ? curentUser.avatar : "Loading..."} />
              <UserSuggestions name={"Spotify"} followers={0} icon={curentUser.avatar ? curentUser.avatar : "Loading..."} />
              <UserSuggestions name={"Steam"} followers={0} icon={curentUser.avatar ? curentUser.avatar : "Loading..."} />
              <UserSuggestions name={"Spiie"} followers={0} icon={curentUser.avatar ? curentUser.avatar : "Loading..."} />
            </div>
            <ShowMoreButton />
          </section>
          <section className="flex flex-col gap-[20px]">
            <h1 className="text-white font-bold text-[16px]">Topic for you</h1>
            <div className="flex flex-col gap-[18px]">
              <HtagSuggestions name={"Listenbourg"} />
              <HtagSuggestions name={"Youtube"} />
              <HtagSuggestions name={"MaelLeNul"} />
              <HtagSuggestions name={"ViveSpiie"} />
            </div>
            <ShowMoreButton />
          </section>
        </div>
      </div>
    </div>
  </> : null
}

export default PostPage