// dependencies
import React from "react";

const AccountCard = (props) => {
  return (
    <div className="z-depth-1 row login-page-element login-card">
      <form className="col s12" method="post">
        <div className="row">
          <div className="col s12"></div>
        </div>
        <div class="row">
          <div class="input-field col s6">
            <input
              className="validate"
              type="text"
              name="first_name"
              id="first_name"
              placeholder="First Name"
            ></input>
            <label type="first_name"></label>
          </div>
          <div class="input-field col s6">
            <input
              className="validate"
              type="text"
              name="last_name"
              id="last_name"
              placeholder="Last Name"
            ></input>
            <label type="last_name"></label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12 login-input">
            <input
              className="validate"
              type="email"
              name="email"
              id="email"
              placeholder="Email"
            />
            <label type="email"></label>
          </div>
        </div>

        <div className="row">
          <div className="input-field col s12 login-input">
            <input
              className="validate"
              type="password"
              name="password"
              id="password"
              placeholder="Password"
            />
            <label type="password"></label>
          </div>
        </div>

        <br />
        <center>
          <div className="row">
            <button
              className="col s12 btn btn-large waves-effect login-button"
              type="submit"
              name="btn_login"
            >
              Register
            </button>
          </div>
        </center>
      </form>
    </div>
  );
};

export default AccountCard;
