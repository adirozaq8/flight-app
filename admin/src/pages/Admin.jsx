import React from "react";
import Data from "../data/Data";

function Admin() {
  return (
    <div>
      <h4>Users</h4>
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
          {Object.keys(Data).map(key => {
            return (
              <tr key={key}>
                <td key={key + " name"}>{Data[key].Username}</td>
                <td key={key + " password"}>{Data[key].Password}</td>
                <td key={key + " email"}>{Data[key].Email}</td>
                <td key={key + " phone"}>{Data[key].Phone}</td>
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
    </div>
  );
}

export default Admin;
