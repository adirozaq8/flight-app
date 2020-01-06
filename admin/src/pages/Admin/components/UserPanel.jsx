import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import "./UserPanel.css";

class UserPanel extends Component {
  constructor(props) {
    super(props);
    this.Users = props.Users;
    this.state = {
      UserTable: false
    };
  }
  setToggleBtn(e) {
    e === 0 ? this.setState({ UserTable: 1 }) : this.setState({ UserTable: 0 });
  }
  render() {
    return (
      <div className="UserPanel">
        <div className="UserPanel__header">
          <h4>Users: </h4>
          <div className="UserPanel__header-count">
            <p>{Object.keys(this.Users).length}</p>
          </div>
          <div>
            <button
              onClick={() =>
                !this.state.UserTable
                  ? this.setState({ UserTable: true })
                  : this.setState({ UserTable: false })
              }
            >
              {!this.state.UserTable ? (
                <FontAwesomeIcon icon={faPlus} />
              ) : (
                <FontAwesomeIcon icon={faMinus} />
              )}
            </button>
          </div>
        </div>
        <div className="UserPanel__table">
          {this.state.UserTable && (
            <table>
              <thead>
                <tr>
                  <td>Username</td>
                  <td>Password</td>
                  <td>Email</td>
                  <td>Phone</td>
                </tr>
              </thead>
              <tbody>
                {Object.keys(this.Users).map(key => {
                  return (
                    <tr key={key}>
                      <td key={key + " name"}>{this.Users[key].Username}</td>
                      <td key={key + " password"}>
                        {this.Users[key].Password}
                      </td>
                      <td key={key + " email"}>{this.Users[key].Email}</td>
                      <td key={key + " phone"}>{this.Users[key].Phone}</td>
                      <td>
                        <button>Edit</button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
              <tfoot>
                <tr>
                  <td>
                    <button>New User</button>
                  </td>
                </tr>
              </tfoot>
            </table>
          )}
        </div>
      </div>
    );
  }
}

export default UserPanel;
