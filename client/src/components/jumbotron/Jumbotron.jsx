import React from "react";
import AmForm from "../amadeus/AmForm";
import Skyload from "../skyload/Skyload";
import "./Jumbotron.css";

function Jumbotron() {
  return (
    <div>
      <div className="AmForm-wrapper">
        <AmForm />
      </div>
      <div className="Skyload-wrapper">
        <Skyload />
      </div>
    </div>
  );
}

export default Jumbotron;
