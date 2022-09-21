import { useState } from "react";
import "./signup.css";
import FormInput from "./FormInput";
//import Navbar from "../pages/Navbar";
//import Footer from "../pages/Footer";
import { useParams } from "react-router-dom";
import BookingService from "../services/BookingService";
import { useNavigate } from "react-router-dom";
import FetchPaymentLink from "./FetchPaymentLink";

const Booking = () => {
  const { price } = useParams();
  const navigate = useNavigate();

  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    gender: "",
  });

  const inputs = [
    {
      id: 1,
      name: "firstName",
      type: "text",
      placeholder: "Enter your First Name",
      errorMessage:
        "First Name should be 3-16 characters and shouldn't include any special character!",
      label: "First Name",
      pattern: "^[A-Za-z0-9 ]{3,16}$",
      required: true,
    },
    {
      id: 1,
      name: "lastName",
      type: "text",
      placeholder: "Enter your Last Name",
      errorMessage:
        "Last Name should be 3-16 characters and shouldn't include any special character!",
      label: "Last Name",
      pattern: "^[A-Za-z0-9 ]{3,16}$",
      required: true,
    },
    {
      id: 3,
      name: "gender",
      type: "text",
      placeholder: "Enter Your Gender",
      //   errorMessage:
      //     "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Gender",
      //   pattern: `^(?=.[0-9])(?=.[a-zA-Z])(?=.[!@#$%^&])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const addCust = (ev) => {
    // let cust_id=id;
    let firstName = values.firstName;
    let lastName = values.lastName;
    let gender = values.gender;
    const booking = { firstName, lastName, gender };
    console.log("Requested booking", booking);
    FetchPaymentLink.FetchPaymentLink(price).then((value) => {
      alert("Booking Succesfull");
      window.open(value);
    });
  };

  return (
    <div>
      <div></div>
      <div className="signup">
        <form className="form1" onSubmit={handleSubmit}>
          <h1>ENTER YOUR DETAILS</h1>
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
            <button className="btn btn-danger" onClick={(e) => addCust(e)}>
              Submit
            </button>
          </center>
        </form>
      </div>
    </div>
  );
};

export default Booking;