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
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

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
          {/* <Route path="/account" element={<Account />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/features" element={<FeaturePage />} />
          <Route path="/faqs" element={<FAQsPage />} /> */}
        </Routes>
        <Footer />
      </div>
    </div>
  );
}
export default App;
