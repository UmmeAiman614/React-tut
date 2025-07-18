import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
function App() {
  let [counter, setCounter] = useState(3)
  //  let counter = 15
  const addValue = () => {
    if (counter < 20 && counter >= 0) {
      counter = counter + 1
      setCounter(counter)
    }
  }
  const removeValue = () => {


    if (counter > 0) {
      counter = counter - 1
      setCounter(counter)
    }

  }
  return (

    <>
      <h1>Chai Aur React</h1>
      <h2>{counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
