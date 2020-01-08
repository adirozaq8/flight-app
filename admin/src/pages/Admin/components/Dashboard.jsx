import React, { Component } from "react";
import Sidebar from "./Sidebar";
import UserPanel from "./UserPanel";
import "./Dashboard.css";

class Dashboard extends Component {
  render() {
    return (
      <div className="Dashboard">
        <div className="Dashboard__Sidebar">
          <Sidebar />
        </div>
        <div className="Dashboard__UserPanel">
          <UserPanel Users={this.props.Users} />
        </div>
      </div>
    );
  }
}

export default Dashboard;
