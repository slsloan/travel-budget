// dependencies
import React from "react";


const Footer = () => {
  // destructure profile

  return (
    <footer className="page-footer footer-style">
      <div className="container">
        <div className="row">
          <div className="col s12 m6">
            <span>{`© Copyright ${new Date().getFullYear()}`}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
