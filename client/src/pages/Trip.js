import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import TripItem from "../components/TripItem";
import TripDetails from "../components/TripDetails";
import projectData from "../data/projects.json";
import axios from "axios";

const Trip = (props) => {
  // destructure props
  const { user } = props;

  console.log(user);

  const [tripInfo, setTripInfo] = useState({
    trips: projectData,
    selectedTrip: null,
  });

  // const [trips, setTrips] = useState([]);
  // const [selectedTrip, setSelectedTrips] = useState({});

  const { selectedTrip, trips } = tripInfo;

  useEffect(() => {
    axios
      .get(`/api/user/find-user/${user}`)
      .then((res) => res.data)
      .catch((err) => console.log(err));
  }, []);

  // setTrips(projectData);

  return (
    <div className="container">
      <br />
      <div className="row">
        <div className="col s4">
          <ul
            className="sidenav sidenav-fixed collection with-header"
            style={{
              zIndex: "0",
              height: "auto",
              maxHeight: "300px",
              marginTop: "85px",
              marginLeft: "20px",
              paddingBottom: "0",
            }}
          >
            <li
              className="collection-header white-text"
              style={{ backgroundColor: "#31708E", position: "sticky", top: 0 }}
            >
              <h4>
                Trips
                <span style={{ float: "right" }}>
                  <i className="material-icons" style={{ fontSize: "3rem" }}>
                    landscape
                  </i>
                </span>
              </h4>
            </li>
            {trips ? (
              trips.map((trip) => (
                <TripItem
                  key={trip.id}
                  location={trip.name}
                  isSelected={trip === selectedTrip}
                  selectTrip={() =>
                    setTripInfo({ ...tripInfo, selectedTrip: trip })
                  }
                />
              ))
            ) : (
              <p>No trips</p>
            )}
            <Link to={"/budget"} className="waves-effect white-text create_btn">
              Create A Trip
              <span style={{ float: "right" }}>
                <i className="material-icons">add</i>
              </span>
            </Link>
          </ul>
        </div>
        <div className="col s8 offset-s3">
          {selectedTrip ? (
            <TripDetails
              location={selectedTrip.name}
              details={selectedTrip.description}
              image={selectedTrip.screenshot}
              link={selectedTrip.github}
            />
          ) : (
            <div className="card-panel large center">
              <h3>Click on a trip to see details</h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Trip;
