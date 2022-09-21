import React, { Component } from "react";
import { Routes, Route, Link, Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AuthService from "./services/auth.service";
import Booking from "./components/Booking";
import Login from "./components/login.component";
import Register from "./components/register.component";
import Home from "./pages/Home";
import Profile from "./components/profile.component";
import BoardUser from "./components/board-user.component";
import BoardCompany from "./components/board-company.component";
import BoardAdmin from "./components/board-admin.component";
import About from "./pages/About";
import Contact from "./pages/Contact";
// import AuthVerify from "./common/auth-verify";
import EventBus from "./common/EventBus";
import Search from "./components/Search";
import Flight from "./components/Flight";
import Admin from "./components/Admin";
import AddFlight from "./components/AddFlight";

class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
        showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
        showAdminBoard: user.roles.includes("ROLE_ADMIN"),
      });
    }

    EventBus.on("logout", () => {
      this.logOut();
    });
  }

  componentWillUnmount() {
    EventBus.remove("logout");
  }

  logOut() {
    AuthService.logout();
    this.setState({
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    });
  }

  render() {
    const { currentUser, showModeratorBoard, showAdminBoard } = this.state;

    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          {/*<Link to={"/"} className="navbar-brand">
            Flightiva
    </Link>*/}
          <div className="navbar-brand">
          <div className="navbar-brand">Sky Riders</div>
          </div>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/"} className="nav-link">
                Home
              </Link>
            </li>

            {showModeratorBoard && (
              <li className="nav-item">
                <Link to={"/mod"} className="nav-link">
                  Moderator Board
                </Link>
              </li>
            )}

            {showAdminBoard && (
              <li className="nav-item">
                <Link to={"/admin"} className="nav-link">
                  Admin Board
                </Link>
              </li>
            )}

            {showAdminBoard && (
              <li className="nav-item">
                <Link to={"/user"} className="nav-link">
                  User
                </Link>
              </li>
            )}
          </div>

          {currentUser ? (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/profile"} className="nav-link">
                  {currentUser.username}
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/aboutus"} className="nav-link">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/contactus"} className="nav-link">
                  Contact Us
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/search"} className="nav-link">
                  Search Flight
                </Link>
              </li>
              <li className="nav-item">
                <a href="/login" className="nav-link" onClick={this.logOut}>
                  LogOut
                </a>
              </li>
            </div>
          ) : (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/login"} className="nav-link">
                  Login
                </Link>
              </li>

              <li className="nav-item">
                <Link to={"/register"} className="nav-link">
                  Sign Up
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/flight"} className="nav-link">
                  Flight details
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/search"} className="nav-link">
                  Search
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/aboutus"} className="nav-link">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/contactus"} className="nav-link">
                  Contact Us
                </Link>
              </li>
            </div>
          )}
        </nav>

        {/* <div className="container"> */}
          <Routes>
            {/*<Route exact path="/" element={<Home />} />*/}
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/profile" element={<Profile />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/user" element={<BoardUser />} />
            <Route path="/mod" element={<BoardCompany />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/aboutus" element={<About />} />
            <Route path="/contactus" element={<Contact />} />
            <Route path="/search" element={<Search />} />
            <Route path="/flight" element={<Flight />} />
            <Route path="/addflight" element={<AddFlight />} />
            <Route path="/updateById/:id"element={<AddFlight />} />
            <Route path="/booking/:price" element={<Booking />} />
          </Routes>
        {/* </div> */}

        {/*<AuthVerify logOut={this.logOut}/> */}
      </div>
    );
  }
}

export default App;
