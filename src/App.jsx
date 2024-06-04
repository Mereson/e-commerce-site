import { BrowserRouter, Route, Routes } from "react-router-dom"
import LandingPage from "./pages/LandingPage"
import MainLayout from "./layouts/MainLayout"
import Product from "./pages/Product"
import Cart from "./pages/Cart"
import ScrollToTop from "./components/layout_components/ScrollToTop"

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<LandingPage />} />
          <Route path="product/:id" element={<Product />} />
          <Route path="cart" element={<Cart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
