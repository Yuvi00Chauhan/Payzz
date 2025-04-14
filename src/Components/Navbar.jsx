import React from "react";
import { goHome } from "./GlobalFunctions";
import "../Components/Navbar.css";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark  fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="#" onClick={(e) => goHome(navigate, e)}>
          Payzz
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav w-100 d-flex justify-content-between mb-2 mb-lg-0">
            <li className="nav-item flex-fill text-center">
              <a className="nav-link active" aria-current="page" href="#" onClick={(e) => goHome(navigate, e)}>
                Home
              </a>
            </li>
            <li className="nav-item flex-fill text-center">
              <a className="nav-link active" href="#">
                About us
              </a>
            </li>
            <li className="nav-item dropdown flex-fill text-center">
              <a
                className="nav-link active"
                href="#"
              >
                Contact us
              </a>
            </li>
            <li className="nav-item flex-fill text-center">
              <a className="nav-link active">
                Account
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
