import { useDispatch } from "react-redux"
import About from "../components/landingPage/About"
import BestSeller from "../components/landingPage/BestSeller"
import CallToAction from "../components/landingPage/CallToAction"
import Hero from "../components/landingPage/Hero"
import Posts from "../components/landingPage/Posts"
import Services from "../components/landingPage/Services"
import { useGetAllProductsQuery } from "../features/product/productsApi"
import { useEffect } from "react"
import { setProducts } from "../features/product/productSlice"

const LandingPage = () => {
  const dispatch = useDispatch()
  const { data } = useGetAllProductsQuery()

  useEffect(() => {
    if (data) {
      dispatch(setProducts(data.products))
    }
  }, [data, dispatch])


  return (
    <>
      <Hero />
      <BestSeller />
      <Services />
      <Posts />
      <About />
      <CallToAction />
    </>
  )
}

export default LandingPage
