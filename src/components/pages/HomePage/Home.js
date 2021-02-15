import React from 'react';
import { FaAlignJustify, FaCentercode } from 'react-icons/fa';
import HeroSection from '../../HeroSection';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';

function Home() {
  return (
    <>

      <div className='container'>

      <img src='images/Buildings.jpg' alt='Buildings' >
        {/* <div className="centered">Banking from ANywhere</div> */}
      </img>
      </div>


      <HeroSection {...homeObjOne} />

      
    </>
  );
}

export default Home;
