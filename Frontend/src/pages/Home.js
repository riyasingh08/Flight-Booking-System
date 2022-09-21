import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/LandPage.jpg";
// import Footer from "./Footer";
//import Navbar from "./Navbar";
import "../styles/Home.css";
import Footer from "./Footer";

function Home() {
  return (
    <div>
      {" "}
      <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
        <div className="headerContainer">
          <h2>Sky Riders </h2>
          <br />
          <p> The Sky is Waiting for you.</p>
          <Link to="/login">
            <button> BOOK NOW </button>
          </Link>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Home;
