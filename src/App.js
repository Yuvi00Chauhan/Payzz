import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage from './Components/LandingPage';
import HomePage from './Components/HomePage';
import Footer from './Components/Footer';
import MobileRecharge from './Components/MobileRecharge';


function App() {
  return (
    <>
    <Navbar />
    {/* <LandingPage /> */}
    {/* <HomePage /> */}
    <MobileRecharge />
    <Footer />
    </>
 
  );
}

export default App;
