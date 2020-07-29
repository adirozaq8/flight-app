import React, { Component } from "react";
import FlightTakeoff from "@material-ui/icons/FlightTakeoff";
import FlightLand from "@material-ui/icons/FlightLand";
import "./SuggestionList.css";

class SuggestionList extends Component {
  render() {
    const cities = this.props.cities;
    return (
      <>
        {cities.length > 0 && (
          <div id="SuggestionList">
            <div id="sugList-recent">{/* <p>Recent searches</p> */}</div>
            <div id="sugList-popular">{/* <p>Popular cities</p> */}</div>
            <div id="sugList-suggest">
              {/* <p>Suggestions</p> */}
              <div>
                {cities.map((city) => (
                  <div key={city._id}>
                    <div className="city-block">
                      <div>
                        <div className="city-title">
                          <span>{city.city}</span>
                        </div>
                        <div className="city-subtitle">
                          <span>{city.iata}</span>&nbsp;
                          <span>{city.name}</span>
                        </div>
                      </div>
                      {this.props.field === 1 && (
                        <FlightTakeoff className="from-to-icon" />
                      )}
                      {this.props.field === 2 && (
                        <FlightLand className="from-to-icon" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
}

export default SuggestionList;
