import React, { useState } from "react";
import TripItem from "../components/TripItem";
import TripDetails from "../components/TripDetails";
import projectData from "../data/projects.json";

const Trip = () => {
  const [tripInfo, setTripInfo] = useState({
    trips: projectData,
    selectedTrip: null,
  });

  const { selectedTrip, trips } = tripInfo;

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
              height: "300px",
              marginTop: "85px",
              marginLeft: "20px",
              paddingBottom: "0",
            }}
          >
            <li className="collection-header">
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
                selectTrip={() => setTripInfo({ ...trips, selectedTrip: trip })}
              />
            ))) : (<p>Create a Trip</p>)}
            
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
            <h3>Click on a trip to see details</h3>
          )}
        </div>
      </div>
    </div>
  );
};

export default Trip;
