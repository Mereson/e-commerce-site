import ProductCard from "../landingPage/ProductCard"

const ProductList = ({text}) => {
  return (
    <section className="productList">
      <section className="flex column">
        <div className="flex column ">
          <h3 className="logoBlue">{text}</h3>
          <div className="bsLine"></div>
        </div>
        <section className="bestSellerItems">
          <ProductCard styles={"bsItem"} />
          <ProductCard styles={"bsItem"} />
          <ProductCard styles={"bsItem"} />
          <ProductCard styles={"bsItem"} />
          <ProductCard styles={"bsItem"} />
          <ProductCard styles={"bsItem"} />
          <ProductCard styles={"bsItem"} />
          <ProductCard styles={"bsItem"} />
        </section>
      </section>
    </section>
  )
}

export default ProductList
