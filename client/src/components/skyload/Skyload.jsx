import React, { useEffect } from "react";
import "./Skyload.css";

const Skyload = () => {
  useEffect(() => {
    const anchor = document.createElement("div");
    anchor.setAttribute("id", "skySearch");
    anchor.setAttribute("data-skyscanner-widget", "FlightSearchWidget");
    document.getElementById("skyContainer").appendChild(anchor);

    const script = document.createElement("script");
    script.setAttribute(
      "src",
      "https://widgets.skyscanner.net/widget-server/js/loader.js"
    );
    document.getElementById("skyContainer").appendChild(script);
  }, []);
  return (
    <div>
      <div className="container skyContainer" id="skyContainer"></div>
    </div>
  );
};

export default Skyload;
