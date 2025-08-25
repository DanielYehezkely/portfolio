import { nanoid } from 'nanoid'
import { Link } from '../types/linkType'
import { FaHtml5, FaReact, FaJsSquare } from 'react-icons/fa';
import { SiTypescript, SiFirebase, SiRedux } from 'react-icons/si';

export  const LINKS: Link[] = [
  { id: nanoid(), href: '#home', text: 'home' },
  { id: nanoid(), href: '#skills', text: 'skills' },
  { id: nanoid(), href: '#about', text: 'about' },
  { id: nanoid(), href: '#projects', text: 'projects' }
]


export const SKILLS = [
  {
    id: nanoid(),
    title: 'HTML & CSS',
    icon: <FaHtml5 className="h-16 w-16 text-orange-500" />,
    text: 'Experienced in semantic HTML and modern CSS, including Flexbox, Grid, and responsive design.',
  },
  {
    id: nanoid(),
    title: 'React',
    icon: <FaReact className="h-16 w-16 text-blue-500" />,
    text: 'Proficient in building dynamic and interactive user interfaces with React, using hooks and component-based architecture.',
  },
  {
    id: nanoid(),
    title: 'TypeScript',
    icon: <SiTypescript className="h-16 w-16 text-blue-600" />,
    text: 'Strong understanding of TypeScript for scalable and maintainable code, including types, interfaces, and generics.',
  },
  {
    id: nanoid(),
    title: 'Firebase',
    icon: <SiFirebase className="h-16 w-16 text-yellow-500" />,
    text: 'Experienced with Firebase authentication, Firestore database, and cloud functions for full-stack applications.',
  },
  {
    id: nanoid(),
    title: 'JavaScript',
    icon: <FaJsSquare className="h-16 w-16 text-yellow-400" />,
    text: 'Deep understanding of JavaScript ES6+ concepts, including asynchronous programming, closures, and DOM manipulation.',
  },
  {
    id: nanoid(),
    title: 'Redux',
    icon: <SiRedux className="h-16 w-16 text-purple-500" />,
    text: 'Experience managing state with Redux, including Redux Toolkit, reducers, actions, and middleware like Thunk.',
  },
];

export const PROJECTS = [
  {
    id: nanoid(),
    img: '',
    url: 'https://dyz-c-anime.netlify.app/',
    github: 'https://github.com/DanielYehezkely/c-anime',
    title: 'C-Anime',
    text: 'The Anime Library app helps users manage their anime watchlists and receive personalized recommendations for new anime to watch. Admins have special access to manage the anime library and user reviews.',
  },
  {
    id: nanoid(),
    img: '',
    url: 'https://dyz-minecraft-2d-game-project.netlify.app/',
    github: 'https://github.com/DanielYehezkely/minecraft2d-game-project',
    title: 'MineCraft 2D',
    text: 'This is a **2D game** inspired by the famous **Minecraft** open-world game. The project was created using **JavaScript**, **CSS**, and **HTML**. Players can generate a new world, use tools to interact with the environment, and modify the game world by adding or removing tiles.',
  },
  {
    id: nanoid(),
    img: '',
    url: 'https://trainmate.netlify.app/',
    github: 'https://github.com/ArturAbel/TrainMate',
    title: 'TrainMate',
    text: 'trainMate is a web app that connects users with local sports trainers. It allows users to search, book, and review trainers, with an admin approval system and messaging for trainer-trainee communication. Built with React, Redux, and Firebase, trainMate offers a seamless experience for managing fitness sessions.',
  },
];