const ProductCard = ({ navigate, styles }) => {
  return (
    <div onClick={navigate} className={`flex column bgWhite ${styles}`}>
      <img
        className="pointer"
        src="/public/images/landingpage/product-cover-5.png"
        alt="product cover"
      />
      <div className="productDetail wFull flex column justifyCenter itemCenter ">
        <h5 className="wFull">Graphic Design</h5>
        <p className="wFull">English Department</p>
        <span className="flex wFull itemCenter justifyCenter">
          <h5 className="priceGray ">$16.48</h5>
          <h5 className="priceGreen">$6.48</h5>
        </span>
      </div>
    </div>
  )
}

export default ProductCard
