import React from "react";

function AdminLogin() {
  return (
    /* Login Modal */
    <div
      className="modal fade"
      id="loginModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Log In
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form action="/login" method="POST">
              <div className="form-group">
                <label htmlFor="usernameLogin">Username</label>
                <input
                  type="text"
                  className="form-control"
                  id="usernameLogin"
                  placeholder="Enter username"
                />
              </div>
              <div className="form-group">
                <label htmlFor="passwordLogin">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="passwordLogin"
                  placeholder="Enter password"
                />
              </div>
              <div className="modal-footer">
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    /* Modal End */
  );
}

export default AdminLogin;
