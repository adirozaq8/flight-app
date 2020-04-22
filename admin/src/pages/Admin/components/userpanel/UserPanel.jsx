import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import "./UserPanel.css";

class UserPanel extends Component {
  constructor(props) {
    super(props);
    this.Users = props.Users;
    this.state = {
      UserTable: false,
    };
  }
  setToggleBtn(e) {
    e === 0 ? this.setState({ UserTable: 1 }) : this.setState({ UserTable: 0 });
  }
  render() {
    return (
      <div className="UserPanel">
        <div className="UserPanel__img-wrapper">
          <FontAwesomeIcon icon={faUsers} />
        </div>
        <div className="UserPanel__info">
          <div className="UserPanel-info__content">
            <h6>Total users </h6>
            <div className="UserPanel__count">
              <p>{Object.keys(this.Users).length}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserPanel;
