import React from "react";
import { useSelector, useDispatch } from "react-redux";
import AddCircle from "@material-ui/icons/AddCircle";

const AddFlight = () => {
  const travelForm = useSelector((state) => state.travelForm);
  const dispatch = useDispatch();
  const updateTravelForm = () => {
    dispatch({ type: "UPDATE_TRAVELFORM", payload: travelForm });
  };
  const handleClick = () => {
    travelForm.cityInputs.push({
      from: {
        title: "From",
        placeholder: "Origin",
        value: "",
        ready: false,
        iata: "",
        airport: "",
        country: "",
      },
      to: {
        title: "To",
        placeholder: "Destination",
        value: "",
        ready: false,
        iata: "",
        airport: "",
        country: "",
      },
    });
    updateTravelForm();
  };

  return (
    <div className="TravelForm__add-flight" onClick={handleClick}>
      <AddCircle className="TravelForm__icon-add" />
      <span>Add flight</span>
    </div>
  );
};

export default AddFlight;
