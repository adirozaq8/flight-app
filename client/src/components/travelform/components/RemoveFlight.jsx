import React from "react";
import { useSelector, useDispatch } from "react-redux";
import RemoveCircle from "@material-ui/icons/RemoveCircle";

const RemoveFlight = () => {
  const travelForm = useSelector((state) => state.travelForm);
  const dispatch = useDispatch();
  const updateTravelForm = () => {
    dispatch({ type: "UPDATE_TRAVELFORM", payload: travelForm });
  };
  const handleClick = (idx) => {
    travelForm.cityInputs.pop();
    updateTravelForm();
  };

  return (
    <div className="TravelForm__remove-flight" onClick={handleClick}>
      <div className="">
        {<RemoveCircle className="TravelForm__icon-remove" />}
      </div>
    </div>
  );
};

export default RemoveFlight;
