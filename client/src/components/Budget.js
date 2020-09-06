import React from "react";

const Budget = () => {
  return (
    <div>
      <br />
      <div className="z-depth-1 row trip-page-element trip-card">
        <center>
          <i className="medium material-icons trip-header">public</i>
          <h5 className=" trip-header">Create a Trip</h5>
        </center>

        <form className="col s12 login-input">
          <div className="row">
            <div className="col s12">
              <input
                className="validate"
                type="text"
                name="tripName"
                id="tripName"
                placeholder="Enter a name for your trip"
              />
              <label type="tripName"></label>
            </div>
          </div>

          <div className="row login-input">
            <div className="col s2 ">
              <input
                className="validate"
                type="text"
                name="lengthOfTrip"
                id="lengthOfTrip"
                placeholder="ex. 8"
              />
              <label type="lengthOfTrip"></label>
            </div>
            <h6 className="trip-header">days</h6>
          </div>

          <center>
            <div className="row">
              <a className="waves-effect waves-light btn-large trip-button"><i className="material-icons right">add</i>Add Trip</a>
            </div>
          </center>
        </form>
      </div>
    </div>
  );
};

export default Budget;
