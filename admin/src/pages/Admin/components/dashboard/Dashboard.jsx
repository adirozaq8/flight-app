import React, { Component } from "react";
import Navbar from "../navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";
import UserPanel from "../userpanel/UserPanel";
import "./Dashboard.css";

class Dashboard extends Component {
  render() {
    return (
      <div className="Dashboard">
        <nav className="Dashboard__Navbar">
          <Navbar />
        </nav>
        <div className="Dashboard__Sidebar">
          <Sidebar />
        </div>
        <div className="Dashboard__Main-area">
          <div className="Main-area__top">
            <div className="Main-area__top-item">
              <div className="Dashboard__UserPanel">
                <UserPanel Users={this.props.Users} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
