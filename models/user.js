const mongoose = require('mongoose');
// const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  isDeleted: {
    type: Boolean,
    default: false
  },
  signUpDate: {
    type: Date,
    default: Date.now()
  }
});

// UserSchema.methods.generateHash = function (password) {
//     return bcrypt.hashSync(password, bcrypt.genSalteSync(8), null);
// };

// UserSchema.methods.validPassword = function (password) {
//     return bcrypt.compareSync(password, this.password);
// };

const User = mongoose.model('User', UserSchema);

module.exports = User;
