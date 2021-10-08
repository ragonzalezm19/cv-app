import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import {
  faEnvelope,
  faMapMarkedAlt,
  faMobileAlt,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Contacts = () => {
  return (
    <div className='contacts'>
      <h1 className='contacts__title ls-10'>CONTACT</h1>
      <div className='contacts__info'>
        <FontAwesomeIcon icon={faEnvelope} className='contacts__info-icon' />
        <span className='contacts__info-text'>ragonzalezm.19@gmail.com</span>
      </div>
      <div className='contacts__info'>
        <FontAwesomeIcon icon={faMobileAlt} className='contacts__info-icon' />
        <span className='contacts__info-text'>+56 9 9311 1866</span>
      </div>
      <div className='contacts__info'>
        <FontAwesomeIcon
          icon={faMapMarkedAlt}
          className='contacts__info-icon'
        />
        <span className='contacts__info-text'>Santiago, Chile</span>
      </div>
      <div className='contacts__info'>
        <FontAwesomeIcon icon={faLinkedin} className='contacts__info-icon' />
        <span className='contacts__info-text'>
          https://linkedin.com/in/ragonzalezm19/
        </span>
      </div>
      <div className='contacts__info'>
        <FontAwesomeIcon icon={faGithub} className='contacts__info-icon' />
        <span className='contacts__info-text'>
          https://github.com/ragonzalezm19
        </span>
      </div>
    </div>
  );
};

export default Contacts;
