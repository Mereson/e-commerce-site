import About from "../components/landingPage/About"
import BestSeller from "../components/landingPage/BestSeller"
import Hero from "../components/landingPage/Hero"
import Posts from "../components/landingPage/Posts"
import Services from "../components/landingPage/Services"

const LandingPage = () => {
  return (
    <>
      <Hero />
      <BestSeller />
      <Services />
      <Posts />
      <About/>
    </>
  )
}

export default LandingPage
