// dependencies
const User = require("../models/User");
const express = require("express");
// define new router
var router = express.Router();
// configure routes for my router
router.use("/login", (req, res) => {
  let { email, password } = req.body;
  if (!email) {
    return res.send({
      success: false,
      message: "Error: Email cannot be blank.",
    });
  }
  if (!password) {
    return res.send({
      success: false,
      message: "Error: Password cannot be blank.",
    });
  }
  email = email.toLowerCase();
  email = email.trim();
  User.find(
    {
      email: email,
      password: password,
    },
    (err, activeUser) => {
      if (err) {
        return res.send({
          success: false,
          message: "Error: Server error C",
        });
      } else if (activeUser.length > 0) {
        return res.send({
          success: true,
          message: "Logged in",
        });
      }
    }
  );
});
module.exports = router;
