import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import TravelTypes from "./components/TravelTypes";
import TravelFormInput from "./components/TravelFormInput";
import AddFlight from "./components/AddFlight";

import "./TravelForm.css";

const TravelForm = () => {
  const travelForm = useSelector((state) => state.travelForm);
  const dispatch = useDispatch();
  const updateTravelForm = () => {
    dispatch({ type: "UPDATE_TRAVELFORM", payload: travelForm });
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
          updateTravelForm();
        });
    }
  });
  useEffect(() => {
    if (travelForm.travelType === 2 && travelForm.cityInputs.length < 2) {
      travelForm.cityInputs.push(travelForm.cityInputTemplate);
      updateTravelForm();
    }
    if (travelForm.travelType !== 2 && travelForm.cityInputs.length > 1) {
      travelForm.cityInputs.pop();
      updateTravelForm();
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
      <div
        className={
          travelForm.travelType === 2
            ? "TravelForm__control-group TravelForm--margin-bottom-none"
            : "TravelForm__control-group"
        }
      >
        <TravelFormInput />
      </div>
      {travelForm.travelType === 2 && <AddFlight />}
      <div className="TravelForm__control-group">
        <div className="TravelForm__secondary">
          <div className="TravelForm__secondary-item-wrapper">
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
          </div>
          <div className="TravelForm__secondary-item-wrapper">
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
          </div>
          <div className="TravelForm__secondary-item-wrapper">
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
