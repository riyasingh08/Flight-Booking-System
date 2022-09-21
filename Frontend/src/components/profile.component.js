import React, { Component } from "react";
import AuthService from "../services/auth.service";
import "./admin.css";
//import "./formInput.css";
export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: AuthService.getCurrentUser(),
    };
  }
  render() {
    const { currentUser } = this.state;
    return (
      <div className="profilepg">
        <div className="container">
          <header className="jumbotron">
            <br></br>
            <br></br>
            <h4>
              <strong>{currentUser.username}</strong> Profile
            </h4>
          </header>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <b>
            <center>
              <p>
                <p4>
                  <strong>Token:</strong>{" "}
                  {currentUser.accessToken.substring(0, 20)} ...{" "}
                  {currentUser.accessToken.substr(
                    currentUser.accessToken.length - 20
                  )}
                </p4>
              </p>
              <p>
                <p4>
                  <strong>Id:</strong> {currentUser.id}
                </p4>
              </p>
              <p>
                <p4>
                  <strong>Email:</strong> {currentUser.email}
                </p4>
              </p>
              <p4>
                <strong>Authorities:</strong>

                {currentUser.roles &&
                  currentUser.roles.map((role, index) => (
                    <li key={index}>{role}</li>
                  ))}
              </p4>
            </center>
          </b>
        </div>
      </div>
    );
  }
}
