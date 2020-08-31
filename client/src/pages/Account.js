import React, { useState } from "react";
import AccountCard from "../components/AccountCard";
import CreateAccountBtn from "../components/CreateAccountBtn";

const Account = () => {
  const [newUser, setNewUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });

  console.log(newUser);

  const handleNewUser = (event) => {
    event.preventDefault();
    console.log(event.target);
  };

  const getUserInfo = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setNewUser({ ...newUser, [name]: value });
  };

  return (
    <div className="login-page">
      {" "}
      <div className="section"></div>
      <main>
        <center className="login-div">
          <div className="section"></div>
          <h5 className="login-header">Create Account</h5>
          <div className="section"></div>
          <AccountCard
            handleNewUser={handleNewUser}
            getUserInfo={getUserInfo}
          />
        </center>
      </main>
    </div>
  );
};

export default Account;
