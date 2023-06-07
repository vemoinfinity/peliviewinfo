import { useState } from 'react'
import './App.css'
import AllRoutes from "./Routes/AllRoutes.jsx";
import { BrowserRouter} from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <AllRoutes/>
    </BrowserRouter>
  )
}

export default App
