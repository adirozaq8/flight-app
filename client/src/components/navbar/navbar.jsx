import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";

class Navbar extends React.Component {
  componentDidMount() {
    const s = document.createElement('script');
    s.type = 'text/javascript';
    s.async = true;
    s.innerHTML = `$(document).ready(function() {
      setInterval( function() {
      var hours = new Date().getHours();
      $(".hours").html(( hours < 10 ? "0" : "" ) + hours);
      }, 1000);
      setInterval( function() {
      var minutes = new Date().getMinutes();
      $(".min").html(( minutes < 10 ? "0" : "" ) + minutes);
      },1000);
      setInterval( function() {
      var seconds = new Date().getSeconds();
      $(".sec").html(( seconds < 10 ? "0" : "" ) + seconds);
      },1000);
      });`;
      document.body.appendChild(s)
  }

  render(){
    // const [navSearchShow, setNavSearchShow] = useState(1);
    return (
      <div className="shadow bg-white rounded">
        <nav className="container navbar navbar-expand-sm navbar-light">
          <a href="#" className="navbar-brand">
            Logo here
          </a>
          <div id="nav-clock" className="col-md-3">
            <div className="card bg-primary text-white">
            <h3 className="card-title text-center">
            <div className="d-flex flex-wrap justify-content-center mt-2">
            <a><span className="badge hours"></span></a> :
            <a><span className="badge min"></span></a> :
            <a><span className="badge sec"></span></a>
            </div>
            </h3>
            </div>
          </div>
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
}

export default Navbar;
