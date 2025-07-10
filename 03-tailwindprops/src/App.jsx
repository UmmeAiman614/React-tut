import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
const myObj = {
  name: 'Aiman',
  age: '20'
}
  return (
    <>
      <h1 className='bg-green-400 text-black rounded-xl p-4'>Tailwind test</h1>
      <Card  username = "Chai Aur Code" someObj = {myObj}/>
      <Card someObj = {myObj}/>
    </>
  )
}

export default App
