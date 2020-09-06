import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import TripItem from "../components/TripItem";
import TripDetails from "../components/TripDetails";
import projectData from "../data/projects.json";
import axios from "axios";

const Trip = (props) => {
  const { slug } = useParams();
  let { history, setUser } = props;

  const [tripInfo, setTripInfo] = useState({
    trips: projectData,
    selectedTrip: null,
  });

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
      <br />

      <div className="row">
        <div class="col s6 m4">
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
              style={{ backgroundColor: "#31708E" }}
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
            <Link
              to={"/budget"}
              className="waves-effect btn collection-item white-text create-trip-button"
              style={{ backgroundColor: "#31708E" }}
            >
              Create A Trip
              <span style={{ float: "right" }}>
                <i className="material-icons">add</i>
              </span>
            </Link>
          </ul>
        </div>
        <div class="col s6 m6">
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
