import React, { useState } from 'react';
import {Redirect} from "react-router-dom";
import HeroSection from './HeroSection';
import { homeObjFour } from './Data';

const Login = (props) => {
    const [username, setusername] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);

    const submit = async (e) => {
        e.preventDefault();

        const response = await fetch('http://localhost:8000/api/login', {
            method: 'POST',
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username,
                password
            })
            
        });  

        const content = await response.json();
        props.setName(content.name);
        setRedirect(true);
        
    }

    if (redirect) {
        return <Redirect to="/Dashboard"/>;
    }

    return (
       
        <div className="col-sm-4 offset-sm-8"> 
        
        <HeroSection {...homeObjFour} />
        <form onSubmit={submit}>
            <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
            <input type="username" className="form-control" placeholder="username" required
                   onChange={e => setusername(e.target.value)}
            />
            <br /><br />
            <input type="password" className="form-control" placeholder="Password" required
                   onChange={e => setPassword(e.target.value)}
            />
            <br /><br />
            <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
            <br /><br />
        </form>
        </div>
        // </HeroSection>
    );
};

export default Login;


// import React, { Component, useEffect } from "react";
// import { Link, Redirect } from "react-router-dom";


// class Login extends Component {
   
//   login() {
//     console.warn("state", this.state);
//     fetch("http://localhost:8080/Me", {
//       method: "POST",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(this.state),
//     }).then((result) => {
//       result.json().then((resp) => {
//         console.log(resp);
//         console.log(resp.jwt);
//         localStorage.setItem("auth", resp.jwt);
//        // let history = useHistory();
          
//        this.props.history.push("/Dashboard");          
          
//       });
//     });
//   }

//   render() {
//     return (
//       <div>
//         <input
//           type="text" placeholder = "username"
//           onChange={(e) => {
//             this.setState({ username: e.target.value });
//           }}
//         />
//         <br />
//         <br />
//         <input
//           type="password" placeholder="password"
//           onChange={(e) => {
//             this.setState({ password: e.target.value });
//           }}
//         />
//         <br />
//         <br />
//         <button onClick={() => this.login()}> Login</button>
//         <br />
//         <br />
//         "Not Enrolled?"
//         <Link to="/register">Sign Up</Link>
//         Now
//         <br />
//         <br />
//       </div>
//     );
//   }
// }

// export default Login;