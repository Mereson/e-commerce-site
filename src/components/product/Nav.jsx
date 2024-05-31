import { MdArrowForwardIos } from "react-icons/md"
import "./product.css"

const Nav = ({ isTrue }) => {
  return (
    <section className="productNavbar flex itemCenter ">
      {!isTrue ? (
        <div className="flex itemCenter">
          <h6 className="logoBlue">Home</h6>
          <MdArrowForwardIos className="textGrey pNavIcon" />
          <h6 className="textGrey">Shop</h6>
        </div>
      ) : (
        <div className="flex itemCenter">
          <h6 className="logoBlue">Home</h6>
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
