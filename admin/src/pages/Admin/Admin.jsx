import React, { Component } from "react";
import Data from "../../data/Data";
import AdminLogin from "./components/AdminLogin";
import UserPanel from "./components/UserPanel";
import Axios from "axios";
import "./Admin.css";

class Admin extends Component {
  constructor() {
    super();

    this.state = {
      login: false,
      users: null,
      getUsers: false,
      errors: null
    };
  }

  // Function temporarily stored here, may be moved to an independent component
  getUsers = async () => {
    Axios({
      url: "http://localhost:5000",
      method: "post"
    })
      .then(res => {
        this.setState({ users: res.data, getUsers: true });
      })
      .catch(error => {
        this.setState({ errors: error });
      });
  };

  componentDidMount() {
    //this.getUsers();
  }

  render() {
    return (
      <div className="Admin">
        {!this.state.login && (
          <div>
            <AdminLogin />
          </div>
        )}
        {this.state.login && (
          <div className="Admin__UserPanel">
            <UserPanel Users={Data.Users} />
          </div>
        )}
      </div>
    );
  }
}

export default Admin;
