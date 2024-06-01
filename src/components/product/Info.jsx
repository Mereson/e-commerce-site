const Info = () => {
  return (
    <section className="flex column bgWhite hide productInfoSection justifyCenter">
      <nav className="flex justifyCenter textGrey itemCenter">
        <p className="d-500 pointer">Description</p>
        <p className="d-500 pointer">Additional Information</p>
        <p className="d-500 pointer">
          Reviews <span className="actionGreen">(0)</span>
        </p>
      </nav>
      <section className="flex justifyCenter itemCenter">
        <section className="productInfo flex bgGrey justifyCenter">
          <article className="flex column textGrey">
            <h3 className="logoBlue">the quick fox jumps over </h3>
            <p>
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </p>
            <p className="productParagraph">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </p>
            <p>
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </p>
          </article>
          <img
            src="/public/images/productpage/unsplash_QANOF9iJlFs.png"
            alt="product info image"
          />
        </section>
      </section>
    </section>
  )
}

export default Info
