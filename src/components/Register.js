import React, { Component, useState } from "react";
import { Button, Container, Row, Col } from 'reactstrap';
import HeroSection from './HeroSection';
import { homeObjFour } from './Data';
import { Redirect } from 'react-router-dom';
import { addToken, addUser } from '../redux/ActionCreators';
import axios from 'axios';
import { withRouter, Link, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

function Register() {

  const [userName, setuserName]=useState("");
  const [password, setPassword]=useState("");
  const active = true;
  const [firstName, setfirstName]=useState("");
  const [email, setEmail]=useState("");
  const [ssn, setSSN]=useState("");
  const [lastName, setlastName]=useState("");
  const [birthDate,setBirthDate]=useState("");
  const history=useHistory();

  async function signUp(){
    let item = {userName, password, active, firstName, lastName, birthDate, ssn, email}
    console.warn(item)
  
    let result = await fetch("http://localhost:8080/api/authenticate/createUser", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item)      
    });
    result=await result.json();
      
    console.warn("result", result)
    localStorage.setItem("user-info", JSON.stringify(result));
    history.push("/login");
  }
  
    return (
      <Container>
        <Row>
          <Col md={8}>
            <HeroSection {...homeObjFour} />
          </Col>
          <Col md={4}>
            {/* <form onSubmit={this.handleSubmit}> */}
              <h1 className='my-4'>Please log in</h1>
              <input type='userName' className='form-control' placeholder='User Name' required
                value={userName} onChange={(e) => setuserName(e.target.value)} 
              />
              <br /><br />
              <input type='password' className='form-control' placeholder='Password' required
                value={password} onChange={(e) => setPassword(e.target.value)}
              />
              <br /><br />
              <input type='firstName' className='form-control' placeholder='First Name' required
                value={firstName} onChange={(e) => setfirstName(e.target.value)}
              />              
              <br /><br />
              <input type='lastName' className='form-control' placeholder='Last Name' required
                value={lastName} onChange={(e) => setlastName(e.target.value)}
              />
              <br /><br />
              <input type='email' className='form-control' placeholder='SSN' required
                value={ssn} onChange={(e) => setSSN(e.target.value)}
              />
               <br /><br />
              <input type='email' className='form-control' placeholder='Email' required
                value={email} onChange={(e) => setEmail(e.target.value)}
              />
               <br /><br />
              <input type='birthDate' className='form-control' placeholder='Birthday' required
                value={birthDate} onChange={(e) => setBirthDate(e.target.value)}
              />
              <br /><br />
              <button className='w-100 btn btn-lg btn-primary' onClick={signUp}>
                Register
              </button>
            {/* </form> */}
          </Col>
        </Row>
      </Container>
    );
}

export default Register;

