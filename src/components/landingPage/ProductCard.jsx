const ProductCard = ({
  images,
  title,
  description,
  price,
  discountPercentage,
  navigate,
  styles,
}) => {
  return (
    <div
      onClick={navigate}
      className={`flex column justifyCenter itemCenter bgWhite ${styles}`}
    >
      <img className="pointer" src={images[0]} alt="product cover" />
      <div className="productDetail wFull flex column justifyCenter itemCenter ">
        <h5 className="wFull">{title}</h5>
        <p className="wFull">{description.slice(0, 50)}</p>
        <span className="flex wFull itemCenter justifyCenter">
          <h5 className="priceGray ">${price}</h5>
          <h5 className="priceGreen">${discountPercentage}</h5>
        </span>
      </div>
    </div>
  )
}

export default ProductCard
