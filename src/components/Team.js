import React from 'react';
import { Button } from './Button';
import './Team.css';
import { FaFire } from 'react-icons/fa';
import { BsXDiamondFill } from 'react-icons/bs';
import { GiCrystalize } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import { Link } from 'react-router-dom';

function Team() {
    return (
			<IconContext.Provider value={{ color: '#fff', size: 70 }}>
      <div className='pricing__section'>
        <div className='pricing__wrapper'>
          <h1 className='pricing__heading'>Our Team</h1>
          <div className='pricing__container'>
            <Link to='/sign-up' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <FaFire />
                </div>
                <h3>Team Lead</h3>
                <h3>Brent Thompson</h3>                
                <ul className='pricing__container-features'>
                  <li>Created project in JIRA by setting up the Sprint goal for the team. </li>
                  <li>Coordination and setting up stand up meetings for team</li>
                  <li>Made sure that team is on track to meet the deadlines</li>
                  <li>Jumped in to help team members finish the tasks</li>
                </ul>
                {/* <Button buttonSize='btn--wide' buttonColor='primary'>
                  Select Us
                </Button> */}
              </div>
            </Link>
            <Link to='/sign-up' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <BsXDiamondFill />
                </div>
                <h3>Front End</h3>
                <h3>Bina Patel</h3>                
                <ul className='pricing__container-features'>
                  <li>Designed the website Merit Bank</li>
                  <li>Created project using React, bootstrap, react-icon</li>
                  <li>Created connections to backend using API's</li>
                  <li>Retrived the data from backend and display on website</li>
                </ul>
                {/* <Button buttonSize='btn--wide' buttonColor='blue'>
                  Select Us
                </Button> */}
              </div>
            </Link>
            <Link to='/sign-up' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <GiCrystalize />
                </div>
                <h3>Back End</h3>
                <h3>Wesly Sharpe</h3>                
                <ul className='pricing__container-features'>
                  <li>Created the API's for Frontend to connect to</li>
                  <li>Created the database using MYSQL</li>
                  <li>Created the connection to the database using JPA</li>
                  <li>Created different methods to perform operations for project</li>
                </ul>
                {/* <Button buttonSize='btn--wide' buttonColor='primary'>
                  Select Us
                </Button> */}
              </div>
            </Link>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );

}

export default Team;