import React from 'react';
import { FaAlignJustify, FaCentercode } from 'react-icons/fa';
import '../../../App.css';
import Footer from '../../../components/pages/Footer/Footer';
import { withRouter, Link } from 'react-router-dom';
//import HeroSection from '../../HeroSection';
//import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';


function Home() {
  return (
    <>

      <div className='container-home'>

      <img className='home-img'src='images/Buildings.jpg' alt='Buildings' >
       
      </img>
       <div className="home-words">
      <h1 className= "home-h1">Banking from Anywhere</h1>
      <h3 className= "home-h3">Bank with us today</h3>
       <Link to="/Register"> Enroll Now </Link> 
      
      </div> 
      <Footer/>
      </div>
      
      


      {/* <HeroSection {...homeObjOne} />*/}

      
    </>
      
  );
}

export default Home;
