import React from "react";
import SuggestionList from "./SuggestionList";
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
  const updateTravelForm = (state) => {
    dispatch({ type: "UPDATE_TRAVELFORM", payload: state });
  };
  const handleBlur = () => {
    travelForm.inputFocus = "none";
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
    updateTravelForm(travelForm);
  };
  const handleFocus = (e, idx, originDest) => {
    setTimeout(() => {
      travelForm.inputFocus = idx + "-" + originDest;
      updateTravelForm(travelForm);
    }, 0);
  };
  const handleInput = (e, idx, originDest) => {
    travelForm.cityInputs[idx][originDest].ready = false;
    travelForm.cityInputs[idx][originDest].value = e.target.value;
    travelForm.cityInputs[idx][originDest].iata = "";
    travelForm.cityInputs[idx][originDest].airport = "";
    travelForm.cityInputs[idx][originDest].country = "";
    travelForm.inputFocus = idx + "-" + originDest;
    updateTravelForm(travelForm);
  };
  const handleKeyDown = (e) => {
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
      updateTravelForm(travelForm);
    }
  };
  return travelForm.cityInputs.map((input, idx) => {
    return Object.keys(input).map((originDest) => {
      return (
        <div
          className="TravelForm__input-group"
          key={"travelSet-" + idx + originDest}
        >
          <div className="TravelForm__input-box">
            <div className="TravelForm__input-box-inner">
              <div
                className={
                  travelForm.inputFocus === idx + "-" + originDest
                    ? "TravelForm__input-wrapper TravelForm--bottom-border-radius-none"
                    : "TravelForm__input-wrapper"
                }
              >
                <div className="TravelForm__input-wrapper-inner">
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
                    onKeyDown={(e) => handleKeyDown(e)}
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
          </div>
        </div>
      );
    });
  });
};

export default TravelFormInput;
