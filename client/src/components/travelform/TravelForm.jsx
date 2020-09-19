import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import TravelTypes from "./components/TravelTypes";
import TravelFormInput from "./components/TravelFormInput";
import DateInput from "./components/dateinput/DateInput";

import "./TravelForm.css";

const TravelForm = () => {
  const travelForm = useSelector((state) => state.travelForm);
  const dispatch = useDispatch();
  const updateTravelForm = (state) => {
    dispatch({ type: "UPDATE_TRAVELFORM", payload: state });
  };
  useEffect(() => {
    if (travelForm.initialFetch === false) {
      fetch("http://localhost:5000/api/amform/getairports", {
        method: "POST",
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          travelForm.airDb = data.reqAirport;
          travelForm.initialFetch = true;
          updateTravelForm(travelForm);
        });
    }
  });
  return (
    <div
      className="TravelForm TravelForm--colors TravelForm--vars"
      id="TravelForm"
    >
      <div className="TravelForm__control-group">
        <ul className="TravelForm__radio-button">{<TravelTypes />}</ul>
      </div>
      <div className="TravelForm__control-group">
        <div className="TravelForm__input-group-wrapper">
          <TravelFormInput />
        </div>
        <div className="TravelForm__control-group-wrapper TravelForm__date-group-wrapper">
          <div className="TravelForm__date-header">
            <label htmlFor="TravelDepart">Departure</label>
            <DateInput className="TravelDate" id="TravelDepart" />
          </div>
          {travelForm.travelType === 1 && (
            <div className="TravelForm__date-header">
              <label htmlFor="TravelReturn">Return</label>
              <DateInput className="TravelDate" id="TravelReturn" />
            </div>
          )}
        </div>
      </div>
      <div className="TravelForm__control-group">
        <div className="TravelForm__secondary">
          <label htmlFor="TravelClass">Cabin class</label>
          <select
            className="TravelForm__secondary-item TravelForm__select"
            id="TravelForm__Class"
          >
            <option value="economy">Economy</option>
            <option value="premium">Premium economy</option>
            <option value="business">Business</option>
            <option value="first">First class</option>
          </select>
          <label htmlFor="TravelForm__Adults">Adults</label>
          <input
            className="TravelForm__secondary-item TravelForm__input-number"
            type="number"
            min="1"
            max="9"
            id="TravelForm__Adults"
            name="adults"
            defaultValue="1"
          />
          <label htmlFor="TravelForm__Children">Children</label>
          <input
            className="TravelForm__secondary-item TravelForm__input-number"
            min="0"
            max="9"
            type="number"
            id="TravelForm__Children"
            name="children"
          />
        </div>
      </div>
      <div className="TravelForm__control-group">
        <button id="TravelForm__submit" type="button">
          Find flights
        </button>
      </div>
    </div>
  );
};

export default TravelForm;
