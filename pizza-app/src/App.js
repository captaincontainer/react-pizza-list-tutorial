import './App.css';
import React, { useState } from 'react';
import ToppingList from './component/ToppingList';
import Topping from './component/Topping'

function App() {
  const [topping, setTopping] = useState('Cheese')

  return <div>
    <h1>The current topping is {topping}</h1>
    <ToppingList>
      <Topping topping='Cheese' setTopping={setTopping} selectedTopping={topping} />
      <Topping topping='Pepperoni' setTopping={setTopping} selectedTopping={topping} />
      <Topping topping='Pineapple' setTopping={setTopping} selectedTopping={topping} />
      <Topping topping='Cheez Its' setTopping={setTopping} selectedTopping={topping} />
    </ToppingList>
  </div>

}

export default App;
