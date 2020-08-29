import React from "react";
import AccountCard from "../components/AccountCard";
import CreateAccountBtn from "../components/CreateAccountBtn";


const Account = () => {
  return (
    <div className="login-page">
      {" "}
      <div className="section"></div>
      <main>
        <center className="login-div">
          <div className="section"></div>
          <h5 className="login-header">Create Account</h5>
          <div className="section"></div>
          <AccountCard></AccountCard>
        </center>
      </main>
    </div>
  );
};

export default Account;
