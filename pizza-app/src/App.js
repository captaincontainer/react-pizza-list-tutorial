import './App.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>This button has been clicked {count}</h1>
      <button onClick={() => { setCount(count + 1) }}>Increment count</button>
    </div>
  );
}

export default App;
