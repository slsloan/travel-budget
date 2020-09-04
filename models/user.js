const mongoose = require("mongoose");
// const bcrypt = require('bcryptjs');
const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  signUpDate: {
    type: Date,
    default: Date.now(),
  },
  trips: Array,
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
