import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";

function Navbar() {
  const [navSearchShow, setNavSearchShow] = useState(1);
  return (
    <div className="">
      <nav className="container navbar navbar-expand-sm navbar-light">
        <a href="#" className="navbar-brand">
          Logo here
        </a>
        <button
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#myNav1"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-between"
          id="myNav1"
        >
          <ul className="navbar-nav ml-auto">
            <form action="" className="form-inline">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="basic-addon1"
                />
                <div className="input-group-append">
                  <span className="input-group-text" id="basic-addon1">
                    <div className="MainFrame__fa-icon">
                      <FontAwesomeIcon icon={faSearch} />
                    </div>
                  </span>
                </div>
              </div>
            </form>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Login
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Sign up
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
