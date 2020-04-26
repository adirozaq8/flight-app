import React, { Component } from "react";
import "./AmForm.css";

class AmForm extends Component {
  constructor() {
    super();
    this.state = {
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
        this.setState({ airports: data });
      });
  }
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
          <input type="text" id="AmFrom" name="from" list="list_airports" />
          <datalist id="list_airports">
            {this.state.airports &&
              this.state.airports.reqAirport.map((el, idx) => {
                return (
                  <option key={idx}>
                    {el.city}
                    {el.iata}
                    {el.country}
                  </option>
                );
              })}
          </datalist>
        </div>
        <div className="form__input-group">
          <label htmlFor="AmTo">To</label>
          <input type="text" id="AmTo" name="to" list="list_airports" />
        </div>
        <div className="form__input-group">
          <label htmlFor="AmDepart">Departure</label>
          <input type="text" id="AmDepart" name="depart" />
        </div>
        <div className="form__input-group">
          <label htmlFor="AmReturn">Return</label>
          <input type="text" id="AmReturn" name="return" />
        </div>
        <div className="form__input-group">
          <label htmlFor="AmClass">Cabin class</label>
          <select id="AmClass">
            <option value="volvo">Economy</option>
            <option value="volvo">Premium economy</option>
            <option value="volvo">Business</option>
            <option value="volvo">First class</option>
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
