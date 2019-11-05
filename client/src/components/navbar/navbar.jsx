import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";

function Navbar() {
  return (
    <div>
      <nav class="container navbar navbar-expand-sm navbar-light bg-light">
        <a href="" class="navbar-brand">
          Logo here
        </a>
        <button
          class="navbar-toggler"
          data-toggle="collapse"
          data-target="#myNav1"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse justify-content-between"
          id="myNav1"
        >
          <ul class="navbar-nav ml-auto">
            <form action="" class="form-inline">
              <div class="input-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="basic-addon1"
                />
                <div class="input-group-append">
                  <span class="input-group-text" id="basic-addon1">
                    <div className="MainFrame__fa-icon">
                      <FontAwesomeIcon icon={faSearch} />
                    </div>
                  </span>
                </div>
              </div>
            </form>
            <li class="nav-item">
              <a href="#" class="nav-link">
                Login
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link disabled">
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
