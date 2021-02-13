import React, { useState } from 'react';
import { Button, Container, Row, Col } from 'reactstrap';
import { Redirect } from 'react-router-dom';
import HeroSection from './HeroSection';
import { homeObjFour } from './Data';
import { addToken, addUser } from '../redux/ActionCreators';
import axios from 'axios';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';

const mapDispatchToProps = (dispatch) => ({
  addUser: () => dispatch(addUser()),
  addToken: () => dispatch(addToken()),
});

class LoginPage extends React.Component {
  //const [redirect, setRedirect] = useState(false);
  constructor(props) {
    super(props);
    this.state = {
      err: '',
      userName: '',
      password: '',
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const user = this.state.userName;
    const pass = this.state.password;
    const token = await axios.post(
      'http://localhost:8080/api' + '/authenticate',
      { username: user, password: pass }
    );
    this.props.dispatch(addToken(token.data.jwt));

    localStorage.setItem('auth', token.data.jwt);
    axios
      .get('http://localhost:8080/api' + '/Me', {
        headers: { Authorization: `Bearer ${token.data.jwt}` },
      })
      // console.log(info.data);
      .then((response) => this.props.dispatch(addUser(response.data)));
    //console.log(response.data);
    //setRedirect(true);
    this.props.history.push('/Dashboard');
  };

  if(redirect) {
    return <Redirect to='/Dashboard' />;
  }

  handleChange = (event) => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  render() {
    //   return (

    //        <body class="login-Wrapper">
    //          <div class="login-container">
    //          <h1> User Login</h1>
    //         <form onSubmit={this.handleSubmit}>
    //         <div class= "input-div">
    //             <h2> Username </h2>
    //         <input  type= "text" name="userName" onChange={this.handleChange}/>
    //             <br/>
    //             <h2> Password </h2>
    //         <input   type="password" name= "password" onChange={this.handleChange}/>
    //             <br/>
    //             <button type ="submit" class="btn btn-primary">Login</button>
    //         </div>
    //         </form>
    //         </div>
    //         </body>

    // )

    return (
      <Container>
        <Row>
          <Col md={8}>
            <HeroSection {...homeObjFour} />
          </Col>

          <Col md={4}>
            <form onSubmit={this.handleSubmit}>
              <h1 className='my-4'>Please log in</h1>
              <input
                type='userName'
                className='form-control'
                placeholder='User Name'
                required
                onChange={this.handleChange}
              />
              <br />
              <br />
              <input
                type='password'
                className='form-control'
                placeholder='Password'
                required
                onChange={this.handleChange}
              />
              <br />
              <br />
              <button className='w-100 btn btn-lg btn-primary' type='submit'>
                Log in
              </button>
              <br />
              <br />
              "Not Enrolled?"
              <Link to="/Register"> Sign Up </Link>
              Now
            </form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default withRouter(connect(mapDispatchToProps)(LoginPage));

/*const submit = async (e) => {
        e.preventDefault();

        const response = await fetch('http://localhost:8080/authenticate', {
            method: 'POST',
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username,
                password
            }), 
            
            
        });  

        const content = await response.json();
        localStorage.setItem("auth", content.jwt);
        console.log(content);
       // props.setName(content.name);
        setRedirect(true);
        
    }*/

// import React, { Component, useEffect } from "react";
// import { Link, Redirect } from "react-router-dom";

// class Login extends Component {

//   login() {
//     console.warn("state", this.state);
//     fetch("http://localhost:8080/Me", {
//       method: "POST",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(this.state),
//     }).then((result) => {
//       result.json().then((resp) => {
//         console.log(resp);
//         console.log(resp.jwt);
//         localStorage.setItem("auth", resp.jwt);
//        // let history = useHistory();

//        this.props.history.push("/Dashboard");

//       });
//     });
//   }

//   render() {
//     return (
//       <div>
//         <input
//           type="text" placeholder = "username"
//           onChange={(e) => {
//             this.setState({ username: e.target.value });
//           }}
//         />
//         <br />
//         <br />
//         <input
//           type="password" placeholder="password"
//           onChange={(e) => {
//             this.setState({ password: e.target.value });
//           }}
//         />
//         <br />
//         <br />
//         <button onClick={() => this.login()}> Login</button>
//         <br />
//         <br />
//         "Not Enrolled?"
//         <Link to="/register">Sign Up</Link>
//         Now
//         <br />
//         <br />
//       </div>
//     );
//   }
// }

// export default Login;
