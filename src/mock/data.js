import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Daneil Yu | Front-end Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Daniel Yu',
  subtitle: 'Front-end Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'A web development boot camp graduates with experience in HTML5, CSS3, JavaScript, TypeScript, SQL and MongoDB. ',
  paragraphTwo:
    'Environmental Engineering background in Taiwan and bilingual in Chinese and English. ',
  paragraphThree:
    'I enjoy the process of designing and building websites and like to solve challenging problems. Looking to join a team that I can use all I’ve learned and contribute to its success.',
  resume:
    'https://docs.google.com/document/d/1UuztsW4WQRWzihy84wIKtwEpPHqmhGGpWV4snOjjDj8/edit?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'family-app.png',
    title: 'Family App',
    info: 'An app that you can feel safe letting your child use for watching videos and playing games.',
    info2: 'Built with MongoDB, ExpressJS, ReactJS, NodeJS, JavaScript, and SCSS',
    url: 'https://project03familyapp.herokuapp.com/',
    repo: 'https://github.com/DanielYu0864/Project-03', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'sk8tool.jpg',
    title: 'Sk8Tool',
    info: 'A app to help user find skateparks built with MVC (Model–view–controller)',
    info2: 'Built with MySQL, ExpressJS, HandlebarJS, NodeJS, JavaScript, CSS, and googleAPI',
    url: 'https://sk8fndr.herokuapp.com/',
    repo: 'https://github.com/DanielYu0864/Project-02-Sk8Tool', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'employee-management-system.png',
    title: 'Employee Management System',
    info: 'Employee management system built with NodeJS',
    info2: 'JavaScript, ExpressJs, and NodeJS',
    url: 'https://github.com/DanielYu0864/DanielYu-HomeWork-12-Employee-Management-System',
    repo: 'https://github.com/DanielYu0864/DanielYu-HomeWork-12-Employee-Management-System', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'weather-app.png',
    title: 'Weather App',
    info: '"A sample weather dashboard with current weather and nextfive days weather forecast',
    info2: 'Built with HTML, JavaScript, CSS, and OpenWeatherAPI',
    url: 'https://danielyu0864.github.io/DanielYu-HomeWork-06-Weather-Dashboard/',
    repo: 'https://github.com/DanielYu0864/DanielYu-HomeWork-06-Weather-Dashboard', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'adam741963@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/daniel-yu-264360199/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/DanielYu0864',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
