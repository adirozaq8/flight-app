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
                type="text"
                className="form-control"
                placeholder="Calendar date departure"
              />
              <input
                type="text"
                className="form-control"
                placeholder="Calendar date arrival"
              />
            </div>
          </div>
          <div className="container">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Number of passengers"
              />
              <input
                type="text"
                className="form-control"
                placeholder="Class type"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Jumbotron;
