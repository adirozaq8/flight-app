import React from "react";
import SuggestionList from "./SuggestionList";
import DateInput from "../components/dateinput/DateInput";
import { useSelector, useDispatch } from "react-redux";

// sorting priority based on input value at the beginning of string first
const sortInputFirst = (inp, obj) => {
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
const TravelFormInput = () => {
  const travelForm = useSelector((state) => state.travelForm);
  const dispatch = useDispatch();
  const updateTravelForm = () => {
    dispatch({ type: "UPDATE_TRAVELFORM", payload: travelForm });
  };
  const handleBlur = () => {
    travelForm.inputFocus = "none";
    travelForm.sugList.selected = 0;
    updateTravelForm(travelForm);
  };
  const handleChange = (e, idx, originDest) => {
    travelForm.cityInputs[idx][originDest].value = e.target.value;
    let allAirports = [];
    let airportsList = [];
    let exactMatch = 0;
    if (travelForm.airDb && travelForm.airDb.length > 0) {
      airportsList = travelForm.airDb.filter((airFilter) => {
        if (airFilter.city.toLowerCase() === e.target.value.toLowerCase()) {
          exactMatch++;
        }
        return (
          airFilter.city
            .toLowerCase()
            .includes(e.target.value.toLowerCase(), 0) && airFilter.iata !== ""
        );
      });
    }
    allAirports = airportsList.filter((airFilter) => {
      return airFilter.name.toLowerCase() === "all airports";
    });
    allAirports.map((city) => {
      let filterList = [];
      filterList = airportsList.filter((airFilter) => {
        return airFilter.city.toLowerCase() === city.city.toLowerCase();
      });
      filterList.map((fList) => {
        return airportsList.slice(
          airportsList.indexOf(fList, airportsList.indexOf(fList))
        );
      });
      return (city["airports"] = filterList);
    });
    if (airportsList.length > 0) {
      airportsList = sortInputFirst(e.target.value.toLowerCase(), airportsList);
    }
    exactMatch > travelForm.sugListLen
      ? (airportsList = airportsList.slice(0, exactMatch))
      : (airportsList = airportsList.slice(0, travelForm.sugListLen));
    travelForm.airports = airportsList;
    travelForm.inputFocus = idx + "-" + originDest;
    updateTravelForm();
  };
  const handleFocus = (e, idx, originDest) => {
    setTimeout(() => {
      travelForm.inputFocus = idx + "-" + originDest;
      updateTravelForm();
    }, 0);
  };
  const handleInput = (e, idx, originDest) => {
    travelForm.cityInputs[idx][originDest].ready = false;
    travelForm.cityInputs[idx][originDest].value = e.target.value;
    travelForm.cityInputs[idx][originDest].iata = "";
    travelForm.cityInputs[idx][originDest].airport = "";
    travelForm.cityInputs[idx][originDest].country = "";
    travelForm.inputFocus = idx + "-" + originDest;
    updateTravelForm();
  };
  const handleKeyDown = (e, idx, originDest) => {
    if (e.keyCode === 38 || e.keyCode === 40) {
      e.preventDefault();
      e.keyCode === 38 &&
        travelForm.sugList.selected > 0 &&
        travelForm.sugList.selected--;
      if (
        (e.keyCode === 40 &&
          travelForm.sugList.selected < travelForm.airports.length - 1) ||
        (e.keyCode === 38 && travelForm.sugList.selected === -1)
      )
        travelForm.sugList.selected++;
      updateTravelForm();
    }
    if (e.keyCode === 13) {
      travelForm.cityInputs[idx][originDest].ready = true;
      travelForm.cityInputs[idx][originDest].value = travelForm.sugList.city;
      travelForm.cityInputs[idx][originDest].iata = travelForm.sugList.iata;
      travelForm.cityInputs[idx][originDest].airport =
        travelForm.sugList.airport;
      travelForm.cityInputs[idx][originDest].country =
        travelForm.sugList.country;
    }
    updateTravelForm();
  };
  return (
    <div className="TravelForm__input-row-wrapper">
      {travelForm.cityInputs.map((input, idx) => (
        <div className="TravelForm__input-group-wrapper">
          {Object.keys(input).map((originDest) => {
            return (
              <div
                className="TravelForm__input-group"
                key={"travelSet-" + idx + originDest}
              >
                <div className="TravelForm__input-box">
                  <div className="TravelForm__input-wrapper">
                    <label
                      htmlFor={"TravelForm__input-" + idx + "-" + originDest}
                    >
                      {input[originDest].title}
                    </label>
                    <input
                      onBlur={() => {
                        handleBlur();
                      }}
                      onChange={(e) => handleChange(e, idx, originDest)}
                      onFocus={(e) => {
                        handleFocus(e, idx, originDest);
                        handleChange(e, idx, originDest);
                      }}
                      onInput={(e) => {
                        handleChange(e, idx, originDest);
                        handleInput(e, idx, originDest);
                      }}
                      onKeyDown={(e) => handleKeyDown(e, idx, originDest)}
                      autoComplete="off"
                      type="text"
                      className={
                        input[originDest].ready
                          ? "TravelForm__input TravelForm__input-ready"
                          : "TravelForm__input TravelForm__input-not-ready"
                      }
                      id={"TravelForm__input-" + idx + "-" + originDest}
                      name="from"
                      list="list_airports"
                      placeholder={input[originDest].placeholder}
                      value={input[originDest].value}
                    />
                    {input[originDest].iata && (
                      <span className="TravelForm__input-iata">
                        {input[originDest].iata}
                      </span>
                    )}
                    {input[originDest].airport && (
                      <span className="TravelForm__input-airport">
                        {input[originDest].airport}
                      </span>
                    )}
                    {input[originDest].country && (
                      <span className="TravelForm__input-country">
                        {input[originDest].country}
                      </span>
                    )}
                    {travelForm.inputFocus === idx + "-" + originDest && (
                      <div className="TravelForm__suggestion-list">
                        <SuggestionList />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
          <div className="TravelForm__control-group-wrapper TravelForm__date-group-wrapper">
            <div className="TravelForm__date-header">
              <label htmlFor="TravelDepart">Departure</label>
              <DateInput className="TravelForm__date" id="TravelDepart" />
            </div>
            {travelForm.travelType === 1 && (
              <div className="TravelForm__date-header">
                <label htmlFor="TravelReturn">Return</label>
                <DateInput className="TravelForm__date" id="TravelReturn" />
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TravelFormInput;
