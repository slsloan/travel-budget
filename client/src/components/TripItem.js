import React from "react";
import { motion } from "framer-motion";

const TripItem = ({ location, isSelected, selectTrip }) => {
  return (
    <motion.a
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 1 }}
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
    </motion.a>
  );
};

export default TripItem;
