import Button from "../Button"

const CallToAction = () => {
  return (
    <section className="ctaSection flex justifyCenter itemsCenter">
      <section className="flex column justifyCenter itemsCenter">
        <h6 className="actionBlue textCenter">Designing Better Experience</h6>
        <h2 className="logoBlue textCenter">
          Problems trying to resolve the conflict between{" "}
        </h2>
        <p className="textCenter">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics:
        </p>
        <h3 className="ctaPrice textCenter">$16.48</h3>
        <div className="flex justifyCenter itemsCenter">
          <Button
            text={"ADD YOUR CALL TO ACTION"}
            style="commonButton white bgActionBlue"
          />
        </div>
      </section>
    </section>
  )
}

export default CallToAction
