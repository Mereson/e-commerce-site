import { MdArrowForwardIos } from "react-icons/md"
import "./product.css"
import { useNavigate } from "react-router-dom"

const Nav = ({ isTrue }) => {
  const navigate = useNavigate()
  return (
    <section className="productNavbar flex itemCenter">
      {!isTrue ? (
        <div className="flex itemCenter">
          <h6 onClick={() => navigate("/")} className="logoBlue pointer">Home</h6>
          <MdArrowForwardIos className="textGrey pNavIcon" />
          <h6 className="textGrey">Shop</h6>
        </div>
      ) : (
        <div className="flex itemCenter">
          <h6 onClick={() => navigate("/")} className="logoBlue pointer">Home</h6>
          <MdArrowForwardIos className="textGrey pNavIcon" />
          <h6 className="logoBlue">Shop</h6>
          <MdArrowForwardIos className="textGrey pNavIcon" />
          <h6 className="textGrey">ShoppingCart</h6>
        </div>
      )}
    </section>
  )
}

export default Nav
