import project1 from '../public/images/projects/project1.jpg';
import project2 from '../public/images/projects/project2.jpg';
import project3 from '../public/images/projects/project3.jpg';
import project4 from '../public/images/projects/project4.jpg';
import project5 from '../public/images/projects/project5.jpg';
import project6 from '../public/images/projects/project6.jpg';
import project7 from '../public/images/projects/project7.jpg';
import project from '../public/images/projects/project.webp';

export default {
  homelinks: [
    {
      title: 'hero',
      link: '',
    },
    {
      title: 'about',
      link: '#about',
    },
    {
      title: 'projects',
      link: '#projects',
    },
    {
      title: 'testmonio',
      link: '#testmonio',
    },
    {
      title: 'contact',
      link: '#contact',
    },
  ],
  links: [
    {
      title: 'home',
      link: '/',
    },
    {
      title: 'about',
      link: '/about',
    },

    {
      title: 'projects',
      link: '/projects',
    },
  ],
  services: [
    {
      id: 1,
      title: 'web design',
      desc: 'web design for all devicess mobile , web tablette desktop',
    },
    {
      id: 2,
      title: 'web developpement',
      desc: 'web developpement for all devicess mobile , web tablette desktop',
    },
    {
      id: 3,
      title: 'database making ',
      desc: 'web design for all devicess mobile , web tablette desktop',
    },
  ],
  skills: [
    {
      categories: ['frontend', 'backend', 'mobile'],
      frontend: [
        {
          title: 'html',
          value: '90',
        },
        {
          title: 'css',
          value: '80',
        },
        {
          title: 'javascript',
          value: '90',
        },
        {
          title: 'react-next',
          value: '80',
        },
        {
          title: 'vue-nuxt',
          value: '80',
        },
      ],
      backend: [
        {
          title: 'python-django',
          value: '70',
        },
        {
          title: 'nodejs',
          value: '80',
        },
        {
          title: 'mangodb-mangoose',
          value: '60',
        },
      ],
      mobile: [
        {
          title: 'dart-flutter',
          value: '80',
        },
        {
          title: 'python-kivy-tkinter',
          value: '60',
        },
        {
          title: 'react-native',
          value: '70',
        },
      ],
    },
  ],
  projects: [
    {
      id: 1,
      title: 'project management',
      img: project1,
      desc: 'lorem up ceci est un project des developpement wed ',
    },
    {
      id: 2,
      title: 'Analytics project',
      img: project2,
      desc: 'lorem up ceci est un project des developpement wed ',
    },
    {
      id: 3,
      title: 'web design project',
      img: project3,
      desc: 'lorem up ceci est un project des developpement wed ',
    },
    {
      id: 4,
      title: 'mobile design project',
      img: project4,
      desc: 'lorem up ceci est un project des developpement wed ',
    },
    {
      id: 5,
      title: 'nuxtjs project',
      img: project5,
      desc: 'lorem up ceci est un project des developpement wed ',
    },
    {
      id: 6,
      title: 'vuejs project',
      img: project6,
      desc: 'lorem up ceci est un project des developpement wed ',
    },
    {
      id: 7,
      title: 'hacking project',
      img: project7,
      desc: 'lorem up ceci est un project des developpement wed ',
    },
    {
      id: 8,
      title: 'cybersecurity project',
      img: project,
      desc: 'lorem up ceci est un project des developpement wed ',
    },
   
  ],
  testmonio: [
    {
      id: 1,
      name: 'Yunus Taha',
      comments:
        'this agent is the one how really hept and make beatiful design for all kind of web applicaitions',
      stars: [1, 2, 3, 4],
    },
    {
      id: 2,
      name: 'Melike',
      comments:
        'this agent is the one how really hept and make beatiful design for all kinds of mobile applicaitions',
      stars: [1, 2, 3, 4],
    },
    {
      id: 3,
      name: 'Ayşe',
      comments:
        'this agents it is the one how really hept and make beatiful design for all kinds of database applicaitions',
      stars: [1, 2, 3, 4],
    },
  ],
};
