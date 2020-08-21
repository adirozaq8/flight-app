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
    this.amform = props.amform.amform;
    this.setAmForm = props.setAmformState;
  }
  // TODO this fetch should be considered moving up in the component chain
  componentDidMount() {
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
  // TODO move this logic to server side
  travelChange = (e) => {
    this.amform.travelType = e;
    this.setAmForm(this.amform);
  };
  fieldChange = (e, val) => {
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
  travelTypeConstructor(id, label) {
    return (
      <li key={"travelType-" + id} onClick={() => this.travelChange(id)}>
        {(this.amform.travelType === id && (
          <CheckCircle className="icon icon__active" />
        )) || <Circle className="icon" />}
        <span>{label}</span>
      </li>
    );
  }
  render() {
    return (
      <div className="form" id="AmForm">
        <div className="form__input-group">
          <ul className="form__radio">
            {["One way", "Return", "Multi-city", "Nomad"].map((el, idx) => {
              return this.travelTypeConstructor(idx + 1, el);
            })}
          </ul>
        </div>
        <div className="form__input-group">
          <label htmlFor="AmDepart">Departure</label>
          <DateInput className="AmDate" />
          <label htmlFor="AmReturn">Return</label>
          <DateInput className="AmDate" />
        </div>
        <div className="form__input-group">
          {
            //TODO add logic so that Suggestion list does not disappear on blur of the target input field, and add values to input
          }
          <div
            className="input-box"
            onFocus={(e) => {
              this.amform.fromToFocus = 1;
              this.fieldChange(e, 1);
              this.setAmForm(this.amform);
            }}
            onBlur={(e) => {
              this.amform.fromToFocus = 0;
              this.setAmForm(this.amform);
            }}
            onInput={(e) => this.fieldChange(e, 1)}
          >
            <label htmlFor="Amf__input-from">From</label>
            <input
              autoComplete="off"
              type="text"
              className="Amf__input-field"
              id="Amf__input-from"
              name="from"
              list="list_airports"
              placeholder="Origin"
            />
            <span>Iata code, Origin</span>
            {this.amform.fromToFocus === 1 && (
              <div className="input__suggestion-list">
                <SuggestionList />
              </div>
            )}
          </div>
          <div
            className="input-box"
            onFocus={(e) => {
              this.amform.fromToFocus = 2;
              this.fieldChange(e, 2);
              this.setAmForm(this.amform);
            }}
            onBlur={(e) => {
              this.amform.fromToFocus = 0;
              this.setAmForm(this.amform);
            }}
            onInput={(e) => this.fieldChange(e, 2)}
          >
            <label htmlFor="Amf__input-to">To</label>
            <input
              autoComplete="off"
              type="text"
              className="Amf__input-field"
              id="Amf__input-to"
              name="to"
              list="list_airports"
              placeholder="Destination"
            />
            <span>IATA code, Destination</span>
            {this.amform.fromToFocus === 2 && (
              <div className="input__suggestion-list">
                <SuggestionList />
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
