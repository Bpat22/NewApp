import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { deleteToken, deleteAccount  } from '../redux/ActionCreators';
// import deleteAccount from './deleteAccount';

class DashboardComponent extends Component {
  constructor(props) {
    super(props);

    // deleteBtnClick = () => {
    //   if(window.confirm("Are you sure, you want to delete this Account?")){
    //     this.props.deleteAccount(this.props.user.data)
    //   }
    // }
  }
  render() {
    if (this.props.account == null) {
      return <div></div>;
    } else {
      return (
        <div className='container'>
          <div className='card card-body bg-light mb-3'>
            <div className='row'>
              <div className='col-lg-4 col-md-3 col-6'>
                <h3>{this.props.type}</h3>
                <p>Account Number: {this.props.account.id}</p>
              </div>

              <div className='col-lg-4 col-md-3 col-6 text-center'>
                <h3>Balance</h3>
                <h1> ${this.props.account.balance}.00</h1>
              </div>
              <div className='col-md-4 col-12 d-lg-block'>
                <ul className='list-group'>
                  <Link to={`/addTransaction`}>
                    <li className='list-group-item board text-success'>
                      <i className='fa fa-flag-checkered pr-1'>
                        {' '}
                        Transfer Amount
                      </i>
                    </li>
                  </Link>
                  <Link to={`/addTransaction`}>
                    <li className='list-group-item update text-info'>
                      <i className='fa fa-edit pr-1'> Deposit</i>
                    </li>
                  </Link>
                  <Link to={`/addTransaction`}>
                    <li className='list-group-item update text-info'>
                      <i className='fa fa-edit pr-1'> Withdraw</i>
                    </li>
                  </Link>
                  <Link to={'/deleteAccount'}>
                    <li className='list-group-item delete text-danger'>
                      <i className='fa fa-minus-circle pr-1'> Delete Account</i>
                    </li>
                  </Link>
                </ul>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}
export default DashboardComponent;
