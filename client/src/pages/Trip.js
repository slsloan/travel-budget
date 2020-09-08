import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import TripItem from "../components/TripItem";
import TripDetails from "../components/TripDetails";
import projectData from "../data/projects.json";
import axios from "axios";

const Trip = (props) => {
  const { slug } = useParams();
  let { setUser } = props;

  const [tripInfo, setTripInfo] = useState({
    trips: projectData,
    selectedTrip: null,
  });

  // console.log(tripInfo.trips);
  // const [trips, setTrips] = useState([]);
  // const [selectedTrip, setSelectedTrips] = useState({});

  const { selectedTrip, trips } = tripInfo;

  useEffect(() => {
    axios
      .get(`/api/user/find-user/${slug}`)
      .then((res) => setTripInfo({ trips: res.data.trips }))
      .catch((err) => console.log(err))
      .then(
        axios
          .get(`/api/user/find-user/${slug}`)
          .then((res) => setUser(res.data.firstName))
          .catch((err) => console.log(err))
      );
  }, []);

  // setTrips(projectData);

  return (
    <div className="container">
      <br />

      <div className="row">
        <div className="col s4">
          <motion.ul
            className="sidenav sidenav-fixed collection with-header"
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            transition={{ delay: 0.25, duration: 0.6 }}
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
                  key={trip.userId}
                  location={trip.tripName}
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
          </motion.ul>
        </div>
        <motion.div
          initial={{ x: "200vw" }}
          animate={{ x: 0 }}
          transition={{ delay: 0.25, duration: 0.6 }}
          className="col s9 offset-s3"
        >
          {selectedTrip ? (
            <TripDetails
              projectData={selectedTrip}
              location={selectedTrip.tripName}
              details={selectedTrip.description}
              image={selectedTrip.screenshot}
              link={selectedTrip.github}
            />
          ) : (
            <div className="card-panel large center">
              <h3>Click on a trip to see details</h3>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Trip;
