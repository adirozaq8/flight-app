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
  }

  clickSuggestion(e) {
    //TODO look into turning this segment into a Redux state change
    this.amform.fromToFocus === 1 &&
      (document.getElementById("Amf__input-from").value =
        e.currentTarget.dataset.city);
    this.amform.fromToFocus === 2 &&
      (document.getElementById("Amf__input-to").value =
        e.currentTarget.dataset.city);
  }
  render() {
    if (this.amform.airports && this.amform.airports.length > 0) {
      return (
        <>
          {this.amform.airports.length > 0 && (
            <div id="SuggestionList">
              <div id="sugList-suggest">
                <div>
                  {this.amform.airports.map((city) => (
                    <div key={city._id}>
                      <div
                        className="city-block"
                        data-city={city.city}
                        onMouseDown={(e) => this.clickSuggestion(e)}
                      >
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
    } else {
      return <></>;
    }
  }
}
const mapStateToProps = (state) => ({
  amform: state.amform,
});
export default connect(mapStateToProps, { setAmformState })(SuggestionList);