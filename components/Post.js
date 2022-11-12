import Icon from "./Icons"
import classNames from 'classnames'
import * as R from "ramda"
import { useState } from "react"

const Post = ({ post }) => {

  const [vueImage, setVueImage] = useState(false)
  const [vueImageLink, setVueImageLink] = useState("")

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

  const postAuthor = {
    username: "_spiie"
  }

  const actionsClass = classNames(
    'flex', 'flex-row', 'gap-2'
  )

  const buttonActionClass = classNames(
    'flex', 'flex-row', "text-lg"
  )

  const iconClass = classNames(
    'w-6', 'mr-1'
  )
  const date = new Date(post.createdAt)
  const day = date.getDay()
  const month = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(date)
  const year = date.getFullYear()
  const hours = date.getHours()
  const minutes = date.getMinutes()

  return (
    <div>
      {vueImage ?
        <div className="absolute top-0 left-0 h-screen w-screen flex justify-center items-center" onClick={() => {
          setVueImage(false)
          setVueImageLink("")
        }}>
          <img src={vueImageLink} alt="" className="z-10 max-w-3/4 max-h-screen w-auto h-3/4" />
          <div className="absolute w-screen h-screen bg-slate-600 opacity-70" />
        </div>
        : null}
      <div className="max-h-[calc(100%/1.3)]">
        <div className="top p-2 border-b border-white flex flex-row justify-between" >
          <div className="user">
            <img src={postAuthor.avatar} alt="" className="userpfp" />
            <p className="userusername text-lg">@{postAuthor.username}</p>
          </div>
          <div className={actionsClass}>
            <div className={buttonActionClass}>
              <div className={iconClass}>
                <Icon type="share" />
              </div>
              <p className="nbShare">{post.shared.length}</p>
            </div>
            <div className={buttonActionClass}>
              {/* SVG comment */}
              <div className={iconClass}>
                <Icon type="comment" />
              </div>
              <p className="nbcomment">{post.comments.length}</p>
            </div>
            <div className={buttonActionClass}>
              {/* SVG LIKE */}
              <div className={iconClass}>
                <Icon type="like" />
              </div>
              <p className="nbLikes">{post.likes.length}</p>
            </div>
          </div>
        </div >
        <div className="middle p-3 px-10 flex flex-col gap-4">
          <div className="text text-2xl">
            <p className="text">{post.content.text}</p>
          </div>
          <div className="image">
            {R.map((image) => {
              return <img key={image} src={image} alt="" className="rounded-xl w-full lg:h-[430px] object-cover" onClick={() => {
                setVueImage(true)
                setVueImageLink(image)
              }} />
            }, post.content.images)}
          </div>
        </div>
        <div className="bottom pb-2">
          <p className="timestamp">{`${day} ${month} ${year} at ${hours} : ${minutes}`}</p>
        </div>
      </div >
    </div>
  )
}

export default Post