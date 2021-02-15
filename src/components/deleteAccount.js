import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import { addToken, addUser } from '../redux/ActionCreators';
import { User } from '../redux/user';
const mapStateToProps = state => {
    return {
        user: state.user,
        token: state.token
    }
}

const mapDispatchToProps = (dispatch) => ({
  addUser: () => dispatch(addUser())
 
});
class deleteAccount extends Component {
    
   
  
    deleteCDtoSavings = async (event) =>{
        
        const bal = this.props.user.checkingAccounts.balance;
        const Sourceid = this.props.user.checkingAccounts.id;
        const targetID = this.props.user.savingsAccounts.id;
                               
                             
    
    const r = await axios.post(
      'http://localhost:8080/api/Me/Transfer', { amount: bal, sourceAccountID: Sourceid, targetAccountID: targetID},{
          headers: { Authorization: `Bearer ${this.props.token.token}` }
      });
        console.log("Got here");
        
        
    const d = await axios.delete(
    'http://localhost:8080/api/Me/Delete/' + Sourceid,{
          headers: { Authorization: `Bearer ${this.props.token.token}` }
      });


     await axios.get('http://localhost:8080/api/Me', {
        headers: { Authorization: `Bearer ${this.props.token.token}` },
      })
      // console.log(info.data);
      .then((response) => this.props.dispatch(addUser(response.data)));
  
    this.props.history.push('/Dashboard');
  };
        
   render(){
       return(
       
       <div>
           <form onSubmit={this.deleteCDtoSavings}>
           <button className='w-100 btn btn-lg btn-primary' type='submit'>
                transfer
              </button>
           </form>
           </div>
       
       
       
       )
   }
    
    
}
export default withRouter(connect(mapStateToProps)(deleteAccount));
