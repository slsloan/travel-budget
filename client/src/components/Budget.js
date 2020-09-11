import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { useHistory } from "react-router-dom";
const Budget = (props) => {
  const history = useHistory();
  console.log(history);
  const newId = props.location.userId;
  console.log(newId);
  const [newBudget, setNewBudget] = useState({
    userId: "",
    tripName: "",
    country: "",
    lengthOfTrip: "",
    roomBoard: "",
    food: "",
    flight: "",
    transportation: "",
    misc: "",
    createdDate: "",
  });

  console.log(Date.now());

  useEffect(() => {
    setNewBudget({ userId: newId, createdDate: Date.now() });
  }, [newId]);

  const { roomBoard, food, flight, transportation, misc } = newBudget;

  const totalBudget =
    parseInt(roomBoard) +
    parseInt(food) +
    parseInt(flight) +
    parseInt(transportation) +
    parseInt(misc);
  const getBudgetInfo = (event) => {
    const { name, value } = event.target;
    setNewBudget({ ...newBudget, [name]: value });
  };
  const handleNewBudget = (event) => {
    event.preventDefault();
    console.log(newBudget + "newBudget");
    axios.post("/api/user/add-trip", newBudget).then((response) => {
      console.log(response.data.email);
      if (response.status === 200) {
        console.log("A new budget has been added!");
        history.push(`/trip/${response.data.email}`);
      }
    });
  };
  return (
    <div>
      <br />
      <motion.div
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ delay: 0.25, duration: 0.6 }}
        className="z-depth-1 row trip-page-element trip-card"
      >
        <center>
          <i className="medium material-icons trip-header">public</i>
          <h5 className="trip-header">Create a Trip</h5>
        </center>
        <form className="col s12 login-input" onSubmit={handleNewBudget}>
          <div className="row">
            <div className="col s12">
              <input
                className="validate"
                type="text"
                name="tripName"
                id="tripName"
                placeholder="Enter a name for your trip"
                onChange={getBudgetInfo}
              />
              <label type="tripName"></label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6" id="country">
              <select
                className="browser-default"
                name="country"
                onChange={getBudgetInfo}
              >
                <option value="" disabled selected>
                  Choose your country
                </option>
                <option value="Australia">Australia</option>
                <option value="Brazil">Brazil</option>
                <option value="Canada">Canada</option>
                <option value="China">China</option>
                <option value="Costa Rica">Costa Rica</option>
                <option value="Egypt">Egypt</option>
                <option value="England">England</option>
                <option value="France">France</option>
                <option value="Greece">Greece</option>
                <option value="Germany">Germany</option>
                <option value="India">India</option>
                <option value="Indonesia">Indonesia</option>
                <option value="Japan">Japan</option>
                <option value="Mexico">Mexico</option>
                <option value="Morocco">Morocco</option>
                <option value="Norway">Norway</option>
                <option value="Russia">Russia</option>
                <option value="SouthKorea">South Korea</option>
                <option value="Spain">Spain</option>
                <option value="Switzerland">Switzerland</option>
                <option value="Taiwan">Taiwan</option>
                <option value="Thailand">Thailand</option>
                <option value="Vietnam">Vietnam</option>
              </select>
            </div>
            <div className="input-field col s6" id="lengthOfTrip">
              <select
                className="browser-default"
                name="lengthOfTrip"
                onChange={getBudgetInfo}
              >
                <option value="" disabled selected>
                  Number of days
                </option>
                <option value="2">2 days</option>
                <option value="3">3 days</option>
                <option value="5">5 days </option>
                <option value="7">7 days</option>
                <option value="14">14 days</option>
                <option value="30">30 days</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <i className="material-icons prefix">hotel</i>
              <input
                name="roomBoard"
                id="icon_prefix"
                type="number"
                className="validate"
                placeholder="Room & Board"
                onChange={getBudgetInfo}
              />
              <label type="icon_prefix"></label>
            </div>
            <div className="input-field col s6">
              <i className="material-icons prefix">local_dining</i>
              <input
                name="food"
                id="icon_prefix"
                type="number"
                className="validate"
                placeholder="Food"
                onChange={getBudgetInfo}
              />
              <label type="icon_prefix"></label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <i className="material-icons prefix">flight</i>
              <input
                name="flight"
                id="icon_prefix"
                type="number"
                className="validate"
                placeholder="Flight"
                onChange={getBudgetInfo}
              />
              <label type="icon_prefix"></label>
            </div>
            <div className="input-field col s6">
              <i className="material-icons prefix">directions_bus</i>
              <input
                name="transportation"
                id="icon_prefix"
                type="number"
                className="validate"
                placeholder="Transportation"
                onChange={getBudgetInfo}
              />
              <label type="icon_prefix"></label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6 center">
              <i className="material-icons prefix">beach_access</i>
              <input
                name="misc"
                id="icon_prefix"
                type="number"
                className="validate"
                placeholder="Misc"
                onChange={getBudgetInfo}
              />
              <label type="icon_prefix"></label>
            </div>
            <div className="input-field col s6 center">
              <i className="material-icons prefix">attach_money</i>
              <input
                name="totalBudget"
                disabled
                value={totalBudget || 0}
                id="disabled"
                className="validate"
              />
              <label type="icon_prefix"></label>
            </div>
          </div>
          <br />
          <center>
            <div className="row">
              <button
                type="submit"
                className="waves-effect waves-light btn-large trip-button"
              >
                <i className="material-icons right">add</i>Add Trip
              </button>
            </div>
          </center>
        </form>
      </motion.div>
    </div>
  );
};
export default Budget;
