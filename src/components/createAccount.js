import { addCheckingAccount } from '../redux/ActionCreators';
import React, { useState, Component } from 'react';
import { Button, Container, Row, Col } from 'reactstrap';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {baseUrl} from '../shared/baseUrl';
import { addToken, addUser } from '../redux/ActionCreators';

const mapStateToProps = state => {
    return {
        user: state.user,
        token: state.token
    }
}
const mapDispatchToProps = (dispatch) => ({
  addUser: () => dispatch(addUser()),
  addToken: () => dispatch(addToken()),
});

class createAccount extends Component{
    constructor(props){
        super(props);
         this.state = {
        name:'',
      balance: '',
    };
    }
     handleChange = (event) => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
 handleSubmit = async (event) => {
    event.preventDefault();
    
    const bal = this.state.balance;
     
    await axios.post(
      'http://localhost:8080/api/Me/DBACheckingAccount', { balance: bal},{
          headers: { Authorization: `Bearer ${this.props.token.token}` }
      }
      
    );
   

   
    axios
      .get('http://localhost:8080/api/Me', {
        headers: { Authorization: `Bearer ${this.props.token.token}` },
      })
      // console.log(info.data);
      .then((response) => this.props.dispatch(addUser(response.data)));
    //console.log(response.data);
    //setRedirect(true);
    this.props.history.push('/Dashboard');
  };

    
    render(){
        return(
        
        
            
            <form onSubmit={this.handleSubmit}>
              <h1 className='my-4'>Create Account</h1>
              <input
                type='checkbox'
                className='form-control'
                name="checking"
                
              
                onChange={this.handleChange}
              />
              <br />
              <br />
              <input
                type='text'
                name="balance"
                className='form-control'
                placeholder='balance'
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
              
              <Link to="/Dashboard"> Go Back </Link>
              Now
            </form>
        
        )
    }
}
export default withRouter(connect(mapStateToProps)(createAccount));