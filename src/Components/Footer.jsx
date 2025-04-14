import React from "react";
import "./Footer.css";
import { useNavigate } from "react-router-dom";
import { goHome } from "./GlobalFunctions";
function Footer() {
  const navigate = useNavigate();
  return (
   
    <footer className="footer-dark text-white bg-dark mt-auto py-3 px-4 d-flex flex-wrap justify-content-between align-items-center">
      <p className="col-md-4 mb-0 footBrand">&copy; {new Date().getFullYear()} Payzz.com.</p>

      <ul className="nav col-md-4 justify-content-end">
        <li className="nav-item footLinks">
          <a href="#" className="nav-link px-2 text-white" onClick={(e) => goHome(navigate, e)}>
            Home
          </a>
        </li>
        <li className="nav-item footLinks">
          <a href="#" className="nav-link px-2 text-white">
            Features
          </a>
        </li>
        <li className="nav-item footLinks">
          <a href="#" className="nav-link px-2 text-white">
            FAQs
          </a>
        </li>
        <li className="nav-item footLinks">
          <a href="#" className="nav-link px-2 text-white">
            About
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
