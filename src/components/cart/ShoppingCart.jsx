import { FaCircleMinus, FaCirclePlus, FaStar } from "react-icons/fa6"
import "./cart.css"
import { TbCurrencyNaira } from "react-icons/tb"
import { CiTrash } from "react-icons/ci"
import Button from "../Button"

const ShoppingCart = () => {
  return (
    <section className=" shoppingCart flex justifyCenter itemCenter">
      <section className="flex cartReview">
        <section className="cartItems bgWhite flex column">
          <h2>Shopping Cart</h2>
          <div>
            <div className="flex tableHead hide textCenter white">
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
        <section className="orderSection flex justifyCenter itemCenter">
          <section className="order">
            <div className="flex itemCenter orderContainer">
              <h3 className="orderTitle">Order Summary</h3>{" "}
              <p className="orderItems">4 Items</p>
            </div>
            <article>
              <div className="flex itemCenter orderPadding1 orderContainer border-b">
                <p className="orderSubtitle">Delivery Charges</p>
                <p className="orderNotice">
                  Add your delivery address to checkout to see delivery charges.
                </p>
              </div>
              <div className="flex itemCenter orderPadding2 orderContainer border-b">
                <p className="orderSubtitle">Subtotal</p>
                <p className="orderPrice">26,500</p>
              </div>
              <div className="flex itemCenter orderPadding3 orderContainer border-b">
                <p className="orderTotal">Total</p>
                <p className="orderTotal">26,500</p>
              </div>
              <div className="flex justifyEnd orderPadding4">
                <p className="orderNotice">Excluding Delivery Charges</p>
              </div>
            </article>
            <div className="flex orderPadding5 border-b">
              <Button
                text={"Proceed to Checkout"}
                style="commonButton bgActionBlue white wFull"
              />
            </div>
            <div className="flex orderIcons">
              <img src="/images/cart/Paystack - png.png" alt="bank logos" />
              <img src="/images/cart/Mastercard - png.png" alt="bank logos" />
              <img src="/images/cart/Visa Inc. - png.png" alt="bank logos" />
            </div>
          </section>
        </section>
      </section>
    </section>
  )
}

const CartItem = () => {
  return (
    <div>
      <div className="flex column hide">
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
            <div className="cartItemNumber flex justifyCenter itemCenter">
              1
            </div>
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
      <div className="flex column hidden  justifyCenter">
        <div className="cartItem flex">
          <div className="column1 flex itemCenter ">
            <img
              src="/images/cart/single-product-1-thumb-1.jpg"
              alt="product image"
            />
            <div className=" cartItemDetails flex column">
              <p className="cartItemName">Graphic Design</p>
              <div className="column3 flex ">
                <p className="cartItemPrice1 flex itemCenter ">
                  <TbCurrencyNaira />
                  3000
                </p>
                <p className="cartItemPrice2 flex itemCenter">
                  <TbCurrencyNaira />
                  3000 x 1 item
                </p>
              </div>
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
        </div>
        <div className="flex justifyBetween pt-10 itemCenter border-b">
          <div className="actionBlue removeItem itemCenter">
            <p className="flex itemCenter pointer">
              <CiTrash /> REMOVE
            </p>
          </div>
          <div className="column2 flex justifyCenter itemCenter gap-10">
            <div className="cartItemReduce flex justifyCenter pointer itemCenter">
              <FaCircleMinus className="plus" />
            </div>
            <div className="cartItemNumber flex justifyCenter itemCenter">
              1
            </div>
            <div className="cartItemAdd white flex justifyCenter itemCenter pointer">
              <FaCirclePlus className="plus actionBlue" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShoppingCart
