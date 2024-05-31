import Button from "../Button"

const BestSeller = () => {
  return (
    <section className="flex itemsCenter justifyCenter">
      <section className="bestSeller flex column itemsCenter justifyCenter">
        <div className="text flex column itemsCenter justifyCenter">
          <h4>Featured Products</h4>
          <h3>BESTSELLER PRODUCTS</h3>
          <p>Problems trying to resolve the conflict between </p>
        </div>
        <section className="bsProducts">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </section>
        <section className="flex itemsCenter justifyCenter">
          <Button text={"LOAD MORE PRODUCTS"} style="commonButton actionBlue" />
        </section>
      </section>
    </section>
  )
}

const ProductCard = () => {
  return (
    <div className="flex column">
      <img
        src="/public/images/landingpage/product-cover-5.png"
        alt="product cover"
      />
      <div className="productDetail flex column justifyCenter ">
        <h5>Graphic Design</h5>
        <p>English Department</p>
        <span className="flex itemsCenter justifyCenter">
          <h5 className="priceGray">$16.48</h5>
          <h5 className="priceGreen">$6.48</h5>
        </span>
      </div>
    </div>
  )
}

export default BestSeller
