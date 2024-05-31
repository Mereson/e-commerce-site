import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"

const Footer = () => {
  return (
    <footer>
      <section className="footerSection flex itemCenter">
        <h3 className="logoBlue">Bandage</h3>
        <div className="navItemFlex footerIcons flex actionBlue navItemFlex2">
          <FaFacebook />
          <FaInstagram />
          <FaTwitter />
        </div>
      </section>
      <div className="line"></div>
      <article className="flex footerArticle">
        <article className="flex itemCenter grid ">
          <div className="flex">
            <h5>Company Info</h5>

            <p>About Us</p>
            <p>Carrier</p>
            <p>We are hiring</p>
            <p>Blog</p>
          </div>
          <div className="flex">
            <h5>Legal</h5>

            <p>About Us</p>
            <p>Carrier</p>
            <p>We are hiring</p>
            <p>Blog</p>
          </div>
          <div className="flex">
            <h5>Features</h5>

            <p>Business Marketing</p>
            <p>User Analytic</p>
            <p>Live Chat</p>
            <p>Unlimited Support</p>
          </div>
          <div className="flex">
            <h5>Resources</h5>

            <p>IOS & Android</p>
            <p>Watch a Demo</p>
            <p>Customers</p>
            <p>API</p>
          </div>
        </article>
        <div className="formItem">
          <h5>Get in Touch</h5>
          <form className="flex">
            <input type="email" placeholder="Your Email" />
            <button className="white">Subscribe</button>
          </form>
          <p>Lore imp sum dolor Amit</p>
        </div>
      </article>
      <section className="footerSection2">
        <p>Made With Love By Finland All Right Reserved </p>
      </section>
    </footer>
  )
}

export default Footer
