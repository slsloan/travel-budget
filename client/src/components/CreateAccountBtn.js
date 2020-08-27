// dependencies
import React from "react";
import { Link } from "react-router-dom";
const CreateAccountBtn = (props) => {
  return (
    <Link to="/account">
      {" "}
      <a className="waves-effect waves-light btn login-create-account">
        Create Account
      </a>
    </Link>
  );
};

export default CreateAccountBtn;
