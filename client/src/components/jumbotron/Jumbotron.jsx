import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./Jumbotron.css";

function Jumbotron() {
  return (
    <div>
      <div class="container">
        <form action="" className="form-inline">
          <div className="container">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Origin"
                aria-label="Origin"
              />
              <input
                type="text"
                className="form-control"
                placeholder="Destination"
                aria-label="Destination"
              />
              <div className="input-group-append">
                <span className="input-group-text" id="jumbo_search">
                  <div className="MainFrame__fa-icon">
                    <FontAwesomeIcon icon={faSearch} />
                  </div>
                </span>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="input-group">
              <input
                type="date"
                className="form-control"
                placeholder="Calendar date departure"
                defaultValue={Date.now()}
              />
              <input
                type="date"
                className="form-control"
                placeholder="Calendar date arrival"
                defaultValue={Date.now()}
              />
            </div>
          </div>
          <div className="container">
            <div className="input-group">
              <input
                type="number"
                className="form-control"
                placeholder="Number of passengers"
                defaultValue="1"
              />
              <select name="cars">
                <option value="select" selected disabled>
                  {"< select class >"}
                </option>
                <option value="first">First class</option>
                <option value="business">Business</option>
                <option value="premium">Premium</option>
                <option value="economy">Economy</option>
              </select>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Jumbotron;
