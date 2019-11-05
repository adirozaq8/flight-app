import React, { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <div className="container">
        <div className="card text-center bg-dark">
          <div className="card-footer text-light">
            Copyright © 2019 Flight Booking App. <br />
            Flight Booking App is the world leader in online travel & related
            services.
          </div>
          <hr className="bg-light w-75 text-center mx-auto" />
          <div className="pb-2">
            <a href="#" className="fa fa-facebook">
              <FontAwesomeIcon icon={faFacebookSquare} />
            </a>
            <a href="#" className="fa fa-twitter">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="#" className="fa fa-instagram">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
