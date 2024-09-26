import React, { useState } from 'react';
import './Counter.css'; 

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div>
      <button onClick={decrement} disabled={count === 0}>
        -
      </button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
      <button id="alignments" onClick={reset}>R</button>
    </div>
  );
}

export default Counter;
