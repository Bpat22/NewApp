import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/pages/HomePage/Home';
import Login from './components/Login';
import Register from './components/Register';
import { Provider } from 'react-redux';
import Dashboard from './components/Dashboard';
import { ConfigureStore } from './redux/configureStore';

import Footer from './components/pages/Footer/Footer';

const store = ConfigureStore();
function App() {
  return (
      <Provider store={store}>
    <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/register' component={Register}/>
      <Route exact path='/Dashboard' component={Dashboard}/>

        </Switch>
        <Footer />
    </Router>
      </Provider>
  );
}

export default App;
