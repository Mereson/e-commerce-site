import { BiSolidBookReader } from "react-icons/bi"
import { FaArrowTrendUp } from "react-icons/fa6"
import { VscBook } from "react-icons/vsc"

const Services = () => {
  return (
    <section className=" flex itemCenter justifyCenter">
      <section className="bestSeller flex column itemCenter justifyCenter">
        <div className="text flex column itemsCenter justifyCenter">
          <h4>Featured Products</h4>
          <h3>THE BEST SERVICES</h3>
          <p>Problems trying to resolve the conflict between </p>
        </div>
        <section className="services flex">
          <div className="flex column itemsCenter">
            <i>
              <BiSolidBookReader className="servicesIcon actionBlue" />
            </i>
            <h3>Easy Wins</h3>
            <p>Get your best looking smile now!</p>
          </div>
          <div className="flex column itemsCenter">
            <i>
              <VscBook className="servicesIcon actionBlue" />
            </i>
            <h3>Concrete</h3>
            <p>
              Defalcate is most focused in helping you discover your most
              beautiful smile
            </p>
          </div>
          <div className="flex column itemsCenter">
            <i>
              <FaArrowTrendUp className="servicesIcon actionBlue" />
            </i>
            <h3>Hack Growth</h3>
            <p>Overcame any hurdle or any other problem.</p>
          </div>
        </section>
      </section>
    </section>
  )
}

export default Services
