import { useNavigate } from "react-router-dom"
import Button from "../Button"
import ProductCard from "./ProductCard"

const BestSeller = () => {
  const navigate = useNavigate()

  const navigateTo = () => {
    navigate("product")
  }
  return (
    <section className="flex itemsCenter justifyCenter">
      <section className="bestSeller flex column itemsCenter justifyCenter">
        <div className="text flex column itemsCenter justifyCenter">
          <h4>Featured Products</h4>
          <h3>BESTSELLER PRODUCTS</h3>
          <p>Problems trying to resolve the conflict between </p>
        </div>
        <section className="bsProducts">
          <ProductCard navigate={navigateTo} />
          <ProductCard navigate={navigateTo} />
          <ProductCard navigate={navigateTo} />
          <ProductCard navigate={navigateTo} />
          <ProductCard navigate={navigateTo} />
          <ProductCard navigate={navigateTo} />
          <ProductCard navigate={navigateTo} />
          <ProductCard navigate={navigateTo} />
          <ProductCard navigate={navigateTo} />
          <ProductCard navigate={navigateTo} />
        </section>
        <section className="flex itemsCenter justifyCenter">
          <Button text={"LOAD MORE PRODUCTS"} style="commonButton actionBlue" />
        </section>
      </section>
    </section>
  )
}

export default BestSeller
