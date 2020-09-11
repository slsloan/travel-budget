import React from "react";
import { motion } from "framer-motion";
import { Doughnut } from "react-chartjs-2";

const TripDetails = ({ tripData, location, details }) => {
  let {
    country,
    lengthOfTrip,
    roomBoard,
    food,
    transportation,
    flight,
    misc,
  } = tripData;

  country = country.charAt(0).toUpperCase() + country.slice(1);

  let currency;
  let convert;
  let symbol;

  switch (country) {
    case "Australia":
      currency = "Australian dollar";
      convert = 0.73;
      symbol = "$ ";
      break;
    case "Brazil":
      currency = "Brazilian real";
      convert = 0.19;
      symbol = "R$ ";
      break;
    case "Canada":
      currency = "Canadian dollar";
      convert = 0.76;
      symbol = "$ ";
      break;
    case "Egypt":
      currency = "Egyptian pound";
      convert = 0.063;
      symbol = "e£ ";
      break;
    case "France":
      currency = "Euro";
      convert = 1.18;
      symbol = "€ ";
      break;
    case "Greece":
      currency = "Euro";
      convert = 1.18;
      symbol = "€ ";
      break;
    case "Germany":
      currency = "Euro";
      convert = 1.18;
      symbol = "€ ";
      break;
    case "India":
      currency = "Indian rupee";
      convert = 0.014;
      symbol = "₹ ";
      break;
    case "Japan":
      currency = "Japanese yen";
      convert = 0.0094;
      symbol = "¥ ";
      break;
    case "Mexico":
      currency = "Mexican peso";
      convert = 0.046;
      symbol = "$ ";
      break;
    case "Norway":
      currency = "Norwegian krone";
      convert = 0.11;
      symbol = "kr ";
      break;
    case "Russia":
      currency = "Russian ruble";
      convert = 0.013;
      symbol = "RUB ";
      break;
    case "South Korea":
      currency = "South Korean won";
      convert = 0.00084;
      symbol = "₩ ";
      break;
    case "Switzerland":
      currency = "Swiss franc";
      convert = 1.09;
      symbol = "CHF ";
      break;
    case "Taiwan":
      currency = "New Taiwan dollar";
      convert = 0.034;
      symbol = "$ ";
      break;
    case "England":
      currency = "Pound (sterling)";
      convert = 1.32;
      symbol = "£ ";
      break;
    case "Vietnam":
      currency = "Vietnamese dong";
      convert = 0.000043;
      symbol = "đ ";
      break;
    case "China":
      currency = "Renminbi";
      convert = 0.15;
      symbol = "¥ ";
      break;
    case "Morocco":
      currency = "Moroccan dirham";
      convert = 0.11;
      symbol = "DH ";
      break;
    case "Thailand":
      currency = "Moroccan dirham";
      convert = 0.11;
      symbol = "DH ";
      break;
    case "Indonesia":
      currency = "Indonesian rupiah";
      convert = 0.000067;
      symbol = "Rp ";
      break;
    case "Costa Rica":
      currency = "Costa Rican colón";
      convert = 0.0017;
      symbol = "₡ ";
      break;
    case "Spain":
      currency = "Euro";
      convert = 1.18;
      symbol = "€ ";
      break;

    default:
      console.log("Country not available!");
  }
  const budget =
    parseInt(roomBoard) +
    parseInt(food) +
    parseInt(transportation) +
    parseInt(flight) +
    parseInt(misc);
  const conBudget = Math.round(budget * convert);
  const dailyExpCon = Math.round(conBudget / lengthOfTrip);

  roomBoard = roomBoard * convert;
  food = food * convert;
  transportation = transportation * convert;
  flight = flight * convert;
  misc = misc * convert;

  const data = {
    labels: ["Room and Board", "Food", "Transportation", "Flight", "Misc"],
    datasets: [
      {
        label: `${location} Budget`,
        data: [roomBoard, food, transportation, flight, misc],
        backgroundColor: ["#134a63", "#31708E", "#5085A5", "#8FC1E3"],
      },
    ],
  };
  return (
    <motion.div
      initial={{ x: "200vw" }}
      animate={{ x: 0 }}
      transition={{ duration: 0.6 }}
      className="card-panel"
      style={{ textAlign: "center", backgroundColor: "#f7f9fb" }}
    >
      <h4 style={{ color: "#4b91b3" }}>My {data.datasets[0].label}</h4>{" "}
      <br></br>
      <img
        src={`/img/${country}.jpg`}
        alt={details}
        width="500"
        height="250"
      />{" "}
      <div className="row ">
        <div className="col s3"></div>
        <span className="col s3 trip-details">Destination: {country}</span>
        <span
          className="col s3 trip-details"
          style={{ backgroundColor: "#687864" }}
        >
          Currency: {currency}
        </span>
        <div className="col s3"></div>
      </div>
      <div className="row ">
        <div className="col s3"></div>
        <span
          className="col s3 trip-details"
          style={{ backgroundColor: "#687864" }}
        >
          Trip Length: {lengthOfTrip} Days
        </span>
        <span className="col s3 trip-details">
          Budget: {symbol}
          {conBudget}
        </span>
        <div className="col s3"></div>
      </div>
      <div className="row ">
        <div className="col s4"></div>
        <span className="col s4 trip-details">
          Estimated Daily Expense: {symbol}
          {dailyExpCon}
        </span>
        <span className="col s4"></span>
      </div>
      <Doughnut data={data} />
      <p>{details}</p>
    </motion.div>
  );
};

export default TripDetails;
