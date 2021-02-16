import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux';
import axios from 'axios';
import { addToken, addUser } from '../redux/ActionCreators';

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
            // description: '',
            type: '1'
        }
    }

    handleChange = (event, fieldName, checkbox) => {
        this.setState({
            [fieldName]: checkbox ? event.target.checked : event.target.value
        })
    }
    handleSubmit = async (event) => {
        let newTransaction = { 
            amount: this.state.amount, 
            // description: this.state.description, 
            type: this.state.type 
        }
        this.props.createTransaction(newTransaction,this.props.history,this.props.user.id);
        event.preventDefault();
    }

    const createTransaction = (newTransaction, history,accountid) => async dispath => {
        await axios.post(`http://localhost:8080/Me/transaction/${accountid}`, newTransaction)
            .then((res) => {
                history.push(`/transactions/${accountid}`)
            })
            // .catch((err) => {
            //     console.log(err);
            //     dispath({type:GET_ERRORS,payload:err.response.data})
            //})
    }

    render() {
        //account id
        let id = this.props.user.id;
        const { amount, description, type } = this.state;
        return (
            <div className="add-PBI">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <Link to={`/transactions/${id}`} className="btn btn-light">
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

export default withRouter(connect(null,{cmapStateToProps})(AddTransaction));