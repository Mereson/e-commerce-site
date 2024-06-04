import { FaRegStar, FaStar } from "react-icons/fa6"
import Button from "../Button"
import { BsCart } from "react-icons/bs"
import { IoMdHeartEmpty } from "react-icons/io"
import { IoEye } from "react-icons/io5"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { addToCart } from "../../features/product/productSlice"

const SingleProduct = () => {
  const { id } = useParams()
  const { products } = useSelector((store) => store.product)

  const dispatch = useDispatch()

  const product = products.find((item) => item.id == id)

  return (
    <section>
      {!product ? (
        <section className="flex justifyCenter itemCenter">
          <h1 className="logoBlue emptyShow">No Item to show</h1>
        </section>
      ) : (
        <section className="flex singleProduct justifyCenter">
          <section>
            <div>
              <img
                className="productImage"
                src={product.images[0]}
                alt="product image"
              />
            </div>

            {product.images.length < 1 ? (
              <div className="nextProducts flex">
                <img src={product.images} alt="next product image" />
              </div>
            ) : (
              <div className="nextProducts flex">
                <img
                  src="/images/productpage/single-product-1-thumb-2.jpg"
                  alt="next product image"
                />
                <img
                  src="/images/productpage/single-product-1-thumb-2.jpg"
                  alt="next product image"
                />
              </div>
            )}
          </section>
          <article className="flex column productPrice ">
            <div className="productPriceItem1 flex column">
              <div>
                <h4 className="logoBlue">{product.title}</h4>
                <div className="stars flex">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaRegStar />
                  <h6 className="textGrey">{product.reviews.length} Reviews</h6>
                </div>
              </div>
              <div>
                <h3 className="logoBlue">${product.price}</h3>
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
                  <div
                    className="cartIcon"
                    onClick={() => dispatch(addToCart(product))}
                  >
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
      )}
    </section>
  )
}

export default SingleProduct
