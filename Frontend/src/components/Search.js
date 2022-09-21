import { useState } from "react";
import "./search.css";
import FormInput from "./FormInput";
// import Navbar from "../pages/Navbar";
// import Footer from "../pages/Footer";
import { Link, useParams } from "react-router-dom";
import Service from "../services/service";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const Search = () => {
  const { id } = useParams();
  // const navigate = useHistory();

  const [values, setValues] = useState({
    Origin: "",
    Destination: "",
    //birthday: "",
    // password: "",
    //confirmPassword: "",
  });

  const [flightFound, setFlightFound] = useState(false);
  const [flightSearchDetails, setFlightSearchDetails] = useState([]);
  const [hideForm, setHideForm] = useState(false);
  const inputs = [
    {
      id: 1,
      name: "Origin",
      type: "text",
      placeholder: "Enter your origin",
      //errorMessage: "Origin cannot be empty",
      label: "Origin",
      //pattern: "^[A-Za-z0-9 ]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "Destination",
      type: "text",
      placeholder: "Enter your destination",
      // errorMessage: "Destination cannot be empty",
      label: "Destination",
      required: true,
    },
    // {
    //   id: 3,
    //   name: "password",
    //   type: "date",
    //   placeholder: "Enter date",
    //   errorMessage: "Date cannot be empty",
    //   label: "Date",
    //   //pattern: `^(?=.[0-9])(?=.[a-zA-Z])(?=.[!@#$%^&])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
    //   required: true,
    // },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const flightSearch = async () => {
    try {
      const flightSearchAPI = `http://localhost:8081/search/getFlightInBetweenDestinations/${values.Origin}/${values.Destination}`;
      const response = await axios.get(flightSearchAPI);
      if (response.data.length !== 0) {
        setFlightFound(true);
        setHideForm(true);
        setFlightSearchDetails(response.data);
        console.log(response.data);
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "No flights found",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div>{/* <Navbar /> */}</div>
      {!hideForm ? (
        <div className="search">
          <form className="form2" onSubmit={handleSubmit}>
            <h1>Search Flights</h1>
            {inputs.map((input) => (
              <FormInput
                key={input.id}
                {...input}
                value={values[input.name]}
                onChange={onChange}
              />
            ))}
            <center>
              {" "}
              <button className="btn btn-danger" onClick={flightSearch}>
                Search
              </button>
            </center>
          </form>
        </div>
      ) : null}

      {flightFound ? (
        <div className="container">
          <h3>List of Available Flights</h3>
          <hr />
          <div>
            <table className="table table-bordered table-striped">
              <thead className="thead-dark">
                <tr>
                  <th> Id</th>
                  <th> Flight number</th>
                  <th> Origin</th>
                  <th> Destination</th>
                  <th> Date</th>
                  <th> Price</th>
                </tr>
              </thead>
              <tbody>
                {flightSearchDetails.map((Flight) => (
                  <tr>
                    <td>{Flight.id}</td>
                    <td>{Flight.flightNumber}</td>
                    <td>{Flight.origin}</td>
                    <td>{Flight.destination}</td>
                    <td>{Flight.flightDate}</td>
                    <td>{Flight.price}</td>
                    <td>
                      <Link to={"/booking/" + Flight.price}>
                        <button className="btn3"> BOOK FLIGHT </button>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : null}
      {/* <Footer /> */}
    </div>
  );
};

export default Search;