
const Topping = (props) => {
  const { topping, setTopping, selectedTopping } = props
  const isSelected = topping === selectedTopping
  // props.setTopping
  return <li className={isSelected ? 'selected' : ''} onClick={() => { setTopping(topping) }}>{topping}</li>

}

export default Topping