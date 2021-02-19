import React, { Component, useState } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import { addToken, addUser } from '../redux/ActionCreators';
import { Redirect } from 'react-router-dom';
import { ButtonGroup } from 'reactstrap';

const mapStateToProps = (state) => {
  return {
    user: state.user,
    token: state.token,
  };
};
const mapDispatchToProps = (dispatch) => ({
  addUser: () => dispatch(addUser()),
  addToken: () => dispatch(addToken()),
  dispatch,
});

class AddTransaction extends Component {
  constructor(props) {
    super(props);

    this.state = {
      amount: '',
      sourceId: '',
      targetId: '',
      // redirect: false,
      type: '3',
    };
  }

  handleChange = (event, fieldName, checkbox) => {
    this.setState({
      [fieldName]: checkbox ? event.target.checked : event.target.value,
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
    const bal = this.state.amount;
    const sourceId = this.state.sourceId;
    const targetId = this.state.targetId;
      console.log(sourceId);

    console.log('here');
    if (this.state.type == 3) {
      await axios.post(
        'http://localhost:8080/api/Me/Transfer',
        { amount: bal, sourceAccountID: sourceId, targetAccountID: targetId },
        {
          headers: { Authorization: `Bearer ${this.props.token.token}` },
        }
      );
    } else if (this.state.type == 1) {
      await axios.post(
        'http://localhost:8080/api/Me/SavingsAccount/Deposit',
        { amount: bal },
        {
          headers: { Authorization: `Bearer ${this.props.token.token}` },
        }
      );
    } else if (this.state.type == 2) {
      await axios.post(
        'http://localhost:8080/api/Me/SavingsAccount/Withdraw',
        { amount: bal },
        {
          headers: { Authorization: `Bearer ${this.props.token.token}` },
        }
      );
    }
    console.log('Got here');

    const user = await axios.get('http://localhost:8080/api/Me', {
      headers: { Authorization: `Bearer ${this.props.token.token}` },
    });
    console.log('after .get', user);
    this.props.dispatch(addUser(user.data));

    this.props.history.push('/dashboard');
  };
  //     if(redirect) {
  //     return <Redirect to='/Dashboard' />;
  //   }

  // .catch((err) => {
  //     console.log(err);
  //     dispath({type:GET_ERRORS,payload:err.response.data})
  //})

  render() {
    //account id
    let id = this.props.user.id;
    const { amount, description, type } = this.state;
    return (
      <div className='add-PBI'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-8 m-auto'>
              <Link to={`/Dashboard`} className='btn btn-light'>
                Back to Account Detail
              </Link>
              <h3 className='display-4 text-center'>New Transaction</h3>
              <p className='lead text-center'>Account</p>
              <form onSubmit={this.handleSubmit}>
                <ButtonGroup>
                <div className='dropdown'>
                  
        
                <select className='btn btn-secondary btn-sm dropdown-toggle' value={this.state.sourceID} onChange= {(event) => this.handleAccount(event, 'sourceId')}>
                
                <option selected value = '0'>From Account</option>
                  <option value={this.props.user.checkingAccounts.id}>CheckingAccount</option>
                  <option value={this.props.user.savingsAccounts.id}>SavingsAccount</option>
                  <option value={this.props.user.cdAccounts[0].id}>CDAccount</option>
                  <option value={this.props.user.regularIra.id}>IRAAccount</option>
                    <option value={this.props.user.rolloverIra.id}>RolloverIRAAccount</option>
                    <option value={this.props.user.rothIRA.id}>RothIRAAccount</option>
                </select>
                    <select className='btn btn-secondary btn-sm dropdown-toggle' value="target account" onChange= {(event) => this.handleAccount(event, 'targetId')}>
                        <option selected value = '0'>To Account</option>
                    <option value={this.props.user.checkingAccounts.id}>CheckingAccount</option>
                  <option value={this.props.user.savingsAccounts.id}>SavingsAccount</option>
                  <option  value={this.props.user.cdAccounts[0].id}>CDAccount</option>
                  <option value={this.props.user.regularIra.id}>IRAAccount</option>
                    <option value={this.props.user.rolloverIra.id}>RolloverIRAAccount</option>
                    <option value={this.props.user.rothIRA.id}>RothIRAAccount</option>
                </select>
        
        
        
                  
                </div>
                </ButtonGroup>
                <div className='form-group'>
                  <input type='number' min='1' value={amount} 
                    onChange={(event) => this.handleChange(event, 'amount', false)}
                    className='form-control form-control-lg' placeholder='Amount' />
                </div>
                <br />
                {/* <div className="form-group">
                                    <textarea value={description} onChange={event => this.handleChange(event, "description", false)} className="form-control form-control-lg" placeholder="Description"></textarea>
                                </div> */}
                <div className='form-group'>
                  <label htmlFor='exampleFormControlTextarea1'>
                    Transaction Type :{' '}
                  </label>
                  <div className='form-check form-check-inline'>
                    <input checked={type === '1'} className='form-check-input' type='radio' id='income'
                      onChange={(event) => this.handleChange(event, 'type', false)} value='1'/>
                    <label className='form-check-label' htmlFor='deposit'>Deposit</label>
                  </div>
                  <div className='form-check form-check-inline'>
                    <input checked={type === '2'} className='form-check-input' type='radio' id='expense'
                      onChange={(event) => this.handleChange(event, 'type', false)}value='2'
                    />
                    <label className='form-check-label' htmlFor='withdraw'>Withdraw</label>
                  </div>
                  <div className='form-check form-check-inline'>
                    <input checked={type === '3'} className='form-check-input' type='radio' id='expense'
                      onChange={(event) => this.handleChange(event, 'type', false)}value='3'
                    />
                    <label className='form-check-label' htmlFor='transfer'>Transfer</label>
                  </div>
                </div>
                <input type='submit' className='btn btn-primary btn-block mt-4' />
                <br />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(AddTransaction)
);
