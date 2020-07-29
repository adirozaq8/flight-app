import React, { Component } from "react";
import SuggestionList from "./SuggestionList";
import DateInput from "../dateinput/DateInput";
import CheckCircle from "@material-ui/icons/CheckCircle";
import Circle from "@material-ui/icons/PanoramaFishEyeOutlined";

import "./AmForm.css";

class AmForm extends Component {
  constructor() {
    super();
    this.state = {
      fromToFocus: 0,
      travelType: 1,
      inpOptLen: 5,
      airDb: null,
      airports: null,
    };
  }
  // TODO This fetch should be considered moving up in the component chain
  componentDidMount() {
    fetch("http://localhost:5000/api/amform/getairports", {
      method: "POST",
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({ airDb: data.reqAirport });
      });
  }

  // inputlist option list changes based on input
  travelChange = (e) => {
    this.setState({ travelType: e });
  };
  fieldChange = (e, val) => {
    this.setState({ fromToFocus: 0 });
    let dataListOpt = [];
    let exact = 0;
    if (this.state.airDb.length > 0) {
      dataListOpt = this.state.airDb.filter((airFilter) => {
        if (airFilter.city.toLowerCase() === e.target.value.toLowerCase()) {
          exact++;
        }
        return (
          airFilter.city
            .toLowerCase()
            .includes(e.target.value.toLowerCase(), 0) && airFilter.iata !== ""
        );
      });
    }

    if (dataListOpt.length > 0) {
      dataListOpt = this.sortInputFirst(
        e.target.value.toLowerCase(),
        dataListOpt
      );
    }
    exact > this.state.inpOptLen
      ? (dataListOpt = dataListOpt.slice(0, exact))
      : (dataListOpt = dataListOpt.slice(0, this.state.inpOptLen));

    this.setState({ airports: dataListOpt, fromToFocus: val });
  };

  // sorting priority based on input value at the beginning of string first
  sortInputFirst = (inp, obj) => {
    let first = [];
    let second = [];
    obj.forEach((el) => {
      if (el.city.toLowerCase().indexOf(inp) === 0) {
        first.push(el);
      } else {
        second.push(el);
      }
    });
    return first.concat(second);
  };

  render() {
    return (
      <div className="form" id="AmForm">
        <div className="form__input-group">
          <ul className="form__radio">
            <li onClick={() => this.travelChange(1)}>
              {(this.state.travelType === 1 && (
                <CheckCircle
                  viewBox="0 0 24 24"
                  className="icon icon__active"
                />
              )) || <Circle className="icon" />}
              <span>One way</span>
            </li>
            <li onClick={() => this.travelChange(2)}>
              {(this.state.travelType === 2 && (
                <CheckCircle className="icon icon__active" />
              )) || <Circle className="icon" />}
              <span>Return</span>
            </li>
            <li onClick={() => this.travelChange(3)}>
              {(this.state.travelType === 3 && (
                <CheckCircle className="icon icon__active" />
              )) || <Circle className="icon" />}
              <span>Multi-city</span>
            </li>
            <li onClick={() => this.travelChange(4)}>
              {(this.state.travelType === 4 && (
                <CheckCircle className="icon icon__active" />
              )) || <Circle className="icon" />}
              <span>Nomad</span>
            </li>
          </ul>
        </div>
        <div className="form__input-group">
          <label htmlFor="AmDepart">Departure</label>
          <DateInput className="AmDate" />
          <label htmlFor="AmReturn">Return</label>
          <DateInput className="AmDate" />
        </div>
        <div className="form__input-group">
          <div className="input-box">
            <label htmlFor="Amf__input-from">From</label>
            <input
              onFocus={() => this.setState({ fromToFocus: 1 })}
              onBlur={() => this.setState({ fromToFocus: 0, airports: [] })}
              onInput={(e) => this.fieldChange(e, 1)}
              autoComplete="off"
              type="text"
              id="Amf__input-from"
              name="from"
              list="list_airports"
              placeholder="Origin"
            />
            <span>Iata code, Origin</span>
            {this.state.fromToFocus === 1 && (
              <div className="input__suggestion-list">
                <SuggestionList
                  field={this.state.fromToFocus}
                  cities={this.state.airports || []}
                />
              </div>
            )}
          </div>
          <div className="input-box">
            <label htmlFor="Amf__input-to">To</label>
            <input
              onFocus={() => this.setState({ fromToFocus: 2 })}
              onBlur={() => this.setState({ fromToFocus: 0, airports: [] })}
              onInput={(e) => this.fieldChange(e, 2)}
              autoComplete="off"
              type="text"
              id="Amf__input-to"
              name="to"
              list="list_airports"
              placeholder="Destination"
            />
            <span>IATA code, Destination</span>
            {this.state.fromToFocus === 2 && (
              <div className="input__suggestion-list">
                <SuggestionList
                  field={this.state.fromToFocus}
                  cities={this.state.airports || []}
                />
              </div>
            )}
          </div>
        </div>
        <div className="form__input-group">
          <label htmlFor="AmClass">Cabin class</label>
          <select id="AmClass">
            <option value="economy">Economy</option>
            <option value="premium">Premium economy</option>
            <option value="business">Business</option>
            <option value="first">First class</option>
          </select>
        </div>
        <div className="form__input-group">
          <label htmlFor="AmAdults">Adults</label>
          <input type="number" id="AmAdults" name="adults" defaultValue="1" />
          <label htmlFor="AmChildren">Children</label>
          <input type="number" id="AmChildren" name="children" />
        </div>
        <div className="form__input-group">
          <button id="AmSubmit" type="button">
            Find flights
          </button>
        </div>
      </div>
    );
  }
}

export default AmForm;
