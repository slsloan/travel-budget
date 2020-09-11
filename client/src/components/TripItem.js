import React from "react";
import { motion } from "framer-motion";

const TripItem = ({ tripName, isSelected, selectTrip }) => {
  tripName = tripName.charAt(0).toUpperCase() + tripName.slice(1);
  return (
    <motion.a
      initial="hidden"
      animate="visible"
      transition={{ delay: 0.25, duration: 0.6 }}
      title="View Chart"
      className="collection-item"
      isSelected={isSelected}
      onClick={selectTrip}
      style={{ color: "#5085a5" }}
    >
      {tripName}
      <span style={{ float: "right" }}>
        <i className="material-icons">place</i>
      </span>
    </motion.a>
  );
};

export default TripItem;
