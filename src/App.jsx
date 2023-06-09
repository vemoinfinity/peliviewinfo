import './App.css'
import AllRoutes from "./Routes/AllRoutes.jsx";
import { BrowserRouter} from 'react-router-dom';
import Navigation from './components/Navigation';

function App() {
 
  return (
    <BrowserRouter>
    <Navigation/>
      <AllRoutes/>
    </BrowserRouter>
  )
}

export default App
