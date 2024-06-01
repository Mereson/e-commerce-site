import { useNavigate } from "react-router-dom"
import Button from "../Button"
import ProductCard from "./ProductCard"

const BestSeller = () => {
  const navigate = useNavigate()

  const navigateTo = () => {
    navigate("product")
  }
  return (
    <section className="flex itemsCenter bgGrey justifyCenter">
      <section className="bestSeller flex column itemCenter justifyCenter">
        <div className="text flex column itemCenter justifyCenter">
          <h4 className="hide">Featured Products</h4>
          <h3>BESTSELLER PRODUCTS</h3>
          <p>Problems trying to resolve the conflict between </p>
        </div>
        <section className="bsProducts">
          <ProductCard navigate={navigateTo} styles={"bsProduct"} />
          <ProductCard navigate={navigateTo} styles={"bsProduct"} />
          <ProductCard navigate={navigateTo} styles={"bsProduct"} />
          <ProductCard navigate={navigateTo} styles={"bsProduct"} />
          <ProductCard navigate={navigateTo} styles={"bsProduct"} />
          <ProductCard navigate={navigateTo} styles={"bsProduct"} />
          <ProductCard navigate={navigateTo} styles={"bsProduct"} />
          <ProductCard navigate={navigateTo} styles={"bsProduct"} />
          <ProductCard navigate={navigateTo} styles={"bsProduct"} />
          <ProductCard navigate={navigateTo} styles={"bsProduct"} />
        </section>
        <section className="flex itemsCenter justifyCenter">
          <Button text={"LOAD MORE PRODUCTS"} style="commonButton actionBlue" />
        </section>
      </section>
    </section>
  )
}

export default BestSeller
