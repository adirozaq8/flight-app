import React, { Component } from "react";
import SidebarMenu from "./SidebarMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTachometerAlt,
  faAngleLeft,
  faCircle,
  faTh,
  faCopy,
  faChartPie,
  faDatabase,
  faTree,
  faEdit,
  faUser,
  faUsers,
  faTable,
  faImage,
  faCalendarAlt,
} from "@fortawesome/free-solid-svg-icons";
import "./Sidebar.css";

class Sidebar extends Component {
  render() {
    return (
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
        <a href="index3.html" className="brand-link">
          <img
            src="dist/img/AdminLTELogo.png"
            alt="AdminLTE Logo"
            className="brand-image img-circle elevation-3"
          />
          <span className="brand-text font-weight-light">AdminLTE 3</span>
        </a>

        <div className="sidebar">
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
              <img
                src="dist/img/user2-160x160.jpg"
                className="img-circle elevation-2"
                alt="User Image"
              />
            </div>
            <div className="info">
              <a href="#" className="d-block">
                Alexander Pierce
              </a>
            </div>
          </div>
          <nav className="mt-2">
            <ul
              className="nav nav-pills nav-sidebar flex-column"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
              <li className="nav-item has-treeview menu-open">
                <a href="#" className="nav-link active">
                  <FontAwesomeIcon icon={faTachometerAlt} />
                  <p>
                    Dashboard
                    <FontAwesomeIcon icon={faAngleLeft} />
                  </p>
                </a>
              </li>
              <li className="nav-item">
                <a href="pages/layout/top-nav.html" className="nav-link">
                  <FontAwesomeIcon icon={faUser} />
                  <p>Users</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="pages/layout/boxed.html" className="nav-link">
                  <FontAwesomeIcon icon={faDatabase} />
                  <p>Database</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="pages/widgets.html" className="nav-link">
                  <FontAwesomeIcon icon={faTh} />
                  <p>
                    Widgets
                    <span className="right badge badge-danger">New</span>
                  </p>
                </a>
              </li>
              <li className="nav-item has-treeview">
                <a href="#" className="nav-link">
                  <FontAwesomeIcon icon={faCopy} />
                  <p>
                    Layout Options
                    <FontAwesomeIcon icon={faAngleLeft} />
                    <span className="badge badge-info right">6</span>
                  </p>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
    );
  }
}

export default Sidebar;
