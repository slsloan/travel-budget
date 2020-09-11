import React from "react";
import { motion } from "framer-motion";

const TripItem = ({ location, isSelected, selectTrip }) => {
  return (
    <a
      title="View Chart"
      className="collection-item"
      isSelected={isSelected}
      onClick={selectTrip}
      style={{ color: "#5085a5" }}
    >
      {location}
      <span style={{ float: "right" }}>
        <i className="material-icons">place</i>
      </span>
    </a>
  );
};

export default TripItem;
