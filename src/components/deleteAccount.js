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
  
    deleteAccount = async (event) =>{
        event.preventDefault()
    const Sourceid = this.props.user.data
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
           <form onSubmit={this.deleteAccount}>
           <button className='w-100 btn btn-lg btn-danger' type='submit'>
                Delete Account
              </button>
           </form>
           </div>
       )
   }  
    
}
export default deleteAccount;
