import React from "react";
import SuggestionList from "./SuggestionList";
import DateInput from "../components/dateinput/DateInput";
import RemoveFlight from "./RemoveFlight";
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
    fetch(process.env.REACT_APP_FETCH_DOMAIN + "/api/getairports", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        searchKey: e.target.value,
        start: 0,
        length: travelForm.sugListLen,
        sorted: false,
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        travelForm.airDb = data.reqAirport;
        travelForm.airports = travelForm.airDb;
        updateTravelForm();
      });
  };
  const handleFocus = (e, idx, originDest) => {
    setTimeout(() => {
      travelForm.inputFocus = idx + "-" + originDest;
      updateTravelForm();
    }, 0);
  };
  const inputIterate = (
    template = travelForm.templates.iterables,
    element = travelForm.cityInputs,
    indexIn = 0,
    fromto = "from",
    values = []
  ) => {
    template.map((templateValue, index) => {
      return (element[indexIn][fromto][templateValue] = values[index]);
    });
  };
  const handleInput = (e, idx, originDest) => {
    const values = [false, e.target.value, "", "", ""];
    inputIterate(undefined, undefined, idx, originDest, values);
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
      const values = [
        true,
        travelForm.sugList.city,
        travelForm.sugList.iata,
        travelForm.sugList.airport,
        travelForm.sugList.country,
      ];
      if (travelForm.cityInputs.length > idx + 1 && originDest === "to") {
        inputIterate(undefined, undefined, idx + 1, undefined, values);
      }
      if (
        travelForm.cityInputs.length > 0 &&
        idx > 0 &&
        originDest === "from"
      ) {
        inputIterate(undefined, undefined, idx - 1, "to", values);
      }
      inputIterate(undefined, undefined, idx, originDest, values);
    }
    updateTravelForm();
  };
  return travelForm.cityInputs.map((input, idx) => (
    <div
      key={"travelSetWrap-" + idx}
      className="TravelForm__input-group-wrapper TravelForm--ease-in-opacity"
    >
      {" "}
      {Object.keys(input).map((originDest) => {
        return (
          <div
            className="TravelForm__input-group"
            key={"travelSet-" + idx + originDest}
          >
            <div className="TravelForm__input-box">
              <div className="TravelForm__input-wrapper">
                <label htmlFor={"TravelForm__input-" + idx + "-" + originDest}>
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
          <label>Departure</label>
          <DateInput className="TravelForm__date" />
        </div>
        {travelForm.travelType === 1 && (
          <div className="TravelForm__date-header">
            <label>Return</label>
            <DateInput className="TravelForm__date" />
          </div>
        )}
      </div>
      {travelForm.travelType === 2 && idx > 1 && <RemoveFlight />}
    </div>
  ));
};

export default TravelFormInput;
