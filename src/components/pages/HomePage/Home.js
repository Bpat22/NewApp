import React from 'react';
import { FaAlignJustify, FaCentercode } from 'react-icons/fa';
import HeroSection from '../../HeroSection';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';

function Home() {
  return (
    <>
      {/* <div className='container'>
        <div className='caption Active'>
          <h2> Bank from Anywhere</h2>
          <p>One click away from your online banking</p>
        </div>
  </div> */}

      <imgage src='images/Buildings.jpg' alt='Buildings' style={{justifyContent:'FaCentercode', alignItems:'center'}}>
        {/* <text style={{backgroundColor:'transparent'}}>
          Banking from anywhere
        </text> */}
      </imgage>

      <HeroSection {...homeObjOne} />
      {/* <HeroSection {...homeObjThree} /> */}
      {/* <HeroSection {...homeObjTwo} /> */}
      {/* <HeroSection {...homeObjFour} /> */}
    </>
  );
}

export default Home;
