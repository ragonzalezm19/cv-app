import React from 'react';
import Experience from './Experience';

const experiencesList = [
  {
    years: '2014 – 2015',
    title: 'Analista y desarrollador Web en ISOFTDESING C.A. (Venezuela)',
    description:
      'Encargado de análisis y desarrollo de aplicaciones web para los clientes de ISOFTDESING',
  },
  {
    years: '2015 – 2016',
    title: 'Programador Web Freelancer. (Venezuela)',
    description: 'Desarrolle Sitios web para clientes.',
  },
  {
    years: '2017 – 2017',
    title: 'Analista y desarrollador Web en Britmedia (Chile)',
    description:
      'Encargado del análisis y desarrollo de aplicaciones web, sitios web, portafolios digitales, landings, etc. de los clientes de Britmedia.',
  },
  {
    years: '2017 – 2018',
    title: 'Analista de Sistemas en LAW (Chile)',
    description:
      'Encargado del análisis, desarrollo y mantenimiento de sistemas informativos de la aerolínea LAW.',
  },
  {
    years: '2017 – 2018',
    title: 'Desarrollador Full Stack en Lealtad360 (Chile)',
    description:
      'Encargado del mantenimiento y creación de sistemas de los clientes de Lealtad360.',
  },
  {
    years: '2018 – 2019 ',
    title: 'Desarrollador de software en Creasys (Chile)',
    description:
      'Encargado del desarrollo y mantenimiento del módulo de Límite para cliente Santander.',
  },
  {
    years: '2019 – ',
    title: 'Actualidad Desarrollador Full Stack en GlobalConexus (Chile)',
    description:
      'Encargado del desarrollo y mantenimiento proyectos para la empresa Inversiones Security.',
  },
];

const ExperienceList = () => {
  return (
    <div>
      <h2 className='experience-list__title'>Experience</h2>
      {experiencesList.map((experience, index) => (
        <Experience key={index} {...experience} />
      ))}
    </div>
  );
};

export default ExperienceList;
