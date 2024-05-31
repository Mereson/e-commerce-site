import ProductCard from "../landingPage/ProductCard"

const ProductList = () => {
  return (
    <section className="productList">
      <section className="flex column">
        <div className="flex">
          <h3 className="logoBlue">BESTSELLER PRODUCTS</h3>
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
      </section>
    </section>
  )
}

export default ProductList
