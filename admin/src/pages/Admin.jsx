import React from "react";
import Data from "../data/Data";

function AdminPanel() {
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
          {Object.keys(Data.Users).map(key => {
            return (
              <tr key={key}>
                <td key={key + " name"}>{Data.Users[key].Username}</td>
                <td key={key + " password"}>{Data.Users[key].Password}</td>
                <td key={key + " email"}>{Data.Users[key].Email}</td>
                <td key={key + " phone"}>{Data.Users[key].Phone}</td>
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

export default AdminPanel;
