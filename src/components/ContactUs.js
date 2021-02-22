import React from 'react';
// import './Footer/Footer.css';
import { Button } from './Button';

function ContactUs() {
  
    return (
      <div>
        <h3> Contact Us Page</h3>
        <section className='footer-subscription'>
          <p className='footer-subscription-heading'>
            Join our exclusive membership to receive the latest news and trends
          </p>
          <p className='footer-subscription-text'>
            You can unsubscribe at any time.
          </p>
          <div className='input-areas'>
            <form>
              <input
                className='footer-input'
                name='email'
                type='email'
                placeholder='Your Email'
              />
              <Button buttonStyle='btn--outline'>Subscribe</Button>
            </form>
          </div>
        </section>
      </div>
    );
  
}
export default ContactUs;

