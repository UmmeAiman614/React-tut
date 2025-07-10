import { useState, useCallback, useEffect, useRef } from 'react'
// import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numAllowed, setNumAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  //useRef Hook
  const passwordRef = useRef(null)




  const passwordGenerator = useCallback(() => {
    let pass = "" 
    let str = "ABCDEFGHIJKLEMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numAllowed){
      str += "123456789"
    }
 if(charAllowed){
      str += "!@#$%^&*(){}[]+_-~"
    }
for (let i = 1; i < length; i++) {
  let char = Math.floor(Math.random() * str.length + 1)
  pass += str.charAt(char)
}
setPassword(pass)
  }, [length, numAllowed, charAllowed, setPassword])

  const copyToClipBoard = useCallback(() =>{
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,99)
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(()=>{
    passwordGenerator()
  }, [length, numAllowed, charAllowed, passwordGenerator])


  return (
    <> 
      <div className='w-full p-4 m-8 shadow-md max-w-md mx-auto rounded-lg bg-gray-600 text-orange-500'>
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input
           type="text"
           value={password}
           className='outline-none py-1 px-3 w-full'
           placeholder='password'
           ref={passwordRef}
           readOnly 
           />
           <button
           onClick={copyToClipBoard}
           className='bg-blue-700 text-white p-4 shrink-0'>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range"
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => {setLength(e.target.value)}} 
            />
            <label>length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
            defaultChecked= {numAllowed}
            id='number-input'
            onChange={() => {
              setNumAllowed((prev) => !prev)
            }}
            />
            <label htmlFor="number-input">Numbers</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
            defaultChecked= {charAllowed}
            id='char-input'
            onChange={() => {
              setCharAllowed((prev) => !prev)
            }}
            />
            <label htmlFor="char-input">Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
