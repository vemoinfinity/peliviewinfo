import './App.css'
import AllRoutes from "./Routes/AllRoutes.jsx";
import { BrowserRouter} from 'react-router-dom';
import Navigation from './components/Navigation';

function App() {
 
  return (
    <BrowserRouter>
    <Navigation/>
    <div className='font-medium  text-gray-300 pt-2 bg-gradient-to-r from-stone-900 via-gray-800 to-zinc-700  '>
      <AllRoutes/>
    </div>
    </BrowserRouter>
  )
}

export default App
