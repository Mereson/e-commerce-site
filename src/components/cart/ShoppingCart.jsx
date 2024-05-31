import { FaCircleMinus, FaCirclePlus, FaStar } from "react-icons/fa6"
import "./cart.css"
import { TbCurrencyNaira } from "react-icons/tb"
import { CiTrash } from "react-icons/ci"

const ShoppingCart = () => {
  return (
    <section className=" shoppingCart">
      <section className="flex cartReview">
        <section className="cartItems flex column">
          <h2>Shopping Cart</h2>
          <div>
            <div className="flex tableHead textCenter white">
              <p className="column1">item Details</p>
              <p className="column2">Quantity</p>
              <p className="column3">Price</p>
            </div>
            <div className="flex column">
              <CartItem />
              <CartItem />
              <CartItem />
            </div>
          </div>
        </section>
        <section className="order">heyThere</section>
      </section>
    </section>
  )
}

const CartItem = () => {
  return (
    <div className="flex column">
      <div className="cartItem flex">
        <div className="column1 flex itemCenter">
          <img
            src="/images/cart/single-product-1-thumb-1.jpg"
            alt="product image"
          />
          <div>
            <p className="cartItemName">Graphic Design</p>
            <p className="cartItemStatus">In Stock</p>
            <div className="cartItemStar itemCenter flex">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <h6 className="textGrey">28 Reviews</h6>
            </div>
          </div>
        </div>
        <div className="column2 flex justifyCenter itemCenter gap-10">
          <div className="cartItemReduce flex justifyCenter pointer itemCenter">
            <FaCircleMinus className="plus" />
          </div>
          <div className="cartItemNumber flex justifyCenter itemCenter">1</div>
          <div className="cartItemAdd white flex justifyCenter itemCenter pointer">
            <FaCirclePlus className="plus actionBlue" />
          </div>
        </div>
        <div className="column3 flex column justifyCenter">
          <p className="cartItemPrice1 flex itemCenter">
            <TbCurrencyNaira />
            3000
          </p>
          <p className="cartItemPrice2 flex itemCenter">
            <TbCurrencyNaira />
            3000 x 1 item
          </p>
        </div>
      </div>
      <div className="actionBlue removeItem">
        <p className="flex itemCenter pointer">
          <CiTrash /> REMOVE
        </p>
      </div>
    </div>
  )
}

export default ShoppingCart
