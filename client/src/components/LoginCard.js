// dependencies
import React from "react";
import { Link } from "react-router-dom";

const LoginCard = ({ getUserInfo, handleUser }) => {
  return (
    <div className="z-depth-1 row login-page-element login-card">
      <i className="large material-icons account-login">flight</i>
      <h5 className="login-header">Please, login into your account</h5>
      <form className="col s12" method="post" onSubmit={handleUser}>
        <div className="row">
          <div className="col s12"></div>
        </div>

        <div className="row">
          <div className="input-field col s12 login-input">
            <input
              className="validate"
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              onChange={getUserInfo}
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
              placeholder="Enter your password"
              onChange={getUserInfo}
            />
            <label type="password"></label>
          </div>
        </div>

        <br />
        <center>
          <div className="row">
            <button
              type="submit"
              name="btn_login"
              className="col s12 btn btn-large waves-effect login-button"
            >
              Login
            </button>
          </div>
          <div className="row">
            <label>
              <b>Create an account?</b>
              <Link to="/account">
                {" "}
                <a>
                  Sign up
                </a>
              </Link>
            </label>
          </div>
        </center>
      </form>
    </div>
  );
};

export default LoginCard;
