import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import TravelTypes from "./components/TravelTypes";
import TravelFormInput from "./components/TravelFormInput";
import AddFlight from "./components/AddFlight";
import Flight from "@material-ui/icons/Flight";
import { Store, set, get } from "../indexdb";

import "./TravelForm.css";
const TravelForm = () => {
  const travelForm = useSelector((state) => state.travelForm);
  const dispatch = useDispatch();
  const updateTravelForm = () => {
    dispatch({ type: "UPDATE_TRAVELFORM", payload: travelForm });
  };
  const idbStore = new Store("flight_app", "airports");
  travelForm.cityInputs.length === 0 &&
    travelForm.cityInputs.push(
      JSON.parse(JSON.stringify({ ...travelForm.templates.cityInputs }))
    );
  useEffect(() => {
    const initialFetch = async () => {
      let indexFetch = await get(
        JSON.stringify({
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            searchKey: "",
            start: 0,
            length: travelForm.sugListLen,
            sorted: false,
          }),
        }),
        idbStore
      );
      if (indexFetch) {
        travelForm.airDb = indexFetch;
        travelForm.initialFetch = true;
        updateTravelForm();
      } else {
        fetch(process.env.REACT_APP_FETCH_DOMAIN + "/api/getairports", {
          method: "POST",
        })
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            travelForm.airDb = data.reqAirport;
            travelForm.initialFetch = true;
            set(
              JSON.stringify({
                method: "POST",
              }),
              data.reqAirport,
              idbStore
            );
            updateTravelForm();
          });
      }
    };
    if (travelForm.initialFetch === false) initialFetch();
  });
  useEffect(() => {
    if (travelForm.travelType === 2 && travelForm.cityInputs.length < 2) {
      travelForm.cityInputs.push(
        JSON.parse(JSON.stringify({ ...travelForm.templates.cityInputs }))
      );
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
      <div className="TravelForm__control-group TravelForm--ease-in-opacity">
        <ul className="TravelForm__radio-button">{<TravelTypes />}</ul>
      </div>
      <div
        className={
          travelForm.travelType === 2
            ? "TravelForm__control-group TravelForm--ease-in-opacity TravelForm--margin-bottom-none"
            : "TravelForm__control-group TravelForm--ease-in-opacity"
        }
      >
        <TravelFormInput />
      </div>

      {travelForm.travelType === 2 && (
        <div className="TravelForm__control-group TravelForm--ease-in-opacity">
          <AddFlight />
        </div>
      )}
      <div className="TravelForm__control-group TravelForm--ease-in-opacity">
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
          <Flight className="TravelForm__icon-flight" />
          <span>Find flights</span>
        </button>
      </div>
    </div>
  );
};

export default TravelForm;
