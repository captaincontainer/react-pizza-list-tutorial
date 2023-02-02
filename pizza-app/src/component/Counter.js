import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0)

  // ES6 way
  const incrementCounter = () => {
    setCount(count + 1)
  }

  // Named function way
  // function incrementCounterMethodTwo() {
  //   setCount(count + 1)
  // }

  return (
    <div className="App">
      <h1>This button has been clicked {count}</h1>
      <button onClick={incrementCounter}>Increment count</button>
    </div>
  );
}

export default Counter