const Button = ({ text, style = "commonButton", onClick }) => {
  return <button onClick={onClick} className={style}>{text}</button>
}

export default Button
