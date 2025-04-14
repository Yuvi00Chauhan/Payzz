import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import LandingPage from "./Components/LandingPage";
import HomePage from "./Components/HomePage";
import Footer from "./Components/Footer";
import MobileRecharge from "./Components/MobileRecharge";
import DTHrecharge from "./Components/DTHrecharge";
import FastTag from "./Components/FastTag";
import BroadbandRecharge from "./Components/BroadbandRecharge";
import ElectricityBill from "./Components/ElectricityBill";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import GasBill from "./Components/GasBill";
import About from "./Components/About";
import Account from "./Components/Account";
import FAQ from "./Components/FAQ";
import Features from "./Components/Features";
import Contact from "./Components/Contact";
function App() {
  return (
    <>
      <BrowserRouter>
      
        <MainContent />
      </BrowserRouter>
    </>
  );
}

function MainContent() {
  return (
    <div className="App">
      <div className="app-container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/login" element={<LandingPage />} />
          <Route path="/mobo-recharge" element={<MobileRecharge />} />
          <Route path="/dth-recharge" element={<DTHrecharge />} />
          <Route path="/fast-recharge" element={<FastTag />} />
          <Route path="/internet-recharge" element={<BroadbandRecharge />} />
          <Route path="/electricity-bill-pay" element={<ElectricityBill />} />
          <Route path="/gas-bill-pay" element={<GasBill />} />
          <Route path="/about" element={<About />} />
          <Route path="/account" element={<Account />} />
          <Route path="/faq" element={<FAQ />} />
        
          <Route path="/contact" element={<Contact />} />
          <Route path="/features" element={<Features />} />
          
        </Routes>
        <Footer />
      </div>
    </div>
  );
}
export default App;
