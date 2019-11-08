import React, { Component, useEffect } from "react";
import axios from "axios";
import "./Skyload.css";

const Skyload = () => {
  useEffect(() => {
    const anchor = document.createElement("div");
    anchor.setAttribute("id", "SkySearch");
    anchor.setAttribute("data-skyscanner-widget", "FlightSearchWidget");
    document.getElementById("skySearch").appendChild(anchor);

    const script = document.createElement("script");
    script.setAttribute(
      "src",
      "https://widgets.skyscanner.net/widget-server/js/loader.js"
    );
    document.getElementById("skySearch").appendChild(script);
  }, []);
  return (
    <div>
      <div className="container skyContainer">
        <div id="skySearch"></div>
      </div>
    </div>
  );
};

export default Skyload;
