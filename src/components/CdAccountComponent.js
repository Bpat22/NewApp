import React from 'react';
import { Card, CardTitle, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';



export const CDAccountsCard = (accounts) => {
    if(accounts.accounts.length != 0)
    return(
       <div className='container'>
          <div className='card card-body bg-light mb-3'>
            <div className='row'>
              <div className='col-lg-4 col-md-3 col-6'>
                <h3>CD Account</h3>
                <p>Account Number: {accounts.accounts[0].id}</p>
              </div>

              {/* to display account open date
                        <div className="col-lg-4 col-md-3 col-6">
                            <h3>{this.props.type}</h3>
                            <p>Open Date: {this.props.dateopened}</p>                            
                        </div> */}

              <div className='col-lg-4 col-md-3 col-6 text-center'>
                <h3>Balance</h3>
                <h1> ${accounts.accounts[0].balance}.00</h1>
              </div>
              <div className='col-md-4 col-12 d-lg-block'>
                <ul className='list-group'>
                  <Link to={`/addTransaction`}>
                    <li className='list-group-item board text-success'>
                      <i className='fa fa-flag-checkered pr-1'>
                        {' '}
                        Transfer
                      </i>
                    </li>
                  </Link>
                  <Link to={`/login`}>
                    <li className='list-group-item update text-info'>
                      <i className='fa fa-edit pr-1'> Update Account Info</i>
                    </li>
                  </Link>
                  <Link to='/deleteAccount' >
                    <li className='list-group-item delete text-danger'>
                      <i className='fa fa-minus-circle pr-1'> Delete Account</i>
                    </li>
                  </Link>
                </ul>
              </div>
            </div>
          </div>
        </div>
    )
    else{
        return(
            <div></div>
        )
    }
}

export const DBAAccountsCard = (accounts) => {
    if(accounts.accounts.length != 0)
    return(
       <div className='container'>
          <div className='card card-body bg-light mb-3'>
            <div className='row'>
              <div className='col-lg-4 col-md-3 col-6'>
                <h3>DBA Checking</h3>
                <p>Account Number: {accounts.accounts[0].id}</p>
              </div>

              {/* to display account open date
                        <div className="col-lg-4 col-md-3 col-6">
                            <h3>{this.props.type}</h3>
                            <p>Open Date: {this.props.dateopened}</p>                            
                        </div> */}

              <div className='col-lg-4 col-md-3 col-6 text-center'>
                <h3>Balance</h3>
                <h1> ${accounts.accounts[0].balance}.00</h1>
              </div>
              <div className='col-md-4 col-12 d-lg-block'>
                <ul className='list-group'>
                  <Link to={`/addTransaction`}>
                    <li className='list-group-item board text-success'>
                      <i className='fa fa-flag-checkered pr-1'>
                        {' '}
                        Transfer
                      </i>
                    </li>
                  </Link>
                  <Link to={`/login`}>
                    <li className='list-group-item update text-info'>
                      <i className='fa fa-edit pr-1'> Update Account Info</i>
                    </li>
                  </Link>
                  <Link to='/deleteAccount' >
                    <li className='list-group-item delete text-danger'>
                      <i className='fa fa-minus-circle pr-1'> Delete Account</i>
                    </li>
                  </Link>
                </ul>
              </div>
            </div>
          </div>
        </div>
    )
    else{
        return(
            <div></div>
        )
    }
}

