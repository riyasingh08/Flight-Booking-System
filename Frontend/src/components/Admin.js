import React from "react";
import { useEffect, useState } from "react";
import "./admin.css";
import { Link } from "react-router-dom";
import FlightService from "../services/FlightService";

const Admin = () => {
  const [Flight, setProducts] = useState([]);

  const init = () => {
    FlightService.getAll()
      .then((response) => {
        console.log("Printing Products", response.data);
        setProducts(response.data);
      })
      .catch((error) => {
        console.log("Something went wrong", error);
      });
  };

  useEffect(() => {
    init();
  }, []);

  const handleDelete = (id) => {

    if (window.confirm('Are you sure about deleting this Flight ?')){
    console.log("Printing id", id);
    FlightService.remove(id)
      .then((response) => {
        console.log("Flight details has been Deleted", response.data);
        init();
      })
      .catch((error) => {
        console.log("Something went wrong", error);
      });
    }
  };

  return (
    <div className="admin">
      <div className="container" id="plist">
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <h4>List of available Flights</h4>
        <hr />
        <div>
          <Link to="/addflight">
            <button className="button6">ADD FLIGHT</button>
          </Link>
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
                  <td>
                    <b>{Flight.id}</b>
                  </td>
                  <td>
                    <b>{Flight.flightNumber}</b>
                  </td>
                  <td>
                    <b>{Flight.origin}</b>
                  </td>
                  <td>
                    <b>{Flight.destination}</b>
                  </td>
                  <td>
                    <b>{Flight.flightDate}</b>
                  </td>
                  <td>
                    <b>{Flight.price}</b>
                  </td>

                  <td>
                    <Link to={`/updateById/${Flight.id}`}>
                      <button className="btn1">UPDATE FLIGHT</button>
                    </Link>
                    <button
                      className="btn2"
                      //   id="dprod"
                      onClick={() => {
                        handleDelete(Flight.id);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Admin;
