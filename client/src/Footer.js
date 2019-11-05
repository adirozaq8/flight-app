import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

class Footer extends Component {
  render(){
    return (
      <div className="container">
        <div className="card text-center bg-dark">
          <div className="card-footer text-light">
            Copyright © 2019 Flight Booking App. <br/>
            Flight Booking App is the world leader in online travel & related services.
          </div>
        </div>
      </div>
    )
  }
}

export default Footer;