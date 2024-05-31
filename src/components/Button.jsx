const Button = ({ text, style = "commonButton" }) => {
  return <button className={style}>{text}</button>
}

export default Button
