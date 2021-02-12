import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import { User } from '../redux/user';


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
        const test = this.props.user;
        console.log(this.props);
         return (
        <div>
            <h3>Dashboard</h3>
        <p>{this.props.user.firstName}</p>
        </div>
    )
    }
    
   
}

export default withRouter(connect(mapStateToProps)(Dashboard));
//export default Dashboard;