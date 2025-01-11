import { nanoid } from 'nanoid'

interface Link {
  id: string;
  href: string;
  text: string;
}

export  const LINKS: Link[] = [
  { id: nanoid(), href: '#home', text: 'home' },
  { id: nanoid(), href: '#about', text: 'about' },
  { id: nanoid(), href: '#skills', text: 'skills' },
  { id: nanoid(), href: '#projects', text: 'projects' }
]