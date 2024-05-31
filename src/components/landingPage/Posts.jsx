import { AiOutlineAreaChart } from "react-icons/ai"
import { MdArrowForwardIos } from "react-icons/md"
import { TbClockHour3 } from "react-icons/tb"

const Posts = () => {
  return (
    <section className="posts flex justifyCenter itemsCenter">
      <section>
        <div className="postTitle">
          <p className="actionBlue">Practice Advice</p>
          <h2>Featured Posts</h2>
        </div>
        <div className="flex pContainer">
          <Post src={"/images/landingpage/posts (1).png"} />
          <Post src={"/images/landingpage/posts (2).png"} />
          <Post src={"/images/landingpage/posts (3).png"} />
        </div>
      </section>
    </section>
  )
}

const Post = ({ src }) => {
  return (
    <div className="post">
      <div className="postImageContainer">
        <h6 className="pIText white">NEW</h6>
        <img className="postImage" src={src} alt="post image" />
      </div>
      <div className="postDetails flex column">
        <p className="postLinks flex">
          <span className="actionBlue">Google</span>
          <span>Trending</span>
          <span>New</span>
        </p>
        <h4>Loudest à la Madison #1 (L'integral)</h4>
        <p className="pDInfo">
          We focus on ergonomics and meeting you where you work. It's only a
          keystroke away.
        </p>
        <p className="pDDate flex">
          <p className="flex justifyCenter itemsCenter">
            <TbClockHour3 className="actionBlue postIcon" /> 22 April 2021
          </p>
          <p className="flex justifyCenter itemsCenter">
            <AiOutlineAreaChart className="actionGreen postIcon" /> 10 comments
          </p>
        </p>
        <div className="flex itemsCenter">
          <h6>Learn More</h6>
          <MdArrowForwardIos className=" actionBlue" />
        </div>
      </div>
    </div>
  )
}

export default Posts
