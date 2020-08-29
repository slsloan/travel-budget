// dependencies
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = (props) => {
  // destructure profile

  return (
    <footer className="page-footer footer-style" style={{zIndex: "1"}}>
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
      <div className="footer-copyright">
        <div className="container">
          <div className="row">
            <div className="col s12 m6">
              <span className="fuck">{`© Copyright ${new Date().getFullYear()}`}</span>
            </div>
            <div className="col s12 m4 offset-m2">
              <a href="github.com" rel="noopener noreferrer" target="_blank">
                <FontAwesomeIcon icon={faGithubSquare} />
              </a>
              <a href="linkedin.com" rel="noopener noreferrer" target="_blank">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
