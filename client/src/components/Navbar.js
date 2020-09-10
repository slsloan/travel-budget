// dependencies
import React from "react";
import { motion } from "framer-motion";
import { Link, NavLink } from "react-router-dom";

// used to animate the logo svg
const svgVariants = {
  hidden: 0,
  visible: {
    rotate: 0,
    transition: { duration: 3 },
  },
};

const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
};

const Navbar = (props) => {
  const user = JSON.stringify(props.user).slice(1, -1);
  console.log(user);
  return (
    <nav className="nav-style" style={{ zIndex: "1" }}>
      <div className="container">
        <div className="row">
          <div className="col s12">
            <Link to="/" className="brand-logo">
              <div className="col s2">
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100px"
                  height="50px"
                  viewBox="0 0 657.13 315.34"
                  className="svg-logo"
                  variants={svgVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <motion.g id="Layer_1" data-name="Layer 1" initial={{y: -500}} animate={{y: 0}} transition={{delay: 2.5}}>
                    <motion.path
                      variants={pathVariants}
                      className="cls-1"
                      d="M596.53,113.41a26.26,26.26,0,1,0-26.26-26.26A26.3,26.3,0,0,0,596.53,113.41Zm0-43.28a17,17,0,1,1-17,17A17,17,0,0,1,596.53,70.13Z"
                      transform="translate(-11.62 -20.77)"
                    />
                    <motion.path
                      variants={pathVariants}
                      className="cls-1"
                      d="M596.53,49.59A4.62,4.62,0,0,0,601.15,45V29.57a4.62,4.62,0,1,0-9.24,0V45A4.62,4.62,0,0,0,596.53,49.59Z"
                      transform="translate(-11.62 -20.77)"
                    />
                    <motion.path
                      variants={pathVariants}
                      className="cls-1"
                      d="M591.91,130.05v15.4a4.62,4.62,0,1,0,9.24,0v-15.4a4.62,4.62,0,1,0-9.24,0Z"
                      transform="translate(-11.62 -20.77)"
                    />
                    <motion.path
                      variants={pathVariants}
                      className="cls-1"
                      d="M634.45,87.51a4.62,4.62,0,0,0,4.62,4.62h15.41a4.62,4.62,0,1,0,0-9.24H639.07A4.62,4.62,0,0,0,634.45,87.51Z"
                      transform="translate(-11.62 -20.77)"
                    />
                    <motion.path
                      variants={pathVariants}
                      className="cls-1"
                      d="M538.59,92.13H554a4.62,4.62,0,1,0,0-9.24h-15.4a4.62,4.62,0,0,0,0,9.24Z"
                      transform="translate(-11.62 -20.77)"
                    />
                    <motion.path
                      variants={pathVariants}
                      className="cls-1"
                      d="M626.61,62.05a4.61,4.61,0,0,0,3.27-1.36l10.89-10.88a4.62,4.62,0,0,0-6.53-6.54L623.35,54.16a4.63,4.63,0,0,0,3.26,7.89Z"
                      transform="translate(-11.62 -20.77)"
                    />
                    <motion.path
                      variants={pathVariants}
                      className="cls-1"
                      d="M563.19,114.33l-10.9,10.88a4.62,4.62,0,0,0,0,6.53,4.6,4.6,0,0,0,6.53,0l10.9-10.88a4.62,4.62,0,0,0-6.53-6.53Z"
                      transform="translate(-11.62 -20.77)"
                    />
                    <motion.path
                      variants={pathVariants}
                      className="cls-1"
                      d="M563.19,60.69a4.62,4.62,0,0,0,6.53-6.53L558.83,43.27a4.62,4.62,0,1,0-6.54,6.54Z"
                      transform="translate(-11.62 -20.77)"
                    />
                    <motion.path
                      variants={pathVariants}
                      className="cls-1"
                      d="M623.34,114.33a4.61,4.61,0,0,0,0,6.53l10.89,10.88a4.62,4.62,0,1,0,6.53-6.53l-10.89-10.88A4.62,4.62,0,0,0,623.34,114.33Z"
                      transform="translate(-11.62 -20.77)"
                    />
                  </motion.g>
                  <g id="Layer_2" data-name="Layer 2">
                    <motion.path
                      variants={pathVariants}
                      className="cls-2"
                      d="M218.13,219.52l-48.57-85.68a10.07,10.07,0,0,0-17-.87L16.91,324a4.9,4.9,0,0,0,4,7.74l638.47-.11a5,5,0,0,0,3.94-8L485.76,94.48a10,10,0,0,0-16.21.53L406,189.17,300.38,29.63a10,10,0,0,0-17,.4L196.93,175"
                      transform="translate(-11.62 -20.77)"
                    />
                    <motion.path
                      variants={pathVariants}
                      className="cls-2"
                      d="M122.75,175l29.55,36.05a4,4,0,0,0,5.79-.9l11.48-17.07a4,4,0,0,1,5.85-.85l8.75,5.22a4,4,0,0,0,5.29-1l7.07-9.3"
                      transform="translate(-11.62 -20.77)"
                    />
                    <motion.path
                      variants={pathVariants}
                      className="cls-2"
                      d="M256.32,75.45h20a4.11,4.11,0,0,1,3.88,2.81l6.1,18.5a4.08,4.08,0,0,0,7.47.66l7.74-14.3a4.08,4.08,0,0,1,5.79-1.5l12.78,8.14a4.1,4.1,0,0,0,2.88.58l15.81-2.67"
                      transform="translate(-11.62 -20.77)"
                    />
                    <motion.path
                      variants={pathVariants}
                      className="cls-2"
                      d="M437,143.21l19.1,19.43a4,4,0,0,0,6.06-.35l6.31-8.08a4,4,0,0,1,6.4,0l20,26.44a4,4,0,0,0,7.19-1.68l4.54-24a4,4,0,0,1,5.55-3l27,11.36"
                      transform="translate(-11.62 -20.77)"
                    />
                  </g>
                </motion.svg>
              </div>
              <motion.div className="col" style={{marginLeft: "50px"}} initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 0.5, duration: 1}}>
                {user ? `${user}'s Travel Budget` : "Travel Budget"}
              </motion.div>
            </Link>

            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <motion.li initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 0.5, duration: 1}}>
                <NavLink exact to="/">
                  Login
                </NavLink>
              </motion.li>
              <motion.li initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 0.5, duration: 1}}>
                <NavLink exact to="/trip">
                  Trips
                </NavLink>
              </motion.li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
