import React, { Component } from "react";
import DateInput from "../dateinput/DateInput";

import "./AmForm.css";

class AmForm extends Component {
  constructor() {
    super();
    this.state = {
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
  fieldChange = (e) => {
    let object = this.state.airDb.filter((airFilter) => {
      return (
        airFilter.city
          .toLowerCase()
          .includes(e.target.value.toLowerCase(), 0) && airFilter.iata !== ""
      );
    });

    if (object.length > 0) {
      object = this.sortInputFirst(e.target.value.toLowerCase(), object);
    }

    object = object.slice(0, this.state.inpOptLen);

    this.setState({ airports: object });
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
      <form className="AmForm">
        <div className="form__radio-group">
          <input
            type="radio"
            id="AmOneWay"
            name="flight-route"
            value="oneWay"
          />
          <label htmlFor="AmOneWay">One way</label>
          <input
            type="radio"
            id="AmTypeReturn"
            name="flight-route"
            value="typeReturn"
          />
          <label htmlFor="AmTypeReturn">Return</label>
          <input type="radio" id="AmMulti" name="flight-route" value="multi" />
          <label htmlFor="AmMulti">Multi-city</label>
          <input type="radio" id="AmNomad" name="flight-route" value="nomad" />
          <label htmlFor="AmNomad">Nomad</label>
        </div>
        <div className="form__input-group">
          <label htmlFor="AmFrom">From</label>
          <input
            onChange={this.fieldChange}
            type="text"
            id="AmFrom"
            name="from"
            list="list_airports"
          />
          <div className="form__input-group">
            <label htmlFor="AmTo">To</label>
            <input
              onChange={this.fieldChange}
              type="text"
              id="AmTo"
              name="to"
              list="list_airports"
            />
          </div>
          <datalist id="list_airports">
            {this.state.airports &&
              this.state.airports.map((el, idx) => {
                return (
                  <div key={idx}>
                    <option value={el.city + " (" + el.iata + ")"}>
                      {el.country}
                    </option>
                  </div>
                );
              })}
          </datalist>
        </div>
        <div className="form__input-group">
          <label htmlFor="AmDepart">Departure</label>
          <DateInput className="AmDepart" />
        </div>
        <div id="form__input-group">
          <label htmlFor="AmReturn">Return</label>
          <DateInput id="AmReturn" />
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
          <input type="number" id="AmAdults" name="adults" />
          <label htmlFor="AmChildren">Children</label>
          <input type="number" id="AmChildren" name="children" />
        </div>
        <button id="AmSubmit" type="submit">
          Find flights
        </button>
      </form>
    );
  }
}

export default AmForm;
