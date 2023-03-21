import { useState } from 'react'
import Routing from '../src/routes/index'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
     <Routing/>
    </div>
  )
}

export default App
