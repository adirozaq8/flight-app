import React, { Component } from "react";
import Sidebar from "../sidebar/Sidebar";
import UserPanel from "../userpanel/UserPanel";
import "./Dashboard.css";

class Dashboard extends Component {
  render() {
    return (
      <div className="Dashboard">
        <aside className="Dashboard__Sidebar">
          <Sidebar />
        </aside>
        <div className="Dashboard__UserPanel">
          <UserPanel Users={this.props.Users} />
        </div>
      </div>
    );
  }
}

export default Dashboard;
