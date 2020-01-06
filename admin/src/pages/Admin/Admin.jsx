import React from "react";
import Data from "../../data/Data";
import UserPanel from "./components/UserPanel";

function Admin() {
  return (
    <div>
      <UserPanel Users={Data.Users} />
    </div>
  );
}

export default Admin;
