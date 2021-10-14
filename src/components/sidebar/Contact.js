import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import {
  faEnvelope,
  faMapMarkedAlt,
  faMobileAlt,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Contact = () => {
  return (
    <div className='contact'>
      <h1 className='contact__title sidebar-section-title'>Personal Info</h1>
      <div className='contact-container sidebar-section-container '>
        <div className='contact__info'>
          <FontAwesomeIcon icon={faEnvelope} className='contact__info-icon' />
          <span className='contact__info-text'>ragonzalezm.19@gmail.com</span>
        </div>
        <div className='contact__info'>
          <FontAwesomeIcon icon={faMobileAlt} className='contact__info-icon' />
          <span className='contact__info-text'>+56 9 9311 1866</span>
        </div>
        <div className='contact__info'>
          <FontAwesomeIcon
            icon={faMapMarkedAlt}
            className='contact__info-icon'
          />
          <span className='contact__info-text'>Santiago, Chile</span>
        </div>
        <div className='contact__info'>
          <FontAwesomeIcon icon={faLinkedin} className='contact__info-icon' />
          <span className='contact__info-text'>
            linkedin.com/in/ragonzalezm19/
          </span>
        </div>
        <div className='contact__info'>
          <FontAwesomeIcon icon={faGithub} className='contact__info-icon' />
          <span className='contact__info-text'>github.com/ragonzalezm19</span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
