import React from "react";
import LoginCard from "../components/LoginCard";

const Login = () => {
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
