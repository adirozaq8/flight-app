import React, { Component } from "react";
import { connect } from "react-redux";
import { setAmformState } from "../../redux/amform/amform.actions";
import FlightTakeoff from "@material-ui/icons/FlightTakeoff";
import FlightLand from "@material-ui/icons/FlightLand";
import "./SuggestionList.css";

class SuggestionList extends Component {
  constructor(props) {
    super(props);
    this.amform = props.amform.amform;
    this.setAmForm = props.setAmformState;
  }

  clickSuggestion(e) {
    if (this.amform.fromToFocus === 1) {
      this.amform.input.fromReady = true;
      this.amform.input.from = e.currentTarget.dataset.city;
      this.amform.input.fromIata = e.currentTarget.dataset.iata;
      this.amform.input.fromAirport = e.currentTarget.dataset.airport;
      this.amform.input.fromCountry = e.currentTarget.dataset.country;
    } else {
      this.amform.input.toReady = true;
      this.amform.input.to = e.currentTarget.dataset.city;
      this.amform.input.toIata = e.currentTarget.dataset.iata;
      this.amform.input.toAirport = e.currentTarget.dataset.airport;
      this.amform.input.toCountry = e.currentTarget.dataset.country;
    }
    this.setAmForm(this.amform);
  }
  render() {
    if (this.amform.airports && this.amform.airports.length > 0) {
      return (
        <>
          {this.amform.airports.length > 0 && (
            <div className="SuggestionList" id="SuggestionList">
              <div id="sugList-suggest">
                <div>
                  {this.amform.airports.map((city) => (
                    <div key={city._id} className="">
                      <div
                        className="SuggestionList__city-block"
                        data-city={city.city}
                        data-airport={city.name}
                        data-iata={city.iata}
                        data-country={city.country}
                        onMouseDown={(e) => this.clickSuggestion(e)}
                      >
                        <div>
                          <div className="SuggestionList__city-title">
                            <span>{city.city}</span>
                          </div>
                          <div className="SuggestionList__city-subtitle">
                            <span>{city.iata},</span>&nbsp;
                            <span>{city.name},</span>&nbsp;
                            <span>{city.country}</span>
                          </div>
                        </div>
                        {this.amform.fromToFocus === 1 && (
                          <FlightTakeoff className="SuggestionList__from-to-icon" />
                        )}
                        {this.amform.fromToFocus === 2 && (
                          <FlightLand className="SuggestionList__from-to-icon" />
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
    } else {
      return <></>;
    }
  }
}
const mapStateToProps = (state) => ({
  amform: state.amform,
});
export default connect(mapStateToProps, { setAmformState })(SuggestionList);
