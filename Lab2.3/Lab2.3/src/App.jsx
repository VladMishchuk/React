import './App.css'
import { useState } from 'react'

function App() {

  const [num1, setNum1] = useState();
  const [num2, setNum2] = useState();
  const [res, setRes] = useState();

  return (
    <>
      <h1>Calculator</h1>
      <label htmlFor="num1">Number 1:
        <input type="number" name="num1" id="num1" value={num1} onChange={e => setNum1(parseFloat(e.target.value))} required/>
      </label>
      <label htmlFor="num2">Number 2:
        <input type="number" name="num2" id="num2" value={num2} onChange={e => setNum2(parseFloat(e.target.value))}required/>
      </label>
      <button onClick={() => setRes(num1 + num2)}>+</button>
      <button onClick={() => setRes(num1 - num2)}>-</button>
      <button onClick={() => setRes(num1 * num2)}>*</button>
      <button onClick={() => setRes(num1 / num2)}>/</button>
      <h2>Result: {res}</h2>
    </>
  )
}

export default App
