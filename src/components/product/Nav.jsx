import { MdArrowForwardIos } from "react-icons/md"
import "./product.css"

const Nav = () => {
  return (
    <section className="productNavbar flex itemCenter ">
      <div className="flex itemCenter">
        <h6 className="logoBlue">Home</h6>
        <MdArrowForwardIos className="textGrey pNavIcon" />
        <h6 className="textGrey">Shop</h6>
      </div>
    </section>
  )
}

export default Nav
