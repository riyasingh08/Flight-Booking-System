import React from "react";
import "../styles/Contact.css";
//import Footer from "./Footer";
///import Navbar from "./Navbar";

function Contact() {
  return (
    <div>
      {/* <Navbar /> */}
      <div className="contact">
        <div className="contactBottom">
          <br />
          <br />
          <br />
          <br />
          <br />
          <h1
            style={{
              fontFamily: `Comic Sans MS`,
            }}
          >
            {" "}
            CONTACT US
          </h1>
          <br />
          <br />
          <center
            style={{
              fontFamily: `Comic Sans MS`,
              color: "#07070f",
              fontSize: "25px",
            }}
          >
            <p className="mb-4">
              <font face="Comic Sans MS" size="6">
                <b>
                  We're open for any suggestion.Your satisfaction is our
                  priority
                </b>
              </font>
            </p>
            <br></br>
            <p>
              <b>Address:</b>&nbsp;111/b JT Nagar Kolkata-700006
            </p>

            <p>
              <font color="#07070f">
                {" "}
                <b>Phone:</b>&nbsp;+91 9330935127
              </font>
            </p>

            <p>
              <font color="#07070f">
                {" "}
                <b>Email:</b>&nbsp;skyriders@gmail.com
              </font>
            </p>

            <p>
              <font color="#07070f">
                {" "}
                <b>Website:</b>&nbsp;skyriders@gmail.com
              </font>
            </p>
          </center>
        </div>
      </div>
    </div>
  );
}

export default Contact;
