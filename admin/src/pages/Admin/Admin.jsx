import React, { Component } from "react";
import Data from "../../data/Data";
import AdminLogin from "./components/AdminLogin";
import Dashboard from "./components/dashboard/Dashboard";
import Axios from "axios";
import "./Admin.css";

class Admin extends Component {
  constructor() {
    super();

    this.state = {
      login: true,
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
          <div className="Admin__Login">
            <AdminLogin />
          </div>
        )}
        {this.state.login && (
          <div className="Admin__Dashboard">
            <Dashboard Users={Data.Users} />
          </div>
        )}
      </div>
    );
  }
}

export default Admin;
