import { BsCart, BsEnvelope, BsSearch, BsTelephone } from "react-icons/bs"
import "./styles/style.css"
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa"
import { NavLink, useNavigate } from "react-router-dom"
import { RiArrowDropDownLine } from "react-icons/ri"
import { IoMdHeartEmpty } from "react-icons/io"
import { FaRegUser } from "react-icons/fa6"
import { BiMenuAltRight } from "react-icons/bi"
import { useSelector } from "react-redux"
import { useState } from "react"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  const navigate = useNavigate()
  const { cart } = useSelector((store) => store.product)

  return (
    <nav className="flex column">
      <section className="navSection  navBg1">
        <div className="navItem">
          <span className="navItemFlex">
            <BsTelephone /> <h6>(225) 555-0118</h6>
          </span>
          <span className="navItemFlex hdn6">
            <BsEnvelope /> michelle.rivera@example.com
          </span>
        </div>
        <div className="navItem">
          <h6>Follow Us and get a chance to win 80% off</h6>
        </div>
        <div className="navItemFlex white navItemFlex2">
          <h6>Follow Us :</h6>
          <FaInstagram />
          <FaYoutube />
          <FaFacebook />
          <FaTwitter />
        </div>
      </section>
      <section className="navSection navSection2">
        <div className="navItem nav2">
          <h3 onClick={() => navigate("/")} className="logoBlue pointer">
            Bandage
          </h3>
          <div className="linkDiv">
            <NavLink to={"/"} className="links">
              Hello
            </NavLink>
            <NavLink to={"product/:id"} className="links">
              Shop <RiArrowDropDownLine />
            </NavLink>
            <NavLink className="links">About</NavLink>
            <NavLink className="links">Blog</NavLink>
            <NavLink className="links">Contact</NavLink>
            <NavLink className="links">Pages</NavLink>
          </div>
        </div>
        <div className="userSection actionBlue">
          <span className="userSectItem">
            <FaRegUser className="icon" /> Login / Register
          </span>
          <BsSearch className="icon" />
          <span onClick={() => navigate("/cart")} className="iconHolder">
            <BsCart className="icon" />
            {cart.length}
          </span>
          <span className="iconHolder">
            <IoMdHeartEmpty className="icon" />0
          </span>
        </div>
      </section>
      <section className="mobileNav">
        <div className="flex itemCenter mobileNavContent logoBlue justifyBetween wFull">
          <h3 onClick={() => navigate("/")} className="logoBlue">
            Bandage
          </h3>
          <div className="flex itemCenter mobileNavIcons ">
            <BsSearch className="mobileNavIcon " />
            <span onClick={() => navigate("/cart")} className="iconHolder">
              <BsCart className="mobileNavIcon" />{cart.length}
            </span>
            <span onClick={toggleSidebar} className="iconHolder">
              <BiMenuAltRight className="mobileNavIcon" />
            </span>
          </div>
        </div>
        {isOpen ? (
          <aside className="flex column justifyCenter itemCenter">
            <p onClick={() => navigate("/")}>Home</p>
            <p>Product</p>
            <p>Pricing</p>
            <p>Contact</p>
          </aside>
        ) : (
          ""
        )}
      </section>
    </nav>
  )
}

export default Navbar
