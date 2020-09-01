import React from "react";
import AccountCard from "../components/AccountCard";

const Account = () => {
  return (
    <div className="login-page">
      {" "}
      <div className="section"></div>
      <main>
        <center className="login-div">
          <AccountCard></AccountCard>
        </center>
      </main>
    </div>
  );
};

export default Account;
