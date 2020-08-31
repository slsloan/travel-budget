var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var tripsSchema = new Schema({
  country: String,
  description: String,
  screenshot: String,
  github: String,
  days: Number,
});

var Trips = mongoose.model("Project", tripsSchema);

module.exports = Trips;
