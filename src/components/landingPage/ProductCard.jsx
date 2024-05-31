const ProductCard = ({ navigate }) => {
  return (
    <div onClick={navigate} className="flex column">
      <img
        className="pointer"
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

export default ProductCard
