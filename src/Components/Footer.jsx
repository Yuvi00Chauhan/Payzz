import React from "react";
import "./Footer.css";
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();

  const goHome = () => navigate("/home");
  const goFeatures = () => navigate("/features");
  const goFAQ = () => navigate("/faq");
  const goAbout = () => navigate("/about");

  return (
    <footer className="footer-dark text-white bg-dark mt-auto py-3 px-4 d-flex flex-wrap justify-content-between align-items-center">
      <p className="col-md-4 mb-0 footBrand">&copy; {new Date().getFullYear()} Payzz.com.</p>

      <ul className="nav col-md-4 justify-content-end">
        <li className="nav-item footLinks">
          <button className="nav-link px-2 text-white" onClick={goHome}>
            Home
          </button>
        </li>
        <li className="nav-item footLinks">
          <button className="nav-link px-2 text-white" onClick={goFeatures}>
            Features
          </button>
        </li>
        <li className="nav-item footLinks">
          <button className="nav-link px-2 text-white" onClick={goFAQ}>
            FAQs
          </button>
        </li>
        <li className="nav-item footLinks">
          <button className="nav-link px-2 text-white" onClick={goAbout}>
            About
          </button>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
