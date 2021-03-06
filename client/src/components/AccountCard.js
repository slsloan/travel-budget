// dependencies
import React from "react";
import { motion } from "framer-motion";

const AccountCard = ({ handleNewUser, getUserInfo }) => {
  return (
    <motion.div
      initial={{ x: "-100vw" }}
      animate={{ x: 0 }}
      transition={{ delay: 0.25, duration: 0.6 }}
      className="z-depth-1 row login-page-element login-card"
    >
      <i className="large material-icons account-register">account_circle</i>
      <h5 className="login-header">Create Account</h5>
      <form className="col s12" method="post" onSubmit={handleNewUser}>
        <div className="row">
          <div className="col s12"></div>
        </div>
        <div className="row">
          <div className="input-field col s6">
            <input
              className="validate"
              type="text"
              name="firstName"
              id="first_name"
              placeholder="First Name"
              onChange={getUserInfo}
            ></input>
            <label type="first_name"></label>
          </div>
          <div className="input-field col s6">
            <input
              className="validate"
              type="text"
              name="lastName"
              id="last_name"
              placeholder="Last Name"
              onChange={getUserInfo}
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
              placeholder="Password"
              onChange={getUserInfo}
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
    </motion.div>
  );
};

export default AccountCard;
