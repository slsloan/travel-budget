// dependencies
import React from "react";

const LoginCard = (props) => {
  return (
    <div className="z-depth-1 row login-page-element login-card">
      <form className="col s12" method="post">
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
            />
            <label type="password"></label>
          </div>
          <label>
            <a className="login-password" href="#!">
              <b>Forgot Password?</b>
            </a>
          </label>
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
        </center>
      </form>
    </div>
  );
};

export default LoginCard;
