import React from 'react';
import ExperienceList from './ExperienceList';

const Main = () => {
  return (
    <div className='main'>
      <p className='quick-resume'>
        Desarrollador web con alrededor de 5 años de experiencia con
        conocimientos en la parte Front-End y Back-End. Pro-activo, responsable,
        comprometido, con muchísimas ganas de crecer y seguir aprendiendo cada
        día más. Siempre dispuesto y enfocado en dar 100% en todo momento. Con
        grandes aptitudes para trabajar en equipo. Buen compañero de trabajo,
        siempre dispuesto a ayudar y aprender.
      </p>

      <ExperienceList />
    </div>
  );
};

export default Main;
