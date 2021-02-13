
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

class DashboardComponent extends Component{
    
    constructor(props){
        super(props);
    }
    render(){
        return(
        
            <div className="container">
                <div className="card card-body bg-light mb-3">
                    <div className="row" >
                        <div className="col-lg-4 col-md-3 col-6">
                            <h3>{this.props.type}</h3>
                            <p>Account Number: {this.props.id}</p>                            
                        </div>

                        {/* to display account open date
                        <div className="col-lg-4 col-md-3 col-6">
                            <h3>{this.props.type}</h3>
                            <p>Open Date: {this.props.dateopened}</p>                            
                        </div> */}
                        
                        <div className="col-lg-4 col-md-3 col-6 text-center">
                            <h3>Balance</h3>
                            <h1> {this.props.balance}</h1>
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }
}
export default DashboardComponent;