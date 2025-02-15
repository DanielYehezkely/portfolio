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