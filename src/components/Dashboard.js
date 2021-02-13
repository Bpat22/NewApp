import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import { User } from '../redux/user';
import DashboardComponent from './DashboardComponent';


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
                            


                        </div>
                    </div>
                </div>
           
                        
        )
    
    }
    
   
}

export default withRouter(connect(mapStateToProps)(Dashboard));
//export default Dashboard;
//<p>{this.props.user.firstName}</p>