import React from 'react';

const Experience = ({ years, title, description }) => {
  return (
    <div className='experience'>
      <div className='experiences__years'>{years}</div>
      <div className='experience__container'>
        <div className='experiences__title'>{title}</div>
        <div className='experience__description'>{description}</div>
      </div>
    </div>
  );
};

export default Experience;
