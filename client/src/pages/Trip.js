import React from "react";
import Budget from "../components/Budget";

const Trip = () => {
  return (
    <div className="container">
      <br />
      <br />
      <div className="row">
        <ul
          className="sidenav sidenav-fixed collection with-header"
          style={{ zIndex: "0", height: "auto", marginTop: "64px", paddingBottom: "0" }}
        >
        <li className="collection-header"><h4>Trips<span style={{float: "right"}}><i className="material-icons" style={{fontSize: "3rem"}}>landscape</i></span></h4></li>
        <a href="#!" title="View Chart" className="collection-item">Australia<span style={{float: "right"}}><i className="material-icons" >show_chart</i></span></a>
        <a href="#!" title="View Chart" className="collection-item">Poland<span style={{float: "right"}}><i className="material-icons" >show_chart</i></span></a>
        <a href="#!" title="View Chart" className="collection-item">Costa Rica<span style={{float: "right"}}><i className="material-icons" >show_chart</i></span></a>
        <a href="#!" title="View Chart" className="collection-item">India<span style={{float: "right"}}><i className="material-icons" >show_chart</i></span></a>
        </ul>
      </div>
    </div>
  );
};

export default Trip;
