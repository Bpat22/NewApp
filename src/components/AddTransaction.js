import React, { Component, useState } from 'react'
import { withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux';
import axios from 'axios';
import { addToken, addUser } from '../redux/ActionCreators';
import { Redirect } from 'react-router-dom';

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

class AddTransaction extends Component {
 
    constructor(props) {
        super(props)

        this.state = {
            amount: '',
            sourceId: this.props.user.savingsAccounts.id,
            targetId : '',
            redirect: false,
            type : '3'
        }
    }


    handleChange = (event, fieldName, checkbox) => {
        this.setState({
            [fieldName]: checkbox ? event.target.checked : event.target.value
        })
    }
    handleSubmit = async (event) => {
       
          const bal = this.state.amount;
        const Sourceid = this.props.user.savingsAccounts.id;
        const targetID = this.props.user.checkingAccounts.id;
                               
             console.log("here");                
    if(this.state.type == 3){
         axios.post(
      'http://localhost:8080/api/Me/Transfer', { amount: bal, sourceAccountID: Sourceid, targetAccountID: targetID},{
          headers: { Authorization: `Bearer ${this.props.token.token}` }
      });
    }
       else  if(this.state.type == 1){
         axios.post(
      'http://localhost:8080/api/Me/SavingsAccount/Deposit', { amount: bal},{
          headers: { Authorization: `Bearer ${this.props.token.token}` }
      });
    } else if(this.state.type ==2){
           axios.post(
      'http://localhost:8080/api/Me/SavingsAccount/Withdraw', { amount: bal},{
          headers: { Authorization: `Bearer ${this.props.token.token}` }
      });
    }
    
      
    
        console.log("Got here");
        
      const user = await axios.get('http://localhost:8080/api/Me', {
        headers: { Authorization: `Bearer ${this.props.token.token}` },
      });
       console.log("agter .get");
       this.props.dispatch(addUser(user));
     
           this.props.history.push('/dashboard');
        
         
    };
    if(redirect) {
    return <Redirect to='/Dashboard' />;
  }
   
            // .catch((err) => {
            //     console.log(err);
            //     dispath({type:GET_ERRORS,payload:err.response.data})
            //})
    

    render() {
        //account id
        let id = this.props.user.id;
        const { amount, description, type } = this.state;
        return (
            <div className="add-PBI">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <Link to={`/Dashboard`} className="btn btn-light">
                                Back to Wallet
                    </Link>
                            <h4 className="display-4 text-center">New Transaction</h4>
                            <p className="lead text-center">Account</p>
                            <form onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <input type="number" min="1" value={amount} onChange={event => this.handleChange(event, "amount", false)} className="form-control form-control-lg" placeholder="Amount" />
                                </div>
                                {/* <div className="form-group">
                                    <textarea value={description} onChange={event => this.handleChange(event, "description", false)} className="form-control form-control-lg" placeholder="Description"></textarea>
                                </div> */}
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlTextarea1">Transaction Type : </label>
                                    <div className="form-check form-check-inline">
                                        <input checked={type === '1'} className="form-check-input" type="radio" id="income" onChange={event => this.handleChange(event, "type", false)} value="1" />
                                        <label className="form-check-label" htmlFor="income">Deposit</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input checked={type === '2'} className="form-check-input" type="radio" id="expense" onChange={event => this.handleChange(event, "type", false)} value="2" />
                                        <label className="form-check-label" htmlFor="expense">Withdraw</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input checked={type === '3'} className="form-check-input" type="radio" id="expense" onChange={event => this.handleChange(event, "type", false)} value="3" />
                                        <label className="form-check-label" htmlFor="expense">Transfer</label>
                                    </div>
                                </div>
                                <input type="submit" className="btn btn-primary btn-block mt-4" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddTransaction));