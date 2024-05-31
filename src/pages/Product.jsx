import Info from "../components/product/Info"
import Nav from "../components/product/Nav"
import ProductList from "../components/product/ProductList"
import SingleProduct from "../components/product/SingleProduct"

const Product = () => {
  return (
    <>
      <Nav />
      <SingleProduct />
      <Info />
      <ProductList />
    </>
  )
}

export default Product
