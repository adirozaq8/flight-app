import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./navbar.css";

import Clock from "../clock/Clock";

class Navbar extends React.Component {
  //
  render() {
    // const [navSearchShow, setNavSearchShow] = useState(1);
    return (
      <div className="shadow bg-white rounded">
        <nav className="container navbar navbar-expand-sm navbar-light">
          <a href="/" className="navbar-brand">
            Logo here
          </a>
          <Clock />
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
                <button
                  type="button"
                  className="nav-link no-button"
                  data-toggle="modal"
                  data-target="#loginModal"
                >
                  Login
                </button>
              </li>
              <li className="nav-item">
                <button
                  type="button"
                  className="nav-link no-button"
                  data-toggle="modal"
                  data-target="#signupModal"
                >
                  Sign up
                </button>
              </li>
            </ul>
          </div>
        </nav>

        {/* Login Modal */}
        <div
          className="modal fade"
          id="loginModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Log In
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form action="/login" method="POST">
                  <div className="form-group">
                    <label htmlFor="usernameLogin">Username</label>
                    <input
                      type="text"
                      className="form-control"
                      id="usernameLogin"
                      placeholder="Enter username"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="passwordLogin">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="passwordLogin"
                      placeholder="Enter password"
                    />
                  </div>
                  <div className="modal-footer">
                    <button type="submit" className="btn btn-primary">
                      Login
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* Modal End */}

        {/* Signup Modal */}
        <div
          className="modal fade"
          id="signupModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Sign Up
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form action="/register" method="POST">
                  <div className="form-group">
                    <label htmlFor="usernameSignup">Username</label>
                    <input
                      type="text"
                      className="form-control"
                      id="usernameSignup"
                      placeholder="Enter username"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="passwordSignup">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="passwordSignup"
                      placeholder="Enter password"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="emailSignup">Email address</label>
                    <input
                      type="email"
                      className="form-control"
                      id="emailSignup"
                      aria-describedby="emailHelp"
                      placeholder="Enter email address"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phoneNumberSignup">Phone Number</label>
                    <input
                      type="text"
                      className="form-control"
                      id="phoneNumberSignup"
                      placeholder="Enter phone number"
                    />
                  </div>
                  <div className="modal-footer">
                    <button type="submit" className="btn btn-primary">
                      Sign Up
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* Modal End */}
      </div>
    );
  }
}

export default Navbar;
