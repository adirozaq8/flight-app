import React, { Component } from "react";
import "./Sidebar.css";

class Sidebar extends Component {
  render() {
    return (
      <div className="Sidebar">
        <div className="Sidebar__menu">
          <div className="Sidebar__menu__section">
            <h3>main</h3>
            <ul>
              <li>
                <p>Dashboard</p>
              </li>
              <li>
                <p>Users</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
