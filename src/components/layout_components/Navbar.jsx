import { BsCart, BsEnvelope, BsSearch, BsTelephone } from "react-icons/bs"
import "./styles/style.css"
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa"
import { NavLink, useNavigate } from "react-router-dom"
import { RiArrowDropDownLine } from "react-icons/ri"
import { IoMdHeartEmpty } from "react-icons/io"
import { FaRegUser } from "react-icons/fa6"

const Navbar = () => {
  const navigate = useNavigate()

  return (
    <nav className="navbar">
      <section className="navSection navBg1">
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
          <h3 className="logoBlue">Bandage</h3>
          <div className="linkDiv">
            <NavLink to={"/"} className="links">
              Hello
            </NavLink>
            <NavLink className="links">
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
            <BsCart className="icon" />1
          </span>
          <span className="iconHolder">
            <IoMdHeartEmpty className="icon" />1
          </span>
        </div>
      </section>
    </nav>
  )
}

export default Navbar
