import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import FlightService from "../services/FlightService";

const AddFlight = () => {
  const [flightNumber, setFlightNumber] = useState("");
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [flightDate, setFlightDate] = useState("");
  const [price, setPrice] = useState("");
  //const navigate = useNavigate();
  const { id } = useParams();

  const saveFlight = (o) => {
    o.preventDefault();
    const Flight = { flightNumber, origin, destination, flightDate, price };

    if (id) {
      //update
      FlightService.update(Flight,id)
        .then((response) => {
          alert("Flight Data Updated successfully!");
          console.log("Flight data updated successfully", response.data);
        })
        .catch((error) => {
          console.log("Something went wrong", error);
        });
    } else {
      // create
      FlightService.create(Flight)
        .then((response) => {
          alert("Flight Details Saved");
          console.log(
            "Flight details has been added successfully",
            response.data
          );
        })
        .catch((error) => {
          console.log("Something went wrong", error);
        });
    }
  };

  useEffect(() => {
    if (id) {
      FlightService.get(id)
        .then((Flight) => {
          setFlightNumber(Flight.data.flightNumber);
          setOrigin(Flight.data.origin);
          setDestination(Flight.data.destination);
          setFlightDate(Flight.data.flightDate);
          setPrice(Flight.data.price);
        })
        .catch((error) => {
          console.log("Something went wrong", error);
        });
    }
  }, []);

  return (
    <div className="addfly">
    <div className="container">
      <center>
        <h2>
          <b>
            <u>Add/Update FLIGHT</u>
          </b>
        </h2>
        <form className="form3">
          <div className="form-group">
            {/* <p className="prsub">Product Name:</p> */}
            <input
              type="text"
              className="form-control col-4"
              id="flightNumber"
              value={flightNumber}
              onChange={(o) => setFlightNumber(o.target.value)}
              placeholder=" Flight Number:"
            />
          </div>

          <div className="form-group">
            {/* <p className="prsub">Product Price:</p> */}
            <input
              type="text"
              className="form-control col-4"
              id="origin"
              value={origin}
              onChange={(o) => setOrigin(o.target.value)}
              placeholder="Origin:"
            />
          </div>

          <div className="form-group">
            {/* <p className="prsub">Product Price:</p> */}
            <input
              type="text"
              className="form-control col-4"
              id="destination"
              value={destination}
              onChange={(o) => setDestination(o.target.value)}
              placeholder="Destination:"
            />
          </div>

          <div className="form-group">
            {/* <p className="prsub">Product Price:</p> */}
            <input
              type="text"
              className="form-control col-4"
              id="flightDate"
              value={flightDate}
              onChange={(o) => setFlightDate(o.target.value)}
              placeholder="Flight Date:"
            />
          </div>

          <div className="form-group">
            {/* <p className="prsub">Product Price:</p> */}
            <input
              type="text"
              className="form-control col-4"
              id="price"
              value={price}
              onChange={(o) => setPrice(o.target.value)}
              placeholder="Price:"
            />
          </div>
          <div>
            <button className="btn1" onClick={(o) => saveFlight(o)} id="svep">
              Save
            </button>
            <Link to="/admin">
              <button className="btn4">Back To list</button>
            </Link>
          </div>
        </form>
      </center>
    </div>
    </div>
  );
};

export default AddFlight;