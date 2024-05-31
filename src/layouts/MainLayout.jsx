import { Outlet } from "react-router-dom"
import Navbar from "../components/layout_components/Navbar"
import Footer from "../components/layout_components/Footer"

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default MainLayout
