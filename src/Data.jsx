import { FaHome, FaUser, FaFolderOpen, FaEnvelopeOpen } from 'react-icons/fa';
import { RiBriefcase4Fill, RiGraduationCapFill } from 'react-icons/ri';
import skillsImg1 from './assets/html-logo.svg';
import skillsImg2 from './assets/css-logo.svg';
import skillsImg3 from './assets/javascript-logo.svg';
import skillsImg4 from './assets/react-logo.svg';
import skillsImg5 from './assets/tailwind-css-logo.svg';

import skillsImg6 from './assets/figma-logo.svg';
import skillsImg7 from './assets/sketch-logo.svg';
import skillsImg8 from './assets/adobe-xd-logo.svg';
import skillsImg9 from './assets/adobe-photoshop-logo.svg';
import skillsImg10 from './assets/invision-logo.svg';

import projectImg1 from './assets/project-1.jpg';
import projectImg2 from './assets/project-2.jpg';
import projectImg3 from './assets/project-3.jpg';
import projectImg4 from './assets/project-4.jpg';
import projectImg5 from './assets/project-5.jpg';
import projectImg6 from './assets/project-6.jpg';
import projectImg7 from './assets/project-7.jpg';
import projectImg8 from './assets/project-8.jpg';
import projectImg9 from './assets/project-9.jpg';
import projectImg10 from './assets/project-10.jpg';

import Theme1 from './assets/red.png';
import Theme2 from './assets/blueviolet.png';
import Theme3 from './assets/blue.png';
import Theme4 from './assets/magenta.png';
import Theme5 from './assets/yellowgreen.png';
import Theme6 from './assets/orange.png';
import Theme7 from './assets/yellow.png';

export const links = [
  {
    name: 'Home',
    icon: <FaHome className='nav-icon' />,
    path: '/',
  },

  {
    name: 'About',
    icon: <FaUser className='nav-icon' />,
    path: '/about',
  },

  {
    name: 'Portfolio',
    icon: <FaFolderOpen className='nav-icon' />,
    path: '/portfolio',
  },

  {
    name: 'Contact',
    icon: <FaEnvelopeOpen className='nav-icon' />,
    path: '/contact',
  },
];

export const personalInfo = [
  {
    title: 'First Name : ',
    description: 'Abhishek',
  },

  {
    title: 'Last Name : ',
    description: 'Yadav',
  },

  {
    title: 'Age : ',
    description: '20 Years',
  },

  {
    title: 'Nationality : ',
    description: 'India',
  },

  {
    title: 'Freelance : ',
    description: 'Available',
  },

  {
    title: 'Address : ',
    description: 'Delhi',
  },

  {
    title: 'Phone : ',
    description: '+91 9149184310',
  },

  {
    title: 'Email : ',
    description: 'arekyara9175@gmail.com',
  },

  {
    title: 'Skype : ',
    description: 'abhishek.arek',
  },

  {
    title: 'Langages : ',
    description: 'Hindi, English',
  },
];

export const stats = [
  {
    no: '1+',
    title: 'Years of <br /> Experience',
  },

  {
    no: '35+',
    title: 'Completed <br /> Projects',
  },

  {
    no: '0+',
    title: 'Happy <br /> Customers',
  },

  {
    no: '0+',
    title: ' Awards <br /> Won',
  },
];

export const skill = [
  {
    id: 1,
    img: skillsImg1,
    title: 'HTML',
    level: 'Intermediate',
    category: 'developer',
  },

  {
    id: 2,
    img: skillsImg2,
    title: 'CSS',
    level: 'Advanced',
    category: 'developer',
  },

  {
    id: 3,
    img: skillsImg3,
    title: 'JavaScript',
    level: 'Intermediate',
    category: 'developer',
  },

  {
    id: 4,
    img: skillsImg4,
    title: 'React',
    level: 'Basic',
    category: 'developer',
  },

  {
    id: 5,
    img: skillsImg5,
    title: 'Tailwind',
    level: 'Intermediate',
    category: 'developer',
  },

  {
    id: 6,
    img: skillsImg6,
    title: 'Figma',
    level: 'Advanced',
    category: 'designer',
  },

  {
    id: 7,
    img: skillsImg7,
    title: 'Sketch',
    level: 'Basic',
    category: 'designer',
  },

  {
    id: 8,
    img: skillsImg8,
    title: 'Adobe XD',
    level: 'Intermediate',
    category: 'designer',
  },

  {
    id: 9,
    img: skillsImg9,
    title: 'Photoshop',
    level: 'Intermediate',
    category: 'designer',
  },

  {
    id: 10,
    img: skillsImg10,
    title: 'InvisionApp',
    level: 'Basic',
    category: 'designer',
  },
];

export const resume = [
  {
    id: 1,
    category: 'experience',
    icon: <RiBriefcase4Fill />,
    year: '2025 - Present',
    title: 'Full Stack Developer <span> Freelance </span>',
    desc: 'Building full-stack web applications using React, Tailwind CSS, and Django. Created portfolio sites, online course platforms, and custom dashboards.',
  },
  {
    id: 2,
    category: 'experience',
    icon: <RiBriefcase4Fill />,
    year: '2024 - 2025',
    title: 'Frontend Developer <span> MSK Institute </span>',
    desc: 'Developed responsive and user-friendly UIs using React and Bootstrap. Optimized website performance and collaborated with backend developers for API integration.',
  },
  {
    id: 3,
    category: 'experience',
    icon: <RiBriefcase4Fill />,
    year: '2023 - 2024',
    title: 'Tally & Computer Fundamentals <span> ITC Shikohabad </span>',
    desc: 'Gained hands-on experience in basic computer operations and accounting software like Tally. Learned fundamentals of design and user interface principles.',
  },
  {
    id: 4,
    category: 'education',
    icon: <RiGraduationCapFill />,
    year: '2025 - Present',
    title: 'B.Tech in Computer Science <span> Noida International University </span>',
    desc: 'Pursuing B.Tech with specialization in Computer Science. Gaining skills in web development, data structures, Python, and software engineering.',
  },
  {
    id: 5,
    category: 'education',
    icon: <RiGraduationCapFill />,
    year: '2024',
    title: 'Senior Secondary (12th) <span> UP Board </span>',
    desc: 'Completed 12th with a focus on Physics, Chemistry, and Mathematics. Built a strong foundation in logic and problem-solving.',
  },
  {
    id: 6,
    category: 'education',
    icon: <RiGraduationCapFill />,
    year: '2022',
    title: 'Secondary Education (10th) <span> UP Board </span>',
    desc: 'Completed 10th with basic computer knowledge. Developed early interest in technology and web development.',
  },
];

export const portfolio = [
  {
    id: 1,
    img: projectImg1,
    title: 'Keto Hotels',
    description:
      'Short description of the project that was carried out in this portfolio.',
    skills: [skillsImg1, skillsImg2, skillsImg3],
    link: '/arek-portfolio/project_01/index.html',
  },

  {
    id: 2,
    img: projectImg2,
    title: 'Yummy Restaurant',
    description:
      'Short description of the project that was carried out in this portfolio.',
    skills: [skillsImg1, skillsImg2, skillsImg3],
    link: '/arek-portfolio/project_02/index.html',
  },

  {
    id: 3,
    img: projectImg3,
    title: 'Elearning Institute',
    description:
      'Short description of the project that was carried out in this portfolio.',
    skills: [skillsImg1, skillsImg2, skillsImg3],
    link: '/arek-portfolio/project_03/index.html',
  },

  {
    id: 4,
    img: projectImg4,
    title: 'Photofolio Website',
    description:
      'Short description of the project that was carried out in this portfolio.',
    skills: [skillsImg1, skillsImg2, skillsImg3],
    link: '/arek-portfolio/project_04/index.html',
  },

  {
    id: 5,
    img: projectImg5,
    title: 'Alex Portfolio',
    description:
      'Short description of the project that was carried out in this portfolio.',
    skills: [skillsImg1, skillsImg2, skillsImg3],
    link: '/arek-portfolio/project_05/index.html',
  },

  {
    id: 6,
    img: projectImg6,
    title: 'Feane Restaurant',
    description:
      'Short description of the project that was carried out in this portfolio.',
    skills: [skillsImg1, skillsImg2, skillsImg3],
    link: '/arek-portfolio/project_06/index.html',
  },

  {
    id: 7,
    img: projectImg7,
    title: 'Edu Web',
    description:
      'Short description of the project that was carried out in this portfolio.',
    skills: [skillsImg1, skillsImg2, skillsImg3],
    link: '/arek-portfolio/project_07/index.html',
  },

  {
    id: 8,
    img: projectImg8,
    title: 'Kelly Portfolio',
    description:
      'Short description of the project that was carried out in this portfolio.',
    skills: [skillsImg1, skillsImg2, skillsImg3],
    link: '/arek-portfolio/project_08/index.html',
  },

  {
    id: 9,
    img: projectImg9,
    title: 'Restaurantly',
    description:
      'Short description of the project that was carried out in this portfolio.',
    skills: [skillsImg1, skillsImg2, skillsImg3],
    link: '/arek-portfolio/project_09/index.html',
  },

  {
    id: 10,
    img: projectImg10,
    title: 'Laura Portfolio',
    description:
      'Short description of the project that was carried out in this portfolio.',
    skills: [skillsImg1, skillsImg2, skillsImg3],
    link: '/arek-portfolio/project_10/index.html',
  },
];

export const themes = [
  {
    img: Theme1,
    hue: '4',
  },

  {
    img: Theme2,
    hue: '271',
  },

  {
    img: Theme3,
    hue: '225',
  },

  {
    img: Theme4,
    hue: '339',
  },

  {
    img: Theme5,
    hue: '80',
  },

  {
    img: Theme6,
    hue: '19',
  },

  {
    img: Theme7,
    hue: '42',
  },
];
