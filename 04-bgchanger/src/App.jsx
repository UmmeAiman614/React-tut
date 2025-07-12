import { useState } from 'react'
import Btn from './components/Btn'
// import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className='w-full h-screen'
      style={{ backgroundColor: color }}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 gap-3'>
        <div className='flex flex-wrap justify-center px-3 py-2 rounded-3xl shadow-lg bg-white gap-3'>
          <button
            onClick={() => { setColor('red') }}
            className='outline-none px-4 py-1 rounded-full shadow-lg text-white'
            style={{ backgroundColor: 'Red' }}>Red</button>
          <button
            onClick={() => { setColor('Green') }}
            className='outline-none px-4 py-1 rounded-full shadow-lg text-white'
            style={{ backgroundColor: 'Green' }}>Green</button>
          <button
            onClick={() => { setColor('Blue') }}
            className='outline-none px-4 py-1 rounded-full shadow-lg text-white'
            style={{ backgroundColor: 'Blue' }}>Blue</button>
          <button
            onClick={() => { setColor('purple') }}
            className='outline-none px-4 py-1 rounded-full shadow-lg text-white'
            style={{ backgroundColor: 'Purple' }}>Purple</button>
            <Btn color="skyblue" setColor={setColor} />
            <Btn color="magenta" setColor={setColor} />
            <Btn color="grey" setColor={setColor} />
            <Btn color="brown" setColor={setColor} />



        </div>
      </div>
    </div>
  )
}

export default App
