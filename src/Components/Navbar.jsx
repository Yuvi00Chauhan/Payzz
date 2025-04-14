import React from "react";
import { goHome } from "./GlobalFunctions";
import { goAbout } from "./GlobalFunctions";
import { goAccount } from "./GlobalFunctions";
import "../Components/Navbar.css";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="#" onClick={(e) => goHome(navigate, e)}>
          Payzz
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav w-100 d-flex flex-lg-row flex-column text-center">
            <li className="nav-item flex-fill">
              <a className="nav-link active" href="#" onClick={(e) => goHome(navigate, e)}>
                Home
              </a>
            </li>
            <li className="nav-item flex-fill">
              <a className="nav-link active" href="#" onClick={(e) => goAbout(navigate, e)} >
                About us
              </a>
            </li>
            <li className="nav-item flex-fill">
              <a className="nav-link active" href="#" >
                Contact us
              </a>
            </li>
            <li className="nav-item flex-fill">
              <a className="nav-link active" href="#" onClick={(e) => goAccount(navigate, e)}>
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
