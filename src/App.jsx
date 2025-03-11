
import './App.css'
import Navbar from './components/navbar/Navbar'
import Banner from './pages/homePages/Banner';
import Home from './pages/homePages/Home'
import LocomotiveScroll from 'locomotive-scroll';
import Mission from './pages/homePages/Mission';
import Specialisations from './pages/homePages/Specialisations';
import Commitment from './pages/homePages/Commitment';
import Discover from './pages/homePages/Discover';
import Testimonials from './pages/homePages/Testimonials';
import Fqa from './pages/homePages/Fqa';
import Footer from './pages/homePages/Footer';

function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
   <div>
    <Navbar></Navbar>
    {/* <Home></Home> */}
    <Banner></Banner>
    <Mission></Mission>
    <Specialisations></Specialisations>
    <Commitment></Commitment>
    <Discover></Discover>
    <Testimonials></Testimonials>
    <Fqa></Fqa>
    <Footer></Footer>

   </div>
  )
}

export default App
