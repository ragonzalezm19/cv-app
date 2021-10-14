import React from 'react';
import Contact from './Contact';
// import Education from './Education';
import PersonalTitle from './PersonalTitle';
import SidebarContainer from './SidebarContainer';
import Skills from './Skills';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <PersonalTitle />
      <SidebarContainer>
        <Contact />
      </SidebarContainer>
      <SidebarContainer>
        <Skills />
      </SidebarContainer>
      {/* <Education /> */}
    </div>
  );
};

export default Sidebar;
