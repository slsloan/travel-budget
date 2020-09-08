import React, { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";

const TripDetails = ({ projectData, location, details, image, link }) => {
  let { budget, country, lengthOfTrip, room, food, travel, misc } = projectData;

  // Australia, Brazil, Canada, Egypt, France, Greece, Germany, India, Japan, Mexico, Norway, Russia, South Korea, Switzerland, Taiwan, United Kingdom, Vietnam

  country = country.charAt(0).toUpperCase() + country.slice(1);

  const data = {
    labels: ["Room and Board", "Food", "Travel", "Misc"],
    datasets: [
      {
        label: `${location} Budget`,
        data: [room, food, travel, misc],
        backgroundColor: ["#134a63", "#31708E", "#5085A5", "#8FC1E3"],
      },
    ],
  };
  return (
    <div className="card-panel" style={{ textAlign: "center" }}>
      <div className="row trip-details">
        <div className="col s2"></div>
        <h5 className="col s4">Destination: {country}</h5>
        <h5 className="col s4">Currency: Here</h5>
        <div className="col s2"></div>
      </div>
      <img src={`/img/${country}.jpg`} alt={details} width="500" height="250" />{" "}
      <h4>My {data.datasets[0].label}</h4>
      <Doughnut data={data} />
      <p>{details}</p>
      <a
        className="waves-effect waves-light create_btn"
        style={{ width: "auto" }}
        href={link}
      >
        Learn More
      </a>
    </div>
  );
};

export default TripDetails;
