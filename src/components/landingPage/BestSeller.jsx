import { useNavigate } from "react-router-dom"
import Button from "../Button"
import ProductCard from "./ProductCard"
import { useSelector } from "react-redux"
import { useGetAllProductsQuery } from "../../features/product/productsApi"
import { useState } from "react"

const BestSeller = () => {
  const [currentPage, setCurrentPage] = useState(1)

  const navigate = useNavigate()
  const { products } = useSelector((store) => store.product)

  const increasePage = () => {
    setCurrentPage((prevPage) => prevPage + 1)
  }

  const reducePage = () => {
    setCurrentPage(1)
  }

  const paginatedProducts = products.slice(0, currentPage * 8)

  const { error, isLoading } = useGetAllProductsQuery()

  if (isLoading)
    return <div className="flex justifyCenter itemCenter">Loading...</div>
  if (error)
    return (
      <div className="flex justifyCenter itemCenter">
        Error loading products
      </div>
    )

  return (
    <section className="flex itemsCenter bgGrey justifyCenter">
      <section className="bestSeller flex column itemCenter justifyCenter">
        <div className="text flex column itemCenter justifyCenter">
          <h4 className="hide">Featured Products</h4>
          <h3>BESTSELLER PRODUCTS</h3>
          <p>Problems trying to resolve the conflict between </p>
        </div>
        <section className="bsProducts">
          {paginatedProducts.map((item) => (
            <ProductCard
              key={item.id}
              {...item}
              navigate={() => navigate(`/product/${item.id}`)}
              // styles={"bsProduct"}
              styles={"bsItem"}
            />
          ))}
        </section>
        <section className="flex itemsCenter justifyCenter">
          {paginatedProducts.length == 30 ? (
            <Button
              onClick={reducePage}
              text={"HIDE SHOWN PRODUCTS"}
              style="commonButton btn actionBlue"
            />
          ) : (
            <Button
              onClick={increasePage}
              text={"LOAD MORE PRODUCTS"}
              style="commonButton btn actionBlue"
            />
          )}
        </section>
      </section>
    </section>
  )
}

export default BestSeller
