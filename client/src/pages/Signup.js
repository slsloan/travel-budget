import React, { useState } from "react";
import AccountCard from "../components/AccountCard";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Account = () => {
  const history = useHistory();

  const [newUser, setNewUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  console.log(newUser);

  const handleNewUser = (event) => {
    event.preventDefault();
    axios.post("/api/account/signup", newUser).then((response) => {
      if (response.status === 200) {
        console.log("An account has been created!");
        history.push("/");
      }
    });
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

          <AccountCard
            handleNewUser={handleNewUser}
            getUserInfo={getUserInfo}
          ></AccountCard>

        </center>
      </main>
    </div>
  );
};

export default Account;
