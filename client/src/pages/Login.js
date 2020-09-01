import React, { useState } from "react";
import LoginCard from "../components/LoginCard";
import axios from "axios";

const Login = () => {
  const [newLogin, setNewLogin] = useState({
    email: "",
    password: "",
  });

  const handleUser = (event) => {
    event.preventDefault();
    axios.post("/api/login", newLogin).then(() => {
      setNewLogin({ email: "", password: "" });
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
          <LoginCard></LoginCard>
        </center>
      </main>
    </div>
  );
};

export default Login;
