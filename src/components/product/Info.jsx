const Info = () => {
  return (
    <section className="flex column productInfoSection justifyCenter">
      <nav className="flex justifyCenter textGrey itemCenter">
        <p>Description</p>
        <p>Additional Information</p>
        <p>
          Reviews <span className="actionGreen">(0)</span>
        </p>
      </nav>
      <section className="productInfo flex justifyCenter">
        <article className="flex column textGrey">
          <h3 className="logoBlue">the quick fox jumps over </h3>
          <p>
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.
          </p>
          <p className="productParagraph">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.
          </p>
          <p>
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.
          </p>
        </article>
        <img
          src="/public/images/productpage/unsplash_QANOF9iJlFs.png"
          alt="product info image"
        />
      </section>
    </section>
  )
}

export default Info
