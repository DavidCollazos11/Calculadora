import { useState } from 'react'
import reactLogo from './assets/react.svg'
import appLogo from '/favicon.svg'
import PWABadge from './PWABadge.jsx'
import Calculadora from './componentes/Calculadora.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://pbs.twimg.com/media/Ej2YndoWoAArbBv.jpg" target="_blank">
          <img src={"https://pbs.twimg.com/media/EXa9W7cXsAAwxRW?format=jpg&name=4096x4096"} className="logo" alt="HOI" />
        </a>
        <a href="https://pbs.twimg.com/media/EXa9W7cXsAAwxRW?format=jpg&name=4096x4096" target="_blank">
          <img src={"https://pbs.twimg.com/media/Ej2YndoWoAArbBv.jpg"} className="logo react" alt="ABEL" />
        </a>
      </div>
      <Calculadora/>
      <PWABadge />
    </>
  )
}

export default App