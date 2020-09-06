import React, { useState } from "react";
import LoginCard from "../components/LoginCard";
import CreateAccountBtn from "../components/CreateAccountBtn";
import axios from "axios";

const Login = (props) => {
  // destructure props
  const { history, setUser } = props;

  const [newLogin, setNewLogin] = useState({
    email: "",
    password: "",
  });

  const handleUser = (event) => {
    event.preventDefault();
    axios.post("/api/login", newLogin).then((response) => {
      if (response.status === 200) {
        console.log(response);
        console.log("Successfully logged in!");

        history.push(`/trip/${newLogin.email}`, { email: response.data.user });
      }
    });
  };

  const getUserInfo = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setNewLogin({ ...newLogin, [name]: value });
  };

  return (
    <div className="login-page">
      {" "}
      <div className="section"></div>
      <main>
        <center className="login-div">
          <div className="section"></div>
          <h5 className="login-header">Please, login into your account</h5>
          <div className="section"></div>
          <LoginCard getUserInfo={getUserInfo} handleUser={handleUser} />
          <CreateAccountBtn />
        </center>
      </main>
    </div>
  );
};

export default Login;
