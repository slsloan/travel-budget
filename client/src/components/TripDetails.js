import React from "react";

const TripDetails = ({ location, details, image, link }) => {
  return (
    <div class="card-panel">
      <img src={image} alt={details} width="100" hight="75"/>
      <h3>{location}</h3>
      <p>{details}</p>
      <button href={link}>Learn More</button>
    </div>
  );
};

export default TripDetails;
