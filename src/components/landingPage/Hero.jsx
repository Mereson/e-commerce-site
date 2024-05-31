import "../landingPage/landingpage.css"

const Hero = () => {
  return (
    <section className="heroSection flex justifyCenter itemsCenter">
      <section className="heroCards">
        <div className="card1">
          <HeroCards
            src={"/public/images/landingpage/card-cover-5.png"}
            size={"heroCard1"}
          />
        </div>
        <div className="flex card2">
          <HeroCards
            src={"/public/images/landingpage/card-cover-6.png"}
            size={"heroCard2"}
          />

          <div className="flex card3">
            <HeroCards
              src={"/public/images/landingpage/card-cover-6 (1).png"}
              size={"heroCard3"}
            />
            <HeroCards
              src={"/public/images/landingpage/card-cover-7.png"}
              size={"heroCard3"}
            />
          </div>
        </div>
      </section>
    </section>
  )
}

const HeroCards = ({ src, size }) => {
  return (
    <div className={`heroCard ${size}`}>
      <img className="img" src={src} alt="hero card" />
      <div className="heroCardText">
        <p className="text1">5 items</p>
        <h2>FURNITURE</h2>
        <p className="text2">Read More</p>
      </div>
    </div>
  )
}

export default Hero
