import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Skyload from "../skyload/Skyload";
import "./Jumbotron.css";

function Jumbotron() {
  return (
    <div>
      <div className="Skyload-wrapper">
        <Skyload />
      </div>
    </div>
  );
}

export default Jumbotron;
