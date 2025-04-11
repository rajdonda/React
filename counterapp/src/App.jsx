import { useState } from 'react'
import Counter from './Counter.jsx'

function App() {
  const [count, setCount] = useState(0)

  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)
  const reset = () => setCount(0)

  return (
    <>
      <Counter 
        count={count} 
        onIncrement={increment} 
        onDecrement={decrement} 
        onReset={reset} 
      />
    </>
  )
}

export default App
