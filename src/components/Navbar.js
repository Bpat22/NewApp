import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { MdLanguage } from 'react-icons/md';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import ContactUs from './ContactUs';
import {AboutUs} from './AboutUs';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar' >
          <div className='navbar-container container'>
            <Link to='/' className='navbar logo' onClick={closeMobileMenu}>
              <MdLanguage className='navbar-icon' />
              <h2>Merit Bank</h2>
            </Link>

            <div className='menu-icon' onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='navitem'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/personalbanking' className='nav-links' onClick={closeMobileMenu}
                >
                  Personal Banking
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/businessbanking' className='nav-links' onClick={closeMobileMenu}
                >
                  Business Banking
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/aboutus' className='nav-links' onClick={closeMobileMenu}
                >
                  About Us
                </Link>
              </li>
              {/* <li className='nav-item'> 
                <Link to='/contactus' className='nav-links' onClick={closeMobileMenu}
                >
                  Contact Us
                </Link>
              </li> */}
			        <li className='nav-btn'>
                {button ? (
                  <Link to='/login' className='btn-link'>
                    <Button buttonStyle='btn--outline'>Log In</Button>
                  </Link>
                ) : (
                  <Link to='/login' className='btn-link'>
                    <Button
                      buttonStyle='btn--outline'
                      buttonSize='btn--mobile'
                      onClick={closeMobileMenu}
                    >
                      Log In
                    </Button>
                  </Link>
                )}
              </li>
              <li className='nav-btn'>
                {button ? (
                  <Link to='/register' className='btn-link'>
                    <Button buttonStyle='btn--outline'>Sign Up</Button>
                  </Link>
                ) : (
                  <Link to='/register' className='btn-link'>
                    <Button
                      buttonStyle='btn--outline'
                      buttonSize='btn--mobile'
                      onClick={closeMobileMenu}
                    >
                      Sign Up
                    </Button>
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
