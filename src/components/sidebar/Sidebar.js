import React from 'react';
import Contacts from './Contacts';
import Education from './Education';
import Skills from './Skills';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <Contacts />
      <Skills />
      <Education />
    </div>
  );
};

export default Sidebar;
