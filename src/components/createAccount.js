import { addCheckingAccount } from '../redux/ActionCreators';
import React, { useState, Component } from 'react';
import { Button, Container, Row, Col } from 'reactstrap';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { homeObjOne } from './Data';
import HeroSection from './HeroSection';

import { baseUrl } from '../shared/baseUrl';
import { addToken, addUser } from '../redux/ActionCreators';

const mapStateToProps = (state) => {
  return {
    user: state.user,
    token: state.token,
  };
};
const mapDispatchToProps = (dispatch) => ({
  addUser: () => dispatch(addUser()),
  addToken: () => dispatch(addToken()),
});

class createAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      balance: '',
        endpoint: ''
    };
  }
  handleChange = (event) => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
handleAccount = (event, fieldName) => {
    this.setState({
      [fieldName]: event.target.value,
      // [targetId]: event.target.value
    });
  };
  handleSubmit = async (event) => {
    event.preventDefault();

    const bal = this.state.balance;
      const end = this.state.endpoint;

    await axios.post(
      'http://localhost:8080/api/Me/' + end,
      { balance: bal },
      {
        headers: { Authorization: `Bearer ${this.props.token.token}` },
      }
    );

    await axios
      .get('http://localhost:8080/api/Me', {
        headers: { Authorization: `Bearer ${this.props.token.token}` },
      })
      // console.log(info.data);
      .then((response) => this.props.dispatch(addUser(response.data)));
    //console.log(response.data);
    //setRedirect(true);
    this.props.history.push('/Dashboard');
  };

  render() {
    return (
      <Container>
        <Row>
          <Col md={8}>
            <HeroSection {...homeObjOne} />
          </Col>
          <Col md={4}>
            <form onSubmit={this.handleSubmit}>
              <br></br>
              <h2 className>Create Account</h2>
              <br />
              <div class='dropdown'>
               
                  <select className='btn btn-secondary btn-sm dropdown-toggle' value={this.state.endpoint} onChange= {(event) => this.handleAccount(event, 'endpoint')}>
                
                <option selected value = '0'>From Account</option>
                  <option value='CheckingAccount'>CheckingAccount</option>
                  <option value='SavingsAccount'>SavingsAccount</option>
                  <option value='CDAccounts'>CDAccount</option>
                  <option value='IRA'>IRAAccount</option>
                    <option value='RolloverIRA'>RolloverIRAAccount</option>
                    <option value='RothIRA'>RothIRAAccount</option>
                </select>
                </div>
                {/* </div> */}
                <div>
                <br />
                <br />
                <input
                  type='text'
                  name='balance'
                  className='form-control'
                  placeholder='Amount'
                  required
                  onChange={this.handleChange}
                />
              </div>
              <br /><br />
              <button className='w-100 btn btn-lg btn-primary' type='submit'>
                Create Account
              </button>
              <br /><br />
              Go back to
              <Link to='/Dashboard'> Account Detail </Link>
            </form>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default withRouter(connect(mapStateToProps)(createAccount));
