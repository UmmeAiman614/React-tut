// import Chai from "./chai"

import { useState } from "react"

function App() {
  let [counter, setCounter] = useState(15)
  //  let counter = 15
  const addValue = () => {
    // setCounter(counter + 1)
    // setCounter(counter + 1)
    // setCounter(counter + 1)
    // setCounter(counter + 1)
    // setCounter(counter + 1) // will increase only 1 values all of these

    setCounter(prevCoutner => prevCoutner+1)
    setCounter(prevCoutner => prevCoutner+1)
    setCounter(prevCoutner => prevCoutner+1)
    setCounter(prevCoutner => prevCoutner+1)
    setCounter(prevCoutner => prevCoutner+1)  //this will 15 to 20 Imp for interview


  }
  const removeValue = () => {

    counter = counter - 1
    if (counter < 0) {
      console.log('Cannot remove more values');

    }
    setCounter(counter)
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
