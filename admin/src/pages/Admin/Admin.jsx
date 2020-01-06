import React from "react";
import Data from "../../data/Data";
import UserPanel from "./components/UserPanel";
import "./Admin.css";

function Admin() {
  return (
    <div className="Admin">
      <div className="Admin__UserPanel">
        <UserPanel Users={Data.Users} />
      </div>
    </div>
  );
}

export default Admin;
