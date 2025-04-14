import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer-dark text-white bg-dark mt-auto py-3 px-4 d-flex flex-wrap justify-content-between align-items-center">
      <p className="col-md-4 mb-0">&copy; {new Date().getFullYear()} Payzz.com. All rights reserved.</p>

      <ul className="nav col-md-4 justify-content-end">
        <li className="nav-item">
          <a href="#" className="nav-link px-2 text-white">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link px-2 text-white">
            Features
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link px-2 text-white">
            Pricing
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link px-2 text-white">
            FAQs
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link px-2 text-white">
            About
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
