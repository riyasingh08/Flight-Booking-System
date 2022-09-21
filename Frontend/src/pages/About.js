import React from "react";
import "../styles/About.css";
//import Footer from "./Footer";
//import Navbar from "./Navbar";
function About() {
  return (
    <div>
      {/* <Navbar /> */}
      <div className="about">
        <div className="aboutBottom">
          <br />
          <h1
            style={{
              fontFamily: `Comic Sans MS`,
              paddingTop: `10px`,
            }}
          >
            {" "}
            ABOUT US
          </h1>
          <br />
          <br />
          <p
            style={{
              fontFamily: `Comic Sans MS`,
              color: "#000059",
              fontSize: "20px",
            }}
          >
            <b>
              Sky Riders is India's fastest growing online travel company.It’s
              easy around here. 100 million travellers use us as their go-to
              tool, comparing flight deals and offers from more than 1,200
              airlines and travel providers. With so many options to choose from
              in one place, you can say hello to savings, and goodbye to stress
              – here’s how.
              <br /> <br />
              Our Promises- We will always work to deliver the cheapest possible
              price.We will always show all-in pricing, no hidden fees, no extra
              charges. Beginning to end customer support. Before, during, or
              after your trip, we are here to help anytime you need us. <br />
              <br />
              Have access to any of your reservations either through desktop or
              mobile devices that allow you to stay up to date on travel alerts,
              schedule changes, or anything you might want to know about your
              upcoming trip.
            </b>
          </p>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default About;
