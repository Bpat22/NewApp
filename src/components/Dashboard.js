import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter, Link} from 'react-router-dom';
import { User } from '../redux/user';
import DashboardComponent from './DashboardComponent';
import createAccount from "./createAccount";



const mapStateToProps = state => {
    return {
        user: state.user,
        token: state.token
    }
}
class Dashboard extends Component {
    constructor(props){
        super(props);
    }
    render(){
        const checking = this.props.user.checkingAccounts;
        console.log(this.props.user.savingsAccounts);
        const savings = this.props.user.savingsAccounts;
    // const dashComp = checking.map(checkingAccount=>(<DashboardComponent {checkingAccounts.id} checkingAccounts{checkingAccount}/>
//))
        
      
        
         return (
         <div className="projects">
             <div className="container">
                    <div className="row">
             <div className="col-md-12">
              <h1 className="display-4 text-center">Welcome, {this.props.user.firstName} {this.props.user.lastName}</h1>
              <div className="btn-group">
                                <button type="button" className="btn btn-info btn-lg dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Create new
                        </button>
              <div className="dropdown-menu">
                                    <Link className="dropdown-item" to="/createAccount">Add Account</Link>
                                    <button  className="dropdown-item">Transaction</button>
                                </div>
             </div>
              <Link to="/createAccount"><button>
              create Account 
            </button>
             </Link>
                
                        
                           
                            <br />
                           
                            </div>
                            <br />
                            <div className="card text-center">
                                <div className="card-header bg-success text-white">
                                    <h4>Current Total Balance</h4>
                                    <h1> ${this.props.user.combinedBalance}</h1>
                                    
                                </div>
                            </div>
                            <hr />
                 
                            <DashboardComponent type = "Checking Account" balance = {checking.balance} id = {checking.id} />
                            <DashboardComponent type = "Savings Account" balance = {this.props.user.savingsAccounts.balance} id = {savings.id} />
                            <DashboardComponent type = "CD Account" balance = {this.props.user.cdAccounts[0].balance} id = {this.props.user.cdAccounts[0].id} />
                            <DashboardComponent type = "Roth Ira" balance = {this.props.user.rothIRA.balance} id = {this.props.user.rothIRA.id} />
                            <DashboardComponent type = "Rollover Ira" balance = {this.props.user.rolloverIra.balance} id = {this.props.user.rolloverIra.id} />
                            


                        </div>
                    </div>
                </div>
           
                        
        )
    
    }
    
   
}

export default withRouter(connect(mapStateToProps)(Dashboard));
//export default Dashboard;
//<p>{this.props.user.firstName}</p>