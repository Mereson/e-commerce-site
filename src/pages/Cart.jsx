import ShoppingCart from "../components/cart/ShoppingCart"
import Nav from "../components/product/Nav"
import ProductList from "../components/product/ProductList"

const Cart = () => {
  return (
    <>
      <Nav isTrue={true} />
      <ShoppingCart />
      <ProductList text={"PRODUCTS RELATED TO ITEMS IN YOUR CART"} />
    </>
  )
}

export default Cart
