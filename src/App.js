import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/pages/HomePage/Home';
import Login from './components/Login';
import Register from './components/Register';

import Footer from './components/pages/Footer/Footer';

function App() {
  return (
    <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/register' component={Register}/>

        </Switch>
        <Footer />
    </Router>
  );
}

export default App;
