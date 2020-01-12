import React, { Component } from "react";
import SidebarMenu from "./SidebarMenu";
import "./Sidebar.css";

class Sidebar extends Component {
  render() {
    return (
      <div className="Sidebar">
        <SidebarMenu />
      </div>
    );
  }
}

export default Sidebar;
