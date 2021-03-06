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
      'http://localhost:8080/api/authenticate',
      { userName: user, password: pass }
    );
    this.props.dispatch(addToken(token.data.jwt));

    localStorage.setItem('auth', token.data.jwt);
    await axios
      .get('http://localhost:8080/api/Me', {
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
                name="userName"
                placeholder='User Name'
                required
                onChange={this.handleChange}
              />
              <br />
              <br />
              <input
                type='password'
                name="password"
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
