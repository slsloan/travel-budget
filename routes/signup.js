// dependencies
const User = require("../models/User");
const express = require("express");
// define new router
var router = express.Router();
// configure routes for my router
router.use("/account/signup", (req, res) => {
  let { firstName, lastName, email, password } = req.body;
  if (!firstName) {
    return res.send({
      success: false,
      message: "Error: First name cannot be blank.",
    });
  }
  if (!lastName) {
    return res.send({
      success: false,
      message: "Error: Last name cannot be blank.",
    });
  }
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
    },
    (err, previousUsers) => {
      if (err) {
        return res.send({
          success: false,
          message: "Error: Server error A",
        });
      } else if (previousUsers.length > 0) {
        return res.send({
          success: false,
          message: "Error: Account already exist.",
        });
      }
      // Save the new user
      const newUser = new User();
      newUser.email = email;
      newUser.password = password;
      newUser.firstName = firstName;
      newUser.lastName = lastName;
      newUser.save((err) => {
        if (err) {
          return res.send({
            success: false,
            message: "Error: Server error B",
          });
        }
        return res.send({
          success: true,
          message: "Signed up",
        });
      });
    }
  );
});
module.exports = router;
