
import './App.css'
import Navbar from './components/navbar/Navbar'
import Home from './pages/homePages/Home'
import LocomotiveScroll from 'locomotive-scroll';

function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
   <div>
    <Navbar></Navbar>
    <Home></Home>
   </div>
  )
}

export default App
