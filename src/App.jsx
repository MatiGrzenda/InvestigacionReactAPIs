import { useState } from 'react'
import './App.css'
import Imagen from './Imagen.jsx'

function App() {
  const [text, setText] = useState("Generar nuevo gato :)")
  const [count, setCount] = useState(0);

  const click = () => {
    setCount(count + 1);
  }

  return (
    <>
      <Imagen count={count} setText={setText} />
      <br></br>
      <button onClick={click}>
        {text}
      </button>
    </>
  )
}

export default App
