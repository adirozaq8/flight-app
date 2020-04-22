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
  faTree,
  faEdit,
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
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a href="./index.html" className="nav-link active">
                      <FontAwesomeIcon icon={faCircle} />
                      <p>Dashboard v1</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="./index2.html" className="nav-link">
                      <FontAwesomeIcon icon={faCircle} />
                      <p>Dashboard v2</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="./index3.html" className="nav-link">
                      <FontAwesomeIcon icon={faCircle} />
                      <p>Dashboard v3</p>
                    </a>
                  </li>
                </ul>
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
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a href="pages/layout/top-nav.html" className="nav-link">
                      <FontAwesomeIcon icon={faCircle} />
                      <p>Top Navigation</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/layout/boxed.html" className="nav-link">
                      <FontAwesomeIcon icon={faCircle} />
                      <p>Boxed</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="pages/layout/fixed-sidebar.html"
                      className="nav-link"
                    >
                      <FontAwesomeIcon icon={faCircle} />
                      <p>Fixed Sidebar</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="pages/layout/fixed-topnav.html"
                      className="nav-link"
                    >
                      <FontAwesomeIcon icon={faCircle} />
                      <p>Fixed Navbar</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="pages/layout/fixed-footer.html"
                      className="nav-link"
                    >
                      <FontAwesomeIcon icon={faCircle} />
                      <p>Fixed Footer</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="pages/layout/collapsed-sidebar.html"
                      className="nav-link"
                    >
                      <FontAwesomeIcon icon={faCircle} />
                      <p>Collapsed Sidebar</p>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item has-treeview">
                <a href="#" className="nav-link">
                  <FontAwesomeIcon icon={faChartPie} />
                  <p>
                    Charts
                    <FontAwesomeIcon icon={faAngleLeft} />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a href="pages/charts/chartjs.html" className="nav-link">
                      <FontAwesomeIcon icon={faCircle} />
                      <p>ChartJS</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/charts/flot.html" className="nav-link">
                      <FontAwesomeIcon icon={faCircle} />
                      <p>Flot</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/charts/inline.html" className="nav-link">
                      <FontAwesomeIcon icon={faCircle} />
                      <p>Inline</p>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item has-treeview">
                <a href="#" className="nav-link">
                  <FontAwesomeIcon icon={faTree} />
                  <p>
                    UI Elements
                    <FontAwesomeIcon icon={faAngleLeft} />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a href="pages/UI/general.html" className="nav-link">
                      <FontAwesomeIcon icon={faCircle} />
                      <p>General</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/UI/icons.html" className="nav-link">
                      <FontAwesomeIcon icon={faCircle} />
                      <p>Icons</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/UI/buttons.html" className="nav-link">
                      <FontAwesomeIcon icon={faCircle} />
                      <p>Buttons</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/UI/sliders.html" className="nav-link">
                      <FontAwesomeIcon icon={faCircle} />
                      <p>Sliders</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/UI/modals.html" className="nav-link">
                      <FontAwesomeIcon icon={faCircle} />
                      <p>Modals &amp; Alerts</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/UI/navbar.html" className="nav-link">
                      <FontAwesomeIcon icon={faCircle} />
                      <p>Navbar &amp; Tabs</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/UI/timeline.html" className="nav-link">
                      <FontAwesomeIcon icon={faCircle} />
                      <p>Timeline</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/UI/ribbons.html" className="nav-link">
                      <FontAwesomeIcon icon={faCircle} />
                      <p>Ribbons</p>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item has-treeview">
                <a href="#" className="nav-link">
                  <FontAwesomeIcon icon={faEdit} />
                  <p>
                    Forms
                    <FontAwesomeIcon icon={faAngleLeft} />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a href="pages/forms/general.html" className="nav-link">
                      <FontAwesomeIcon icon={faCircle} />
                      <p>General Elements</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/forms/advanced.html" className="nav-link">
                      <FontAwesomeIcon icon={faCircle} />
                      <p>Advanced Elements</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/forms/editors.html" className="nav-link">
                      <FontAwesomeIcon icon={faCircle} />
                      <p>Editors</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/forms/validation.html" className="nav-link">
                      <FontAwesomeIcon icon={faCircle} />
                      <p>Validation</p>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item has-treeview">
                <a href="#" className="nav-link">
                  <FontAwesomeIcon icon={faTable} />
                  <p>
                    Tables
                    <FontAwesomeIcon icon={faAngleLeft} />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a href="pages/tables/simple.html" className="nav-link">
                      <FontAwesomeIcon icon={faCircle} />
                      <p>Simple Tables</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/tables/data.html" className="nav-link">
                      <FontAwesomeIcon icon={faCircle} />
                      <p>DataTables</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/tables/jsgrid.html" className="nav-link">
                      <FontAwesomeIcon icon={faCircle} />
                      <p>jsGrid</p>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-header">EXAMPLES</li>
              <li className="nav-item">
                <a href="pages/calendar.html" className="nav-link">
                  <FontAwesomeIcon icon={faCalendarAlt} />
                  <p>
                    Calendar
                    <span className="badge badge-info right">2</span>
                  </p>
                </a>
              </li>
              <li className="nav-item">
                <a href="pages/gallery.html" className="nav-link">
                  <i className="nav-icon far fa-image"></i>
                  <p>Gallery</p>
                </a>
              </li>
              <li className="nav-item has-treeview">
                <a href="#" className="nav-link">
                  <i className="nav-icon far fa-envelope"></i>
                  <p>
                    Mailbox
                    <i className="fas fa-angle-left right"></i>
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a href="pages/mailbox/mailbox.html" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Inbox</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/mailbox/compose.html" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Compose</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/mailbox/read-mail.html" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Read</p>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item has-treeview">
                <a href="#" className="nav-link">
                  <i className="nav-icon fas fa-book"></i>
                  <p>
                    Pages
                    <i className="fas fa-angle-left right"></i>
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a href="pages/examples/invoice.html" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Invoice</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/examples/profile.html" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Profile</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="pages/examples/e_commerce.html"
                      className="nav-link"
                    >
                      <i className="far fa-circle nav-icon"></i>
                      <p>E-commerce</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/examples/projects.html" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Projects</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="pages/examples/project_add.html"
                      className="nav-link"
                    >
                      <i className="far fa-circle nav-icon"></i>
                      <p>Project Add</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="pages/examples/project_edit.html"
                      className="nav-link"
                    >
                      <i className="far fa-circle nav-icon"></i>
                      <p>Project Edit</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="pages/examples/project_detail.html"
                      className="nav-link"
                    >
                      <i className="far fa-circle nav-icon"></i>
                      <p>Project Detail</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/examples/contacts.html" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Contacts</p>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item has-treeview">
                <a href="#" className="nav-link">
                  <i className="nav-icon far fa-plus-square"></i>
                  <p>
                    Extras
                    <i className="fas fa-angle-left right"></i>
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a href="pages/examples/login.html" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Login</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/examples/register.html" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Register</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="pages/examples/forgot-password.html"
                      className="nav-link"
                    >
                      <i className="far fa-circle nav-icon"></i>
                      <p>Forgot Password</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="pages/examples/recover-password.html"
                      className="nav-link"
                    >
                      <i className="far fa-circle nav-icon"></i>
                      <p>Recover Password</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="pages/examples/lockscreen.html"
                      className="nav-link"
                    >
                      <i className="far fa-circle nav-icon"></i>
                      <p>Lockscreen</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="pages/examples/legacy-user-menu.html"
                      className="nav-link"
                    >
                      <i className="far fa-circle nav-icon"></i>
                      <p>Legacy User Menu</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="pages/examples/language-menu.html"
                      className="nav-link"
                    >
                      <i className="far fa-circle nav-icon"></i>
                      <p>Language Menu</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/examples/404.html" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Error 404</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/examples/500.html" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Error 500</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/examples/pace.html" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Pace</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/examples/blank.html" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Blank Page</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="starter.html" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Starter Page</p>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-header">MISCELLANEOUS</li>
              <li className="nav-item">
                <a href="https://adminlte.io/docs/3.0" className="nav-link">
                  <i className="nav-icon fas fa-file"></i>
                  <p>Documentation</p>
                </a>
              </li>
              <li className="nav-header">MULTI LEVEL EXAMPLE</li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="fas fa-circle nav-icon"></i>
                  <p>Level 1</p>
                </a>
              </li>
              <li className="nav-item has-treeview">
                <a href="#" className="nav-link">
                  <i className="nav-icon fas fa-circle"></i>
                  <p>
                    Level 1<i className="right fas fa-angle-left"></i>
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Level 2</p>
                    </a>
                  </li>
                  <li className="nav-item has-treeview">
                    <a href="#" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>
                        Level 2<i className="right fas fa-angle-left"></i>
                      </p>
                    </a>
                    <ul className="nav nav-treeview">
                      <li className="nav-item">
                        <a href="#" className="nav-link">
                          <i className="far fa-dot-circle nav-icon"></i>
                          <p>Level 3</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="#" className="nav-link">
                          <i className="far fa-dot-circle nav-icon"></i>
                          <p>Level 3</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="#" className="nav-link">
                          <i className="far fa-dot-circle nav-icon"></i>
                          <p>Level 3</p>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Level 2</p>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="fas fa-circle nav-icon"></i>
                  <p>Level 1</p>
                </a>
              </li>
              <li className="nav-header">LABELS</li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="nav-icon far fa-circle text-danger"></i>
                  <p className="text">Important</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="nav-icon far fa-circle text-warning"></i>
                  <p>Warning</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="nav-icon far fa-circle text-info"></i>
                  <p>Informational</p>
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
