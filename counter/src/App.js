import React, { useState, useEffect } from 'react'
import './App.css';

function App() {
  const [counter, setcounter] = useState(0)
  useEffect(() => {
    setcounter(10)
  }, [])
  return (
    <>
      <div className="App">
        <h2>{counter}</h2>

        <button onClick={() => setcounter(counter + 1)}>Increment</button>
        <button onClick={() => setcounter(counter - 1)}>Decrement</button>
      </div>
    </>
  );
}

export default App;
