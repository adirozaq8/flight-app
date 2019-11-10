import React, {Component} from 'react';
import './Clock.css'

class Clock extends Component {
  componentDidMount() {
    const s = document.createElement("script");
    s.type = "text/javascript";
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
    document.body.appendChild(s);
  }

  render(){
    return(
      <div className="col-md-3">
        <div className="card bg-primary text-white">
          <h3 className="card-title text-center">
            <div className="d-flex flex-wrap justify-content-center mt-2">
              <a>
                <span className="badge hours"></span>
              </a>{" "}
              :
              <a>
                <span className="badge min"></span>
              </a>{" "}
              :
              <a>
                <span className="badge sec"></span>
              </a>
            </div>
          </h3>
        </div>
      </div>
    )
  }
}

export default Clock;