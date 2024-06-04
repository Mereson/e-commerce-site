import { useNavigate } from "react-router-dom"
import ProductCard from "../landingPage/ProductCard"
import { useSelector } from "react-redux"

const ProductList = ({ text }) => {
  const { products } = useSelector((store) => store.product)
  const navigate = useNavigate()
  return (
    <section className="productList hide">
      <section className="flex column justifyCenter ">
        <div className="flex column ">
          <h3 className="logoBlue">{text}</h3>
          <div className="bsLine"></div>
        </div>
        <section className="bestSellerItems">
          {products.slice(0, 8).map((item) => (
            <ProductCard
              key={item.id}
              {...item}
              styles={"bsItem"}
              navigate={() => navigate(`/product/${item.id}`)}
            />
          ))}
        </section>
      </section>
    </section>
  )
}

export default ProductList
