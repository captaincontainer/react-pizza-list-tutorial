const ToppingList = (props) => {
  console.log('ToppingList props', props)
  return <ul>{props.children}</ul>
}

export default ToppingList