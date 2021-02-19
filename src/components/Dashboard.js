import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { User } from '../redux/user';
import DashboardComponent from './DashboardComponent';
import createAccount from './createAccount';
import { Button, Container, Row, Col } from 'reactstrap';

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
              balance={checking.balance}
              id={checking.id}
            />
            <DashboardComponent
              type='Savings Account'
              balance={props.user.savingsAccounts.balance}
              id={savings.id}
            />
           
            <DashboardComponent
              type='Roth Ira'
              balance={props.user.rothIRA.balance}
              id={props.user.rothIRA.id}
            />
        
            <DashboardComponent
              type='Rollover Ira'
              balance={props.user.rolloverIra.balance}
              id={props.user.rolloverIra.id}
            />
         <DashboardComponent
              type='CD Account'
              balance={props.user.cdAccounts[0].balance}
              id={props.user.cdAccounts[0].id}
              // balance={isThereBalance}
              // id={isThereId}
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
