import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Daneil Yu | Web Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Daniel Yu',
  subtitle: 'Web Developer',
  cta: 'Learn more',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'A recent graduate of a full-stack development boot camp with experience in Java, Spring Boot, JavaScript, TypeScript, MySQL and MongoDB.  ',
  paragraphTwo:
    'Environmental Engineering background in Taiwan and bilingual in Chinese and English. ',
  paragraphThree:
    'Innovativequick learner who enjoys the process of designing and building websites and likes to solve challenging problems. Looking to join a team that I can use all I’ve learned and contribute to its success.',
  resume:
    'https://docs.google.com/document/d/1UuztsW4WQRWzihy84wIKtwEpPHqmhGGpWV4snOjjDj8/edit?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'cms.png',
    title: 'CMS',
    info: 'A construction management system platform for small and medium size businesses',
    info2: 'Built with Java, ReactJS, JUnit, Spring Boot, and MySQL',
    url: 'https://github.com/CodingErik/constructionManagementSystem',
    repo: 'https://github.com/CodingErik/constructionManagementSystem', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'dy-news.png',
    title: 'DY NEWS',
    info: 'An app that you can read the US and Taiwan hottest & latest news at the same time',
    info2: 'Built with React, TypeScript, Redux, newsapi, and OpenWeatherAPI',
    url: 'https://dy-news.web.app/',
    repo: 'https://github.com/DanielYu0864/DY-news', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'MD-Charcuterie.png',
    title: 'MD Charcuterie',
    info: 'A site for a small business to sell charcuterie and inform customers',
    info2:
      'Built with JavaScript, ReactJS, MongoDB, CSS, HTML, Express, Node.JS, bycryptjs, jsonwebtokens, Axios, Multer, Mongoose, Morgan, Bootstrap',
    url: 'https://ldcharcuterie.herokuapp.com/',
    repo: 'https://github.com/PeteLow-13/Charcuterie', // if no repo, the button will not show up
  },
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
