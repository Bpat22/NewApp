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
import createAccount from './components/createAccount';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import PersonalBanking from './components/PersonalBanking';
import BusinessBanking from './components/BusinessBanking';
import deleteAccount from './components/deleteAccount';
import addTransaction from './components/AddTransaction';


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
          <Route exact path='/dashboard' component={Dashboard}/>
          <Route exact path='/createAccount' component={createAccount}/>
          <Route exact path='/aboutUs' component={AboutUs}/>
          <Route exact path='/contactUs' component={ContactUs}/>
          <Route exact path='/personalbanking' component={PersonalBanking}/>
          <Route exact path='/businessbanking' component={BusinessBanking}/>
          <Route exact path='/transactions/' component={addTransaction}/>
          <Route exact path='/deleteAccount' component={deleteAccount}/>
       <Route exact path='/addTransaction/' component={addTransaction}/>

      
      

        </Switch>
        <Footer />
    </Router>
      </Provider>
  );
}

export default App;
