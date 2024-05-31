import { FaRegStar, FaStar } from "react-icons/fa6"

const About = () => {
  return (
    <section className="flex justifyCenter itemsCenter">
      <section className="flex aboutSection itemsCenter">
        <article className="flex column justifyCenter itemsCenter">
          <h3 className="logoBlue textCenter">What they say about us</h3>
          <div className="aboutDetail flex column justifyCenter itemsCenter">
            <div className="abtUserImgDiv flex justifyCenter itemsCenter">
              <img
                className="abtUserImg"
                src="/public/images/landingpage/user1.png"
                alt="user image"
              />
            </div>
            <div className="stars flex justifyCenter itemsCenter">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaRegStar />
            </div>
            <h6 className="textGrey textCenter">
              Slate helps you see how many more days you need to work to reach
              your financial goal.
            </h6>
            <div className="textCenter">
              <p className="actionBlue aboutP">Regina Miles</p>
              <p className="logoBlue aboutP">Designer</p>
            </div>
          </div>
        </article>
        <div className="aboutGrid">
          <img
            src="/Public/images/landingpage/aboutImages1.png"
            alt="about images"
          />

          <img
            src="/Public/images/landingpage/aboutImages2.png"
            alt="about images"
          />

          <img
            src="/Public/images/landingpage/aboutImages3.png"
            alt="about images"
          />

          <img
            src="/Public/images/landingpage/aboutImages4.png"
            alt="about images"
          />

          <img
            src="/Public/images/landingpage/aboutImages5.png"
            alt="about images"
          />

          <img
            src="/Public/images/landingpage/aboutImages6.png"
            alt="about images"
          />

          <img
            src="/Public/images/landingpage/aboutImages7.png"
            alt="about images"
          />

          <img
            src="/Public/images/landingpage/aboutImages8.png"
            alt="about images"
          />

          <img
            src="/Public/images/landingpage/aboutImages9.png"
            alt="about images"
          />
        </div>
      </section>
    </section>
  )
}

export default About
