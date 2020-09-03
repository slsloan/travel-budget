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
    <div class="card-panel">
      <img src={image} alt={details} width="100" hight="75" />
      <p>{data.datasets[0].label}</p>
      <Doughnut data={data} />
      <p>{details}</p>
      <button href={link}>Learn More</button>
    </div>
  );
};

export default TripDetails;
