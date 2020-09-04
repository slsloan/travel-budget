// dependencies
import React from "react";

const Footer = (props) => {
  return (
    <footer className="page-footer footer-style" style={{ zIndex: "1" }}>
      <div className="container">
        <div className="row">
          <div className="col s12 m6">
            <h5 className="white-text">Travel Budget</h5>
            <p className="grey-text text-lighten-4">Plan Your Adventure</p>
          </div>
          <div className="col s12 m4 offset-m2">
            <div className="row">
              <div className="col s12">
                <h5 className="white-text">Skills</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
