import React from "react";

const Login = () => {
  return (
    <div className="login-page">
      {" "}
      <div className="section"></div>
      <main>
        <center>
          <div className="section"></div>

          <h5 className="login-header">Please, login into your account</h5>
          <div className="section"></div>

          <div>
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
                    />
                    <label type="email">Enter your email</label>
                  </div>
                </div>

                <div className="row">
                  <div className="input-field col s12 login-input">
                    <input
                      className="validate"
                      type="password"
                      name="password"
                      id="password"
                    />
                    <label type="password">Enter your password</label>
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
          </div>
          <a href="#!" className="login-create-account">
            Create account
          </a>
        </center>

        <div className="section"></div>
        <div className="section"></div>
      </main>
    </div>
  );
};

export default Login;
