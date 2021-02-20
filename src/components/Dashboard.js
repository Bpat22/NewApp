import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { User } from '../redux/user';
import DashboardComponent from './DashboardComponent';
import createAccount from './createAccount';
import { Button, Container, Row, Col } from 'reactstrap';
import { Redirect } from 'react-router-dom';
//import {CDAccountsCard} from './CdAccountComponent';

const mapStateToProps = (state) => {
  return {
    user: state.user,
    token: state.token,
  };
};
// class Dashboard extends Component {
//   constructor(props) {
//     super(props);
//   }


function Dashboard(props){
    
    if(props.token.token ==  ''){
        return(
            <Redirect to="/login"/>
        )
    }
    console.log(props.user.cdAccounts)

  // render() {
    // console.log(this.props.user);
    // const checking = this.props.user.checkingAccounts;
    // console.log(this.props.user.savingsAccounts);
    // const savings = this.props.user.savingsAccounts;
    // const dashComp = checking.map(checkingAccount=>(<DashboardComponent {checkingAccounts.id} checkingAccounts{checkingAccount}/>
    //))

    const checking = props.user.checkingAccounts;
    const savings = props.user.savingsAccounts;

    // let isThereBalance = props.user.cdAccounts[0] ? props.user.sdAccounts[0].balance : "No Cd Account"
    // let isThereId = props.user.cdAccounts[0] ? props.user.cdAccounts[0].id : "No user found"

    return (
      <div className='projects'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <h1 className='display-4 text-center'>
                Welcome, {props.user.firstName} {props.user.lastName}
              </h1>
              <div className='btn-group'>
                <button
                  type='button'
                  className='btn btn-secondary btn-lg dropdown-toggle'
                  data-toggle='dropdown'
                  aria-haspopup='true'
                  aria-expanded='false'
                >
                  Create Account
                </button>
                <div className='dropdown-menu'>
                  <Link className='dropdown-item' to='/createAccount'>
                    Create Account
                  </Link>
                   <Link className='dropdown-item' to='/transactions'>
                    Transaction
                  </Link>
                </div>
              </div>
             

              <br />
            </div>
            <br />
            <div className='card text-center'>
              <div className='card-header bg-dark text-white'>
                <h4>Current Total Balance</h4>
                <h1> ${props.user.combinedBalance}.00</h1>
              </div>
            </div>
            <hr />

            <DashboardComponent
              type='Checking Account'
              account = {props.user.checkingAccounts}
            />
            <DashboardComponent
              type='Savings Account'
            account = {props.user.savingsAccounts}
             
            />
           
            <DashboardComponent
              type='Roth Ira'
        
              account={props.user.rothIRA}
              
            />
        
            <DashboardComponent
              type='Rollover Ira'
              account={props.user.rolloverIra}
              
            />
         <DashboardComponent
              type='Ira'
              account={props.user.regularIra}
             
            />
         
    
            
            
          </div>
        </div>
      </div>
    );
  //}
}

export default withRouter(connect(mapStateToProps)(Dashboard));
//export default Dashboard;
//<p>{props.user.firstName}</p>
