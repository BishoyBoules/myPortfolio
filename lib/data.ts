import React from 'react'
import { CgWorkAlt } from 'react-icons/cg'
import { FaReact } from 'react-icons/fa'
import { LuGraduationCap } from 'react-icons/lu'
import pic1 from '@/public/pic1.png'
import pic2 from '@/public/pic2.png'
import pic3 from '@/public/pic3.png'
import pic4 from '@/public/pic4.png'

export const links = [
  {
    name: 'Home',
    hash: '#home'
  },
  {
    name: 'About',
    hash: '#about'
  },
  {
    name: 'Projects',
    hash: '#projects'
  },
  {
    name: 'Skills',
    hash: '#skills'
  },
  {
    name: 'Experience',
    hash: '#experience'
  },
  {
    name: 'Contact',
    hash: '#contact'
  }
] as const

export const experiencesData = [
  {
    title: 'Graduated',
    location: 'German univeristy in Cairo',
    description:
      'I graduated after 5 years of studying Engineering Mechatronics and started my career as a mechatronics enginner until 2020 when I started my journey as a software engineer.',
    icon: React.createElement(LuGraduationCap),
    date: 'Jun 2016'
  },
  {
    title: 'Front-End Developer',
    location: 'Abseleration',
    description:
      'I worked as a freelancing front-end developer for 2 years and 4 months. Spearheaded the development of UI/UX pages for a freelancing project focused on electrical and mechanical designs, utilizing HTML, CSS, and JavaScript.',
    icon: React.createElement(CgWorkAlt),
    date: 'Jan 2021 - Apr 2023'
  },
  {
    title: 'Front-End Developer',
    location: 'VHM',
    description:
      'I worked as a full-time front-end developer. Contributed to Veeva and MI projects for medical companies, implementing animations in mailers to enhance user engagement.',
    icon: React.createElement(CgWorkAlt),
    date: 'Mar 2021 - Oct 2021'
  },
  {
    title: 'Front-End Developer Intern',
    location: 'Trufla Technology',
    description:
      'Received comprehensive training on new platforms and libraries, including React.js, to enhance technical capabilities. Participated in a multinational environment, adopting Agile and Scrum methodologies for effective teamwork.',
    icon: React.createElement(CgWorkAlt),
    date: 'Dec 2021 - MAr 2022'
  },
  {
    title: 'Software Technical Support Engineer',
    location: 'Trufla Technology',
    description:
      'Provided on-call pager rotation support, ensuring 24/7 assistance during crucial customer go-lives and maintenance phases. Communicated effectively with customers via email, demonstrating strong interpersonal and customer service skills.',
    icon: React.createElement(CgWorkAlt),
    date: 'Apr 2022 - Sep 2022'
  },
  {
    title: 'React Js Developer',
    location: 'Wakeb',
    description:
      'Developed the frontend of Saudi Arabia Digital Government website using HTML, CSS and React. Used Tailwind framework for styling.',
    icon: React.createElement(FaReact),
    date: 'Dec 2023 - Aug 2024'
  }
] as const

export const projectsData = [
  {
    title: 'Racrops',
    description:
      'I have developed a web application for Racrops company to help them show their industry and products',
    tags: ['React', 'Next.js', 'JavaScript', 'Tailwind'],
    imageUrl: pic1,
    link: 'https://racrops.com'
  },
  {
    title: 'Cafe menu',
    description:
      'I developed a web application for a cafe to provide a user-friendly interface for customers to place orders.',
    tags: ['React', 'Next.js', 'JavaScript', 'Tailwind'],
    imageUrl: pic2,
    link: 'https://bishoy-boules-next13-list-app.vercel.app/'
  },
  {
    title: 'Restao Restaurant',
    description:
      'I have developed a web application for a restaurant to provide a user-friendly interface for customers to place orders.',
    tags: ['JavaScript', 'HTMl', 'Bootstrap'],
    imageUrl: pic3,
    link: 'https://bishoyboules.github.io/justCoffee'
  },
  {
    title: 'Tab Cash',
    description:
      'I have developed a fintech web app using React.js, Next.js and sass',
    tags: ['React', 'Next.js', 'sass'],
    imageUrl: pic4,
    link: 'https://tapcash-ten.vercel.app/'
  }
] as const

export const skillsData = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'React Native',
  'Next.js',
  'Redux',
  'Git',
  'Tailwind',
  'Bootstrap',
  'Restful Apis',
  'Framer Motion'
] as const
