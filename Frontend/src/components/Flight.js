import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FlightService from "../services/FlightService";

const Flight = () => {
  const [Flight, setFlight] = useState([]);
  const init =() => {
    FlightService.getAll()
      .then((response) => {
        console.log("Printing Flight Details", response.data);
        setFlight(response.data);
      })
      .catch((error) => {
        console.log("Something went wrong", error);
      });
    
   
   };

  useEffect(() => {
    init();
  }, []);



  return (
    <div className="fly">
    <div className="container" id="plist" >
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <h4>List of Available Flights</h4>
      <hr />
      <div className="flight">
        <table className="table table-bordered table-striped" id="tabp">
          <thead className="thead-dark">
            <tr>
              <th> Id</th>
              <th> Flight Number</th>
              <th> Origin</th>
              <th> Destination </th>
              <th> FlightDate </th>
              <th> Price </th>
            </tr>
          </thead>
          <tbody>
            {Flight.map((Flight) => (
              <tr key={Flight.id}>
                <td>{Flight.id}</td>
                <td>{Flight.flightNumber}</td>
                <td>{Flight.origin}</td>
                <td>{Flight.destination}</td>
                <td>{Flight.flightDate}</td>
                <td>{Flight.price}</td>

                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
    
  );
};

export default Flight;
