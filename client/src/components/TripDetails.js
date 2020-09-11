import React from "react";
import { motion } from "framer-motion";
import { Doughnut } from "react-chartjs-2";

const TripDetails = ({ projectData, location, details }) => {
  let {
    country,
    lengthOfTrip,
    roomBoard,
    food,
    transportation,
    flight,
    misc,
  } = projectData;

  // Australia, Brazil, Canada, Egypt, France, Greece, Germany, India, Japan, Mexico, Norway, Russia, South Korea, Switzerland, Taiwan, England, Vietnam, China

  country = country.charAt(0).toUpperCase() + country.slice(1);

  let currency;
  let convert;
  let symbol;

  switch (country) {
    case "Australia":
      currency = " Australian dollar";
      convert = 0.73;
      symbol = " $ ";
      break;
    case "Brazil":
      currency = " Brazilian real";
      convert = 0.19;
      symbol = " R$ ";
      break;
    case "Canada":
      currency = " Canadian dollar";
      convert = 0.76;
      symbol = " $ ";
      break;
    case "Egypt":
      currency = " Egyptian pound";
      convert = 0.063;
      symbol = " e£ ";
      break;
    case "France":
      currency = " Euro";
      convert = 1.18;
      symbol = " € ";
      break;
    case "Greece":
      currency = " Euro";
      convert = 1.18;
      symbol = " € ";
      break;
    case "Germany":
      currency = " Euro";
      convert = 1.18;
      symbol = " € ";
      break;
    case "India":
      currency = " Indian rupee";
      convert = 0.014;
      symbol = " ₹ ";
      break;
    case "Japan":
      currency = " Japanese yen";
      convert = 0.0094;
      symbol = " ¥ ";
      break;
    case "Mexico":
      currency = " Mexican peso";
      convert = 0.046;
      symbol = " $ ";
      break;
    case "Norway":
      currency = " Norwegian krone";
      convert = 0.11;
      symbol = " kr ";
      break;
    case "Russia":
      currency = " Russian ruble";
      convert = 0.013;
      symbol = " RUB ";
      break;
    case "South Korea":
      currency = " South Korean won";
      convert = 0.00084;
      symbol = " ₩ ";
      break;
    case "Switzerland":
      currency = " Swiss franc";
      convert = 1.09;
      symbol = " CHF ";
      break;
    case "Taiwan":
      currency = " New Taiwan dollar";
      convert = 0.034;
      symbol = " NTD$ ";
      break;
    case "England":
      currency = " Pound (sterling)";
      convert = 1.32;
      symbol = " £ ";
      break;
    case "Vietnam":
      currency = " Vietnamese dong";
      convert = 0.000043;
      symbol = " đ ";
      break;
    case "China":
      currency = " Renminbi";
      convert = 0.15;
      symbol = " ¥ ";
      break;
    case "Morocco":
      currency = " Moroccan dirham";
      convert = 0.11;
      symbol = " DH ";
      break;
    case "Thailand":
      currency = " Thai baht";
      convert = 0.032;
      symbol = " ฿ ";
      break;
    case "Indonesia":
      currency = " Indonesian rupiah";
      convert = 0.000067;
      symbol = " Rp ";
      break;
    case "Costa Rica":
      currency = " Costa Rican colón";
      convert = 0.0017;
      symbol = " ₡ ";
      break;
    case "Spain":
      currency = " Euro";
      convert = 1.18;
      symbol = " € ";
      break;
    default:
      console.log("Country not available!");
  }

  const budget = roomBoard + food + transportation + flight + misc;
  const conBudget = budget * convert;
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
        backgroundColor: ["#134a63", "#31708E", "#5085A5", "#8FC1E3", "#adc9db"],
      },
    ],
  };
  return (
    <motion.div
      initial={{ x: "200vw" }}
      animate={{ x: 0 }}
      transition={{ duration: 0.6 }}
      className="card-panel"
      style={{
        textAlign: "center",
        backgroundColor: "#f7f9fb",
        padding: "25px 0 25px 0",
      }}
    >
      <div className="container">
        <div className="row">
          <h4 className="main-blue">My {data.datasets[0].label}</h4>{" "}
          <div className="row" style={{ textAlign: "center" }}>
            <img
              src={`/img/${country}.jpg`}
              alt={details}
              width="500"
              height="250"
            />
          </div>
          <div className="col s12" style={{ color: "#fff" }}>
            <h5 className="main-blue">{location} info</h5>
            <table className="centered">
              <tbody>
                <tr>
                  <td
                    style={{
                      backgroundColor: "#31708e",
                      borderRadius: "0px",
                    }}
                  >
                    Destination: {country}
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      backgroundColor: "#889c5a",
                      borderRadius: "0px",
                    }}
                  >
                    Budget: {symbol}
                    {conBudget}
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      backgroundColor: "#31708e",
                      borderRadius: "0px",
                    }}
                  >
                    Currency:{currency}
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      backgroundColor: "#889c5a",
                      borderRadius: "0px",
                    }}
                  >
                    Trip Length: {lengthOfTrip} Days
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      backgroundColor: "#31708e",
                      borderRadius: "0px",
                    }}
                  >
                    Estimated Daily Expense:{"  "}
                    {symbol}
                    {dailyExpCon}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="row">
          <Doughnut data={data} style />
          <p>{details}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default TripDetails;
