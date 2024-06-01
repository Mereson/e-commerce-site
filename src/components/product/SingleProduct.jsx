import { FaRegStar, FaStar } from "react-icons/fa6"
import Button from "../Button"
import { BsCart } from "react-icons/bs"
import { IoMdHeartEmpty } from "react-icons/io"
import { IoEye } from "react-icons/io5"

const SingleProduct = () => {
  return (
    <section className="flex singleProduct justifyCenter">
      <section>
        <div>
          <img
          className="productImage"
            src="/images/productpage/single-product-1-cover-2.jpg"
            alt="product image"
          />
        </div>
        <div className="nextProducts flex">
          <img
            src="/public/images/productpage/single-product-1-thumb-2.jpg"
            alt="next product image"
          />
          <img
            src="/public/images/productpage/single-product-1-thumb-2.jpg"
            alt="next product image"
          />
        </div>
      </section>
      <article className="flex column productPrice ">
        <div className="productPriceItem1 flex column">
          <div>
            <h4 className="logoBlue">Floating Phone</h4>
            <div className="stars flex">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaRegStar />
              <h6 className="textGrey">10 Reviews</h6>
            </div>
          </div>
          <div>
            <h3 className="logoBlue">$1,139.33</h3>
            <h6 className="textGrey">
              Availability : <span className="actionBlue">In Stock </span>
            </h6>
          </div>
        </div>
        <div className="productPriceItem2 flex column">
          <div className="circles flex">
            <div className="bgActionBlue"></div>
            <div className="bgActionGreen"></div>
            <div className="bgBrown"></div>
            <div className="bgLogoBlue"></div>
          </div>
          <div className="flex ppi itemCenter">
            <Button
              style="commonButton productBtn bgActionBlue white"
              text={"Select Options"}
            />
            <div className="circles ppiDiv textCenter flex">
              <div>
                <IoMdHeartEmpty className="productIcon" />
              </div>
              <div>
                <BsCart className="productIcon" />
              </div>
              <div>
                <IoEye className="productIcon" />
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  )
}

export default SingleProduct
