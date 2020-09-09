// dependencies
import React from "react";
import { motion } from "framer-motion"
import { Link, NavLink } from "react-router-dom";

// used to animate the logo svg
const svgVariants = {
  hidden: {rotate: -180 },
  visible: {
    rotate: 0,
    transition: {duration: 1}
  }
}

const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 2,
      ease: "easeInOut"
    }
  }
}

const Navbar = (props) => {
  const user = JSON.stringify(props.user).slice(1, -1);
  console.log(user);
  return (
    <nav className="nav-style" style={{ zIndex: "1" }}>
      <div className="container">
        <div className="row">
          <div className="col s12">
            <Link to="/" className="brand-logo">
            <motion.i class="huge material-icons" intitial="hidden" animate="visible">filter_hdr</motion.i>
              {user ? `${user}'s Travel Budget` : "Travel Budget"}
            </Link>

            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <NavLink exact to="/">
                  Login
                </NavLink>
              </li>
              <li>
                <NavLink exact to="/trip">
                  Trips
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
