import React, { Component } from "react";
import HeroSection from './HeroSection';
import { homeObjFour } from './Data';

class Register extends Component {
  constructor() {
    super();
    this.state = {
      isRegister: false,
    };
  }
  login() {
    console.warn("state", this.state);
    fetch("http://localhost:8080/authenticate/createUser", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state),
    }).then((result) => {
      result.json().then((resp) => {
        console.log(resp.token);
        localStorage.setItem("auth", JSON.stringify(resp.token));
      });
    });
  }

  render() {
    return (
        // <HeroSection {...homeObjFour}>
      <form>
          
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholer="First Name"
            onChange={(e) => {
              this.setState({ username: e.target.value });
            }}
          />
          <br />
          <br />
          <input
            type="text"
            className="form-control"
            placeholer="Last Name"
            onChange={(e) => {
              this.setState({ password: e.target.value });
            }}
          />
          <br />
          <br />
          <input
            type="text"
            onChange={(e) => {
              this.setState({ active: e.target.value });
            }}
          />
          <br />
          <br />
          <input
            type="text"
            onChange={(e) => {
              this.setState({ role: e.target.value });
            }}
          />
          <br />
          <br />

          <button onClick={() => this.isRegister()}> Register</button>
          <br />
          <br />          
          <br />       
        </div>
      </form>
    //   </HeroSection>
    );
  }
}

export default Register;

