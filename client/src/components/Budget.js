
import React, { useState } from "react";
import axios from "axios";

const Budget = () => {

  const [newBudget, setNewBudget] = useState({
    tripName: "",
    country: "",
    lengthOfTrip: "",
    roomBoard: "",
    food: "",
    flight: "",
    transportation: "",
    misc: "",
  });

  const { roomBoard, food, flight, transportation, misc } = newBudget

  const getBudgetInfo = event => {
    const { name, value } = event.target
    setNewBudget({ ...newBudget, [name]: value });
  }

  const handleNewBudget = (event) => {
    event.preventDefault();
    axios.post("/api/user/add-trip", newBudget).then((response) => {
      if (response.status === 200) {
        console.log("A new budget has been added!");
      }
    });
  };


  return (
    <div>
      <br />
      <div className="z-depth-1 row trip-page-element trip-card">
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
                onChange={getBudgetInfo} />
              <label type="tripName"></label>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s6" id="country">
              <select className="browser-default" name="country" onChange={getBudgetInfo}>
                <option value="" disabled selected>Choose your country</option>
                <option value="Australia">Australia</option>
                <option value="Brazil">Brazil</option>
                <option value="Canada">Canada</option>
                <option value="China">China</option>
                <option value="Egypt">Egypt</option>
                <option value="France">France</option>
                <option value="Greece">Greece</option>
                <option value="Germany">Germany</option>
                <option value="India">India</option>
                <option value="Japan">Japan</option>
                <option value="Mexico">Mexico</option>
                <option value="Norway">Norway</option>
                <option value="Russia">Russia</option>
                <option value="SouthKorea">South Korea</option>
                <option value="Switzerland">Switzerland</option>
                <option value="Taiwan">Taiwan</option>
                <option value="England">England</option>
                <option value="Vietnam">Vietnam</option>
              </select>
            </div>
            <div className="input-field col s6" id="lengthOfTrip">
              <select className="browser-default" name="lengthOfTrip" onChange={getBudgetInfo}>
                <option value="" disabled selected>Number of days</option>
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
              <input name="roomBoard" id="icon_prefix" type="text" className="validate" placeholder="Room & Board Budget" onChange={getBudgetInfo} />
              <label type="icon_prefix"></label>
            </div>
            <div className="input-field col s6">
              <i className="material-icons prefix">local_dining</i>
              <input name="food" id="icon_prefix" type="text" className="validate" placeholder="Food Budget" onChange={getBudgetInfo} />
              <label type="icon_prefix"></label>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s6">
              <i className="material-icons prefix">flight</i>
              <input name="flight" id="icon_prefix" type="text" className="validate" placeholder="Flight Budget" onChange={getBudgetInfo} />
              <label type="icon_prefix"></label>
            </div>
            <div className="input-field col s6">
              <i className="material-icons prefix">directions_bus</i>
              <input name="transportation" id="icon_prefix" type="text" className="validate" placeholder="Transportation Budget" onChange={getBudgetInfo} />
              <label type="icon_prefix"></label>
            </div>
          </div>


          <div className="row">
            <div className="input-field col s6 center">
              <i className="material-icons prefix">beach_access</i>
              <input name="misc" id="icon_prefix" type="text" className="validate" placeholder="Misc Budget" onChange={getBudgetInfo} />
              <label type="icon_prefix"></label>
            </div>
            <div className="input-field col s6 center">
              <i className="material-icons prefix">attach_money</i>
              <input name="totalBudget" disabled value={parseInt(roomBoard) + parseInt(food) + parseInt(flight) + parseInt(transportation) + parseInt(misc)} id="disabled" className="validate" placeholder="Total Budget" />
              <label type="icon_prefix"></label>
            </div>
          </div>

          <br />
          <center>
            <div className="row">
              <a className="waves-effect waves-light btn-large trip-button">
                <i className="material-icons right">add</i>Add Trip
              </a>
            </div>
          </center>
        </form>
      </div>
    </div>
  );
};

export default Budget;
