import React from "react";
import { Doughnut } from "react-chartjs-2";

const TripDetails = ({ location, details, image, link }) => {
  const data = {
    labels: ["Room and Board", "Food", "Travel", "Misc"],
    datasets: [
      {
        label: `${location} Budget`,
        data: [600, 500, 1200, 200],
        backgroundColor: ["#134a63", "#31708E", "#5085A5", "#8FC1E3"],
      },
    ],
  };
  return (
    <div class="card-panel" style={{ textAlign: "center" }}>
      <img src={image} alt={details} width="500" height="250" />
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
