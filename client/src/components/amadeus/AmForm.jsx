import React, { Component } from "react";
import { connect } from "react-redux";
import { setAmformState } from "../../redux/amform/amform.actions";
import SuggestionList from "./SuggestionList";
import DateInput from "../dateinput/DateInput";
import CheckCircle from "@material-ui/icons/CheckCircle";
import Circle from "@material-ui/icons/PanoramaFishEyeOutlined";

import "./AmForm.css";

class AmForm extends Component {
  constructor(props) {
    super(props);
    this.amform = props.amform;
    this.setAmForm = props.setAmformState;
  }
  // TODO This fetch should be considered moving up in the component chain
  componentDidMount() {
    console.log(this.amform);
    fetch("http://localhost:5000/api/amform/getairports", {
      method: "POST",
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.amform.airDb = data.reqAirport;
        this.setAmForm(this.amform);
      });
  }
  setAmForm(el) {
    this.setAmformState({
      type: "SET_AMFORM_STATE",
      payload: el,
    });
  }
  // inputlist option list changes based on input
  // MOVE THIS LOGIC TO SERVER
  travelChange = (e) => {
    this.amform.travelType = e;
    this.setAmForm(this.amform);
  };
  fieldChange = (e, val) => {
    //this.amform.fromToFocus = 0;
    this.setAmForm(this.amform);
    let allAirports = [];
    let dataListOpt = [];
    let exact = 0;
    if (this.amform.airDb.length > 0) {
      dataListOpt = this.amform.airDb.filter((airFilter) => {
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
    allAirports = dataListOpt.filter((airFilter) => {
      return airFilter.name.toLowerCase() === "all airports";
    });
    allAirports.map((city) => {
      let filterList = [];
      filterList = dataListOpt.filter((airFilter) => {
        return airFilter.city.toLowerCase() === city.city.toLowerCase();
      });
      filterList.map((fList) => {
        return dataListOpt.slice(
          dataListOpt.indexOf(fList, dataListOpt.indexOf(fList))
        );
      });
      return (city["airports"] = filterList);
    });
    if (dataListOpt.length > 0) {
      dataListOpt = this.sortInputFirst(
        e.target.value.toLowerCase(),
        dataListOpt
      );
    }
    exact > this.amform.inpOptLen
      ? (dataListOpt = dataListOpt.slice(0, exact))
      : (dataListOpt = dataListOpt.slice(0, this.amform.inpOptLen));
    this.amform.airports = dataListOpt;
    this.amform.fromToFocus = val;
    this.setAmForm(this.amform);
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
  inputBlur = (e) => {
    console.log(e.target);
  };
  render() {
    return (
      <div className="form" id="AmForm">
        <div className="form__input-group">
          <ul className="form__radio">
            <li onClick={() => this.travelChange(1)}>
              {(this.amform.travelType === 1 && (
                <CheckCircle
                  viewBox="0 0 24 24"
                  className="icon icon__active"
                />
              )) || <Circle className="icon" />}
              <span>One way</span>
            </li>
            <li onClick={() => this.travelChange(2)}>
              {(this.amform.travelType === 2 && (
                <CheckCircle className="icon icon__active" />
              )) || <Circle className="icon" />}
              <span>Return</span>
            </li>
            <li onClick={() => this.travelChange(3)}>
              {(this.amform.travelType === 3 && (
                <CheckCircle className="icon icon__active" />
              )) || <Circle className="icon" />}
              <span>Multi-city</span>
            </li>
            <li onClick={() => this.travelChange(4)}>
              {(this.amform.travelType === 4 && (
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
              onFocus={() => {
                this.amform.fromToFocus = 1;
                this.setAmForm(this.amform);
              }}
              onBlur={() => {
                this.amform.fromToFocus = 0;
                this.amform.airports = [];
                this.setAmForm(this.amform);
              }}
              onInput={(e) => this.fieldChange(e, 1)}
              autoComplete="off"
              type="text"
              id="Amf__input-from"
              name="from"
              list="list_airports"
              placeholder="Origin"
            />
            <span>Iata code, Origin</span>
            {this.amform.fromToFocus === 1 && (
              <div className="input__suggestion-list">
                <SuggestionList
                  field={this.amform.fromToFocus}
                  cities={this.amform.airports || []}
                />
              </div>
            )}
          </div>
          <div className="input-box">
            <label htmlFor="Amf__input-to">To</label>
            <input
              onFocus={() => {
                this.amform.fromToFocus = 2;
                this.setAmForm(this.amform);
              }}
              onBlur={() => {
                this.amform.fromToFocus = 0;
                this.amform.airports = [];
                this.setAmForm(this.amform);
              }}
              onInput={(e) => this.fieldChange(e, 2)}
              autoComplete="off"
              type="text"
              id="Amf__input-to"
              name="to"
              list="list_airports"
              placeholder="Destination"
            />
            <span>IATA code, Destination</span>
            {this.amform.fromToFocus === 2 && (
              <div className="input__suggestion-list">
                <SuggestionList
                  field={this.amform.fromToFocus}
                  cities={this.amform.airports || []}
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
const mapStateToProps = (state) => ({
  amform: state.amform,
});

export default connect(mapStateToProps, { setAmformState })(AmForm);
