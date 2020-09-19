import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CheckCircle from "@material-ui/icons/CheckCircle";
import Circle from "@material-ui/icons/PanoramaFishEyeOutlined";

const TravelTypes = () => {
  const travelForm = useSelector((state) => state.travelForm);
  const dispatch = useDispatch();
  const updateTravelForm = (state) => {
    dispatch({ type: "UPDATE_TRAVELFORM", payload: state });
  };
  const handleClick = (idx) => {
    travelForm.travelType = idx;
    updateTravelForm(travelForm);
  };
  return travelForm.travelTypes.map((el, idx) => {
    return (
      <li key={"travelType-" + idx} onClick={() => handleClick(idx)}>
        {(travelForm.travelType === idx && (
          <CheckCircle className="TravelForm__icon TravelForm__icon--active" />
        )) || <Circle className="TravelForm__icon" />}
        <span>{el}</span>
      </li>
    );
  });
};

export default TravelTypes;
