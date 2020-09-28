import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import FlightTakeoff from "@material-ui/icons/FlightTakeoff";
import FlightLand from "@material-ui/icons/FlightLand";
import "./SuggestionList.css";

const SuggestionList = () => {
  const travelForm = useSelector((state) => state.travelForm);
  const dispatch = useDispatch();
  const updateTravelForm = () => {
    dispatch({ type: "UPDATE_TRAVELFORM", payload: travelForm });
  };
  useEffect(() => {
    if (
      travelForm.airports &&
      travelForm.airports.length > 0 &&
      document.getElementsByClassName("SuggestionList__city-block--active")[0]
    ) {
      const targetCity = document.getElementsByClassName(
        "SuggestionList__city-block--active"
      )[0];
      targetCity.scrollIntoView({
        behavior: "auto",
        block: "nearest",
        inline: "nearest",
      });
      travelForm.sugList.city = targetCity.dataset.city;
      travelForm.sugList.iata = targetCity.dataset.iata;
      travelForm.sugList.airport = targetCity.dataset.airport;
      travelForm.sugList.country = targetCity.dataset.country;
    }
  });
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
  const handleMouseDown = () => {
    const values = [
      true,
      travelForm.sugList.city,
      travelForm.sugList.iata,
      travelForm.sugList.airport,
      travelForm.sugList.country,
    ];
    const inputFocus = travelForm.inputFocus.split("-");
    if (
      travelForm.cityInputs.length > Number(inputFocus[0]) + 1 &&
      inputFocus[1] === "to"
    ) {
      inputIterate(
        undefined,
        undefined,
        Number(inputFocus[0]) + 1,
        undefined,
        values
      );
    }
    if (
      travelForm.cityInputs.length > 0 &&
      Number(inputFocus[0]) > 0 &&
      inputFocus[1] === "from"
    ) {
      inputIterate(
        undefined,
        undefined,
        Number(inputFocus[0]) - 1,
        "to",
        values
      );
    }
    inputIterate(
      undefined,
      undefined,
      Number(inputFocus[0]),
      inputFocus[1],
      values
    );
    updateTravelForm();
  };
  const handleMouseEnter = (e) => {
    if (e.currentTarget.dataset.idx !== undefined) {
      travelForm.sugList.selected = Number(e.currentTarget.dataset.idx);
      updateTravelForm();
    }
  };
  return (
    <>
      {travelForm.airports && travelForm.airports.length > 0 && (
        <div className="SuggestionList" id="SuggestionList">
          <div id="sugList-suggest">
            <div>
              {travelForm.airports.map((city, idx) => (
                <div key={city._id}>
                  <div
                    className={
                      idx === travelForm.sugList.selected
                        ? "SuggestionList__city-block SuggestionList__city-block--active"
                        : "SuggestionList__city-block"
                    }
                    data-city={city.city}
                    data-airport={city.name}
                    data-iata={city.iata}
                    data-country={city.country}
                    data-idx={idx}
                    onMouseDown={(e) => handleMouseDown(e)}
                    onMouseEnter={handleMouseEnter}
                  >
                    <div>
                      <div className="SuggestionList__city-title">
                        <span>{city.city}</span>
                      </div>
                      <div className="SuggestionList__city-subtitle">
                        <span>{city.iata},</span>&nbsp;
                        <span>{city.name},</span>&nbsp;
                        <span>{city.country}</span>
                      </div>
                    </div>
                    {travelForm.inputFocus === 1 && (
                      <FlightTakeoff className="SuggestionList__from-to-icon" />
                    )}
                    {travelForm.inputFocus === 2 && (
                      <FlightLand className="SuggestionList__from-to-icon" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SuggestionList;
